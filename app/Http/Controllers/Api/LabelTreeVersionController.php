<?php

namespace Biigle\Http\Controllers\Api;

use DB;
use Ramsey\Uuid\Uuid;
use Biigle\LabelTree;
use Biigle\LabelTreeVersion;
use Biigle\Http\Requests\StoreLabelTreeVersion;
use Biigle\Http\Requests\UpdateLabelTreeVersion;
use Biigle\Http\Requests\DestroyLabelTreeVersion;

class LabelTreeVersionController extends Controller
{

    /**
     * Creates a new label tree version.
     *
     * @api {post} label-trees/:id/version Create a new label tree version
     * @apiGroup Label Trees
     * @apiName StoreLabelTreeVersions
     * @apiPermission labelTreeAdmin
     * @apiDescription This will create a copy of the label tree which can no longer be modified.
     *
     * @apiParam (Required attributes) {String} name Name of the new label tree version.
     *
     * @apiParam (Optional attributes) {String} description Description of the new label tree version. If empty, the description of the master label tree will be taken.
     *
     * @apiSuccessExample {json} Success response:
     *
     * {
     *    "id": 1,
     *    "name": "v1.0",
     *    "description": "First version of the label tree.",
     *    "label_tree_id": 1
     * }
     *
     * @param StoreLabelTreeVersion $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLabelTreeVersion $request)
    {
        $version = DB::transaction(function () use ($request) {
            $version = new LabelTreeVersion;
            $version->name = $request->input('name');
            $version->label_tree_id = $request->tree->id;
            $version->save();

            $versionTree = $request->tree->replicate();
            $versionTree->uuid = Uuid::uuid4();
            $versionTree->version_id = $version->id;
            if ($request->filled('description')) {
                $versionTree->description = $request->input('description');
            }
            $versionTree->save();

            $versionTree->authorizedProjects()
                ->sync($request->tree->authorizedProjects()->pluck('id'));

            $versionTree->replicateLabelsOf($request->tree);

            return $version;
        });

        if (!$this->isAutomatedRequest()) {
            return $this->fuzzyRedirect('label-tree-versions', [$request->tree->id, $version->id])
                ->with('message', 'Label tree version created.')
                ->with('messageType', 'success');
        }
    }

    /**
     * Removes the specified label tree version.
     *
     * @api {delete} label-tree-versions/:id Delete a label tree version
     * @apiGroup Label Trees
     * @apiName DestroyLabelTreeVersionss
     * @apiPermission labelTreeAdmin
     * @apiDescription A label tree version cannot be deleted if it contains labels that are still used somewhere.
     *
     * @apiParam {Number} id The label tree version ID.
     *
     * @param DestroyLabelTreeVersion $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestroyLabelTreeVersion $request)
    {
        $request->version->delete();

        if (!$this->isAutomatedRequest()) {
            return $this->fuzzyRedirect()
                ->with('message', 'Label tree version deleted.')
                ->with('messageType', 'success');
        }
    }
}