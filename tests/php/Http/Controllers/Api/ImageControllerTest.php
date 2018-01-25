<?php

namespace Biigle\Tests\Http\Controllers\Api;

use File;
use ApiTestCase;
use Biigle\Role;
use Biigle\Image;
use Biigle\Volume;
use Biigle\Visibility;
use Biigle\Tests\ImageTest;
use Illuminate\Support\Facades\Event;
use Biigle\Jobs\ProcessThumbnailChunkJob;

class ImageControllerTest extends ApiTestCase
{
    private $image;

    public function setUp()
    {
        parent::setUp();
        $this->image = ImageTest::create();
        $this->project()->volumes()->attach($this->image->volume);
        $this->image->volume->visibility_id = Visibility::$private->id;
        $this->image->volume->save();
        $this->image->volume->addMember($this->guest(), Role::$admin);
    }

    public function testShow()
    {
        $id = $this->image->id;
        $this->doTestApiRoute('GET', "/api/v1/images/{$id}");

        $this->beUser();
        $response = $this->get("/api/v1/images/{$id}");
        $response->assertStatus(403);

        $this->beGuest();
        $response = $this->get('/api/v1/images/-1');
        $response->assertStatus(404);

        $response = $this->get("/api/v1/images/{$id}");
        $response->assertStatus(200);
        $content = $response->getContent();
        $this->assertStringStartsWith('{', $content);
        $this->assertStringEndsWith('}', $content);
        $this->assertContains('"volume"', $content);
        $this->assertContains('"exif"', $content);
        $this->assertContains('"width"', $content);
        $this->assertContains('"height"', $content);
    }

    public function testShowThumb()
    {
        $id = $this->image->id;
        File::makeDirectory(File::dirname($this->image->thumbPath), 0755, true, true);
        copy($this->image->url, $this->image->thumbPath);

        $this->doTestApiRoute('GET', "/api/v1/images/{$id}/thumb");

        $this->beUser();
        $response = $this->get("/api/v1/images/{$id}/thumb");
        $response->assertStatus(403);

        $this->beGuest();
        $response = $this->get('/api/v1/images/-1/thumb');
        $response->assertStatus(404);

        $response = $this->get("/api/v1/images/{$id}/thumb");
        $response->assertStatus(200);
        $this->assertEquals('image/jpeg', $response->headers->get('content-type'));
        unlink($this->image->thumbPath);
        @rmdir(dirname($this->image->thumbPath, 1));
        @rmdir(dirname($this->image->thumbPath, 2));
    }

    public function testShowFile()
    {
        $id = $this->image->id;
        $this->doTestApiRoute('GET', "/api/v1/images/{$id}/file");

        $this->beUser();
        $response = $this->get("/api/v1/images/{$id}/file");
        $response->assertStatus(403);

        $this->beGuest();
        $response = $this->get('/api/v1/images/-1/file');
        $response->assertStatus(404);

        $response = $this->get("/api/v1/images/{$id}/file");
        $response->assertStatus(200);
        $this->assertEquals('image/jpeg', $response->headers->get('content-type'));
    }

    public function testShowFileTiled()
    {
        $id = $this->image->id;
        $this->image->tiled = true;
        $this->image->setTileProperties(['width' => 123, 'height' => 456]);
        $this->image->save();

        $this->beGuest();
        $this->get("/api/v1/images/{$id}/file")
            ->assertStatus(200)
            ->assertExactJson([
                'id' => $this->image->id,
                'uuid' => $this->image->uuid,
                'width' => 123,
                'height' => 456,
                'tiled' => true,
            ]);
    }

    public function testDestroy()
    {
        $id = $this->image->id;

        $this->doTestApiRoute('DELETE', "/api/v1/images/{$id}");

        $this->beUser();
        $response = $this->delete("/api/v1/images/{$id}");
        $response->assertStatus(403);

        $this->beAdmin();
        $response = $this->delete("/api/v1/images/{$id}");
        $response->assertStatus(403);

        $this->beGuest();
        $response = $this->delete('/api/v1/images/999');
        $response->assertStatus(404);

        $this->assertNotNull($this->image->fresh()->volume_id);
        $response = $this->delete("/api/v1/images/{$id}");
        $response->assertStatus(200);
        // only the volume ID is set to null so the image is marked for deletion
        $this->assertNull($this->image->fresh());
    }
}
