<?php

namespace Biigle\Tests\Http\Controllers\Views\Projects;

use Biigle\Role;
use Biigle\Tests\ProjectTest;
use Biigle\Tests\UserTest;
use Cache;
use TestCase;

class ProjectLabelTreeControllerTest extends TestCase
{
    public function testShow()
    {
        $project = ProjectTest::create();
        $id = $project->id;
        $user = UserTest::create();

        $this->get("projects/{$id}/label-trees")->assertStatus(302);

        $this->be($user);
        $this->get("projects/{$id}/label-trees")->assertStatus(403);

        $project->addUserId($user->id, Role::editorId());
        Cache::flush();
        $this->get("projects/{$id}/label-trees")->assertStatus(200);

        config(['biigle.project_overview_v2_preview' => false]);

        $this->get("projects/{$id}/label-trees")->assertStatus(404);

        // diesn't exist
        $this->get('projects/-1/label-trees')->assertStatus(404);
    }

    public function testShowV1()
    {
        $project = ProjectTest::create();
        $id = $project->id;
        $project->creator->setSettings(['project_overview_v1' => true]);
        $this->be($project->creator);
        $this->get("projects/{$id}/label-trees")->assertRedirect("projects/{$id}");
    }
}