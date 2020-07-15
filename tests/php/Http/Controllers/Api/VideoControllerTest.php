<?php

namespace Biigle\Tests\Http\Controllers\Api;

use ApiTestCase;
use Biigle\Jobs\ProcessNewVideo;
use Biigle\Tests\VideoAnnotationTest;
use Biigle\Tests\VideoTest;
use Illuminate\Http\File;
use Queue;
use Storage;

class VideoControllerTest extends ApiTestCase
{
    public function testUpdate()
    {
        $video = VideoTest::create(['project_id' => $this->project()->id]);
        $id = $video->id;

        $this->doTestApiRoute('PUT', "/api/v1/videos/{$id}");

        $this->beEditor();
        $this->put("/api/v1/videos/{$id}")->assertStatus(403);

        $this->beAdmin();
        $this->putJson("/api/v1/videos/{$id}", [
                'name' => 'New name',
                'url' => 'test://video.mp4',
                'doi' => 'my doi',
                'gis_link' => 'my link',
            ])
            ->assertStatus(422);

        Storage::fake('test');
        $file = new File(__DIR__.'/../../../../files/test.mp4');
        Storage::disk('test')->putFileAs('', $file, 'video.mp4');

        $this->putJson("/api/v1/videos/{$id}", [
                'name' => 'New name',
                'url' => 'test://video.mp4',
                'doi' => 'my doi',
                'gis_link' => 'my link',
            ])
            ->assertStatus(200);

        $video->refresh();
        $this->assertEquals('New name', $video->name);
        $this->assertEquals('test://video.mp4', $video->url);
        $this->assertEquals('my doi', $video->doi);
        $this->assertEquals('my link', $video->gis_link);
    }

    public function testUpdateUrl()
    {
        $this->beAdmin();
        $video = VideoTest::create(['project_id' => $this->project()->id]);
        Queue::fake();
        Storage::fake('test');
        $file = new File(__DIR__.'/../../../../files/test.mp4');
        Storage::disk('test')->putFileAs('', $file, 'video.mp4');

        $this->putJson("/api/v1/videos/{$video->id}", [
                'name' => 'New name',
            ])
            ->assertStatus(200);

        Queue::assertNothingPushed();

        $this->putJson("/api/v1/videos/{$video->id}", [
                'url' => 'test://video.mp4',
            ])
            ->assertStatus(200);

        Queue::assertPushed(ProcessNewVideo::class);
    }

    public function testDestroy()
    {
        $video = VideoTest::create(['project_id' => $this->project()->id]);
        $id = $video->id;

        $this->doTestApiRoute('DELETE', "/api/v1/videos/{$id}");

        $this->beEditor();
        $this->delete("/api/v1/videos/{$id}")->assertStatus(403);

        $this->beAdmin();
        $this->deleteJson("/api/v1/videos/{$id}")->assertStatus(200);
        $this->assertNull($video->fresh());
    }

    public function testDestroyForce()
    {
        $video = VideoTest::create(['project_id' => $this->project()->id]);
        $id = $video->id;
        $annotation = VideoAnnotationTest::create(['video_id' => $id]);

        $this->beAdmin();
        $this->deleteJson("/api/v1/videos/{$id}")->assertStatus(422);
        $this->assertNotNull($video->fresh());
        $this->assertNotNull($annotation->fresh());

        $this->deleteJson("/api/v1/videos/{$id}", ['force' => true])->assertStatus(200);
        $this->assertNull($video->fresh());
        $this->assertNull($annotation->fresh());
    }
}