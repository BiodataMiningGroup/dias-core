<?php

use Carbon\Carbon;

class ApiTransectAnnotationSessionControllerTest extends ApiTestCase
{
    public function testIndex()
    {
        $id = $this->transect()->id;
        $session = AnnotationSessionTest::create([
            'transect_id' => $this->transect()->id,
        ]);

        $this->doTestApiRoute('GET', "/api/v1/transects/{$id}/annotation-sessions");

        $this->beUser();
        $this->get("/api/v1/transects/{$id}/annotation-sessions");
        $this->assertResponseStatus(403);

        $this->beGuest();
        $this->get("/api/v1/transects/{$id}/annotation-sessions")
            ->seeJsonEquals([$session->toArray()]);
        $this->assertResponseOk();
    }

    public function testStore()
    {
        $id = $this->transect()->id;
        AnnotationSessionTest::create([
            'transect_id' => $id,
            'starts_at' => '2016-09-03',
            'ends_at' => '2016-09-04',
        ]);

        $this->doTestApiRoute('POST', "/api/v1/transects/{$id}/annotation-sessions");

        $this->beEditor();
        $this->post("/api/v1/transects/{$id}/annotation-sessions");
        $this->assertResponseStatus(403);

        $this->beAdmin();
        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'starts_at' => '2016-09-05',
            'ends_at' => '2016-09-06',
        ]);
        // name is required
        $this->assertResponseStatus(422);

        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'name' => 'my session',
            'ends_at' => '2016-09-06',
        ]);
        // starts_at is required
        $this->assertResponseStatus(422);

        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'name' => 'my session',
            'starts_at' => '2016-09-05',
        ]);
        // ends_at is required
        $this->assertResponseStatus(422);

        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'name' => 'my session',
            'starts_at' => '2016-09-05',
            'ends_at' => '2016-09-04',
        ]);
        // end must be after start
        $this->assertResponseStatus(422);

        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'name' => 'my session',
            'starts_at' => '2016-09-03',
            'ends_at' => '2016-09-05',
        ]);
        // conflict with existing session
        $this->assertResponseStatus(422);

        $this->json('POST', "/api/v1/transects/{$id}/annotation-sessions", [
            'name' => 'my session',
            'starts_at' => '2016-09-05',
            'ends_at' => '2016-09-06',
            'hide_other_users_annotations' => true,
        ]);
        $this->assertResponseOk();
        $this->assertEquals(2, $this->transect()->annotationSessions()->count());

        $session = $this->transect()->annotationSessions()->orderBy('id', 'desc')->first();
        $this->seeJsonEquals($session->toArray());
    }
}