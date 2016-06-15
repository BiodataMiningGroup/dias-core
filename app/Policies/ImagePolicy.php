<?php

namespace Dias\Policies;

use Dias\Image;
use Dias\Label;
use Dias\User;
use Dias\Role;
use DB;
use Cache;
use Illuminate\Auth\Access\HandlesAuthorization;

class ImagePolicy extends CachedPolicy
{
    use HandlesAuthorization;

    /**
     * Intercept all checks
     *
     * @param User $user
     * @param string $ability
     * @return bool|null
     */
    public function before($user, $ability)
    {
        if ($user->isAdmin) {
            return true;
        }
    }

    /**
     * Determine if the user can access the given image
     *
     * @param  User  $user
     * @param  Image  $image
     * @return bool
     */
    public function access(User $user, Image $image)
    {
        // put this to permanent cache for rapid querying of image thumbnails
        return Cache::remember("image-can-access-{$user->id}-{$image->transect_id}", 0.5, function () use ($user, $image) {
            // check if user is member of one of the projects, the image belongs to
            return DB::table('project_user')
                ->where('user_id', $user->id)
                ->whereIn('project_id', function ($query) use ($image) {
                    // the projects, the image belongs to
                    $query->select('project_id')
                        ->from('project_transect')
                        ->where('transect_id', $image->transect_id);
                })
                ->exists();
        });
    }

    /**
     * Determine if the user can add an annotation to given image
     *
     * @param  User  $user
     * @param  Image  $image
     * @return bool
     */
    public function addAnnotation(User $user, Image $image)
    {
        return $this->remember("image-can-add-annotation-{$user->id}-{$image->id}", function () use ($user, $image) {
            // check if user is member of one of the projects, the image belongs to
            return DB::table('project_user')
                ->where('user_id', $user->id)
                ->whereIn('project_id', function ($query) use ($image) {
                    // the projects, the image belongs to
                    $query->select('project_id')
                        ->from('project_transect')
                        ->where('transect_id', $image->transect_id);
                })
                ->whereIn('project_role_id', [Role::$editor->id, Role::$admin->id])
                ->exists();
        });
    }

    /**
     * Determine if the user can delete the given image
     *
     * @param  User  $user
     * @param  Image  $image
     * @return bool
     */
    public function destroy(User $user, Image $image)
    {
        return $this->remember("image-can-destroy-{$user->id}-{$image->id}", function () use ($user, $image) {
            // check if user is member of one of the projects, the image belongs to
            return DB::table('project_user')
                ->where('user_id', $user->id)
                ->whereIn('project_id', function ($query) use ($image) {
                    // the projects, the image belongs to
                    $query->select('project_id')
                        ->from('project_transect')
                        ->where('transect_id', $image->transect_id);
                })
                ->where('project_role_id', Role::$admin->id)
                ->exists();
        });
    }

    /**
     * Determine if the user can attach the given label to the given image.
     *
     * The image must belong to a project where the user is an editor or
     * admin. The label must belong to a label tree that is used by one of the projects
     * the user and the image belong to.
     *
     * @param  User  $user
     * @param  Image  $image
     * @param  Label  $label
     * @return bool
     */
    public function attachLabel(User $user, Image $image, Label $label)
    {
        return $this->remember("image-can-attach-label-{$user->id}-{$image->id}-{$label->id}", function () use ($user, $image, $label) {
            // projects, the image belongs to *and* the user is editor or admin of
            $projectIds = DB::table('project_user')
                ->where('user_id', $user->id)
                ->whereIn('project_id', function ($query) use ($image) {
                    // the projects, the image belongs to
                    $query->select('project_id')
                        ->from('project_transect')
                        ->where('transect_id', $image->transect_id);
                })
                ->whereIn('project_role_id', [Role::$editor->id, Role::$admin->id])
                ->pluck('project_id');

            // user must be editor or admin in one of the projects
            return !empty($projectIds)
                // label must belong to a label tree that is used by one of the projects
                && DB::table('label_tree_project')
                    ->whereIn('project_id', $projectIds)
                    ->where('label_tree_id', $label->label_tree_id)
                    ->exists();
        });
    }
}
