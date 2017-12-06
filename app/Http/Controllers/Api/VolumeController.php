<?php

namespace Biigle\Http\Controllers\Api;

use Exception;
use Biigle\Volume;
use Illuminate\Http\Request;

class VolumeController extends Controller
{
    /**
     * Displays the specified volume.
     *
     * @api {get} volumes/:id Get a volume
     * @apiGroup Volumes
     * @apiName ShowVolumes
     * @apiPermission projectMember
     *
     * @apiParam {Number} id The volume ID.
     *
     * @apiSuccessExample {json} Success response:
     * {
     *    "id": 1,
     *    "name": "volume 1",
     *    "media_type_id": 3,
     *    "creator_id": 7,
     *    "created_at": "2015-02-20 17:51:03",
     *    "updated_at": "2015-02-20 17:51:03",
     *    "url": "/vol/images/"
     * }
     *
     * @param  int  $id
     * @return Volume
     */
    public function show($id)
    {
        $volume = Volume::findOrFail($id);
        $this->authorize('access', $volume);

        return $volume;
    }

    /**
     * Updates the attributes of the specified volume.
     *
     * @api {put} volumes/:id Update a volume
     * @apiGroup Volumes
     * @apiName UpdateVolumes
     * @apiPermission projectAdmin
     *
     * @apiParam {Number} id The volume ID.
     *
     * @apiParam (Attributes that can be updated) {String} name Name of the volume.
     * @apiParam (Attributes that can be updated) {Number} media_type_id The ID of the media type of the volume.
     * @apiParam (Attributes that can be updated) {String} url The base URL ot the image files. Can be a local path like `/vol/volumes/1` or a remote path like `https://example.com/volumes/1`. Updating the URL will trigger a re-generation of all volume image thumbnails.
     * @apiParam (Attributes that can be updated) {String} video_link Link to a video that belongs to or was the source of this volume.
     * @apiParam (Attributes that can be updated) {String} gis_link Link to a GIS that belongs to this volume.
     * @apiParam (Attributes that can be updated) {String} doi The DOI of the dataset that is represented by the new volume.
     *
     * @param Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $volume = Volume::findOrFail($id);
        $this->authorize('update', $volume);

        $this->validate($request, Volume::$updateRules);

        if ($request->has('url')) {
            $volume->url = $request->input('url');
            try {
                $volume->validateUrl();
            } catch (Exception $e) {
                return $this->buildFailedValidationResponse($request, [
                    'url' => $e->getMessage(),
                ]);
            }
        }

        $volume->name = $request->input('name', $volume->name);
        $volume->media_type_id = $request->input('media_type_id', $volume->media_type_id);
        $volume->video_link = $request->input('video_link', $volume->video_link);
        $volume->gis_link = $request->input('gis_link', $volume->gis_link);
        $volume->doi = $request->input('doi', $volume->doi);

        $isDirty = $volume->isDirty();
        $newUrl = $volume->isDirty('url');
        $volume->save();

        // do this *after* saving
        if ($newUrl) {
            $volume->handleNewImages();
        }

        if (!static::isAutomatedRequest($request)) {
            if ($request->has('_redirect')) {
                return redirect($request->input('_redirect'))
                    ->with('saved', $isDirty);
            }

            return redirect()->back()
                ->with('saved', $isDirty);
        }
    }
}
