<?php

use Dias\AnnotationSession;

class AnnotationSessionTest extends ModelTestCase
{
    /**
     * The model class this class will test.
     */
    protected static $modelClass = Dias\AnnotationSession::class;

    public function testAttributes()
    {
        $this->assertNotNull($this->model->name);
        $this->assertNotNull($this->model->description);
        $this->assertNotNull($this->model->starts_at);
        $this->assertNotNull($this->model->ends_at);
        $this->assertNotNull($this->model->created_at);
        $this->assertNotNull($this->model->updated_at);
        $this->assertNotNull($this->model->transect_id);
        $this->assertNotNull($this->model->hide_other_users_annotations);
        $this->assertNotNull($this->model->hide_own_annotations);
    }

    public function testNameRequired()
    {
        $this->model->name = null;
        $this->setExpectedException('Illuminate\Database\QueryException');
        $this->model->save();
    }

    public function testStartsAtRequired()
    {
        $this->model->starts_at = null;
        $this->setExpectedException('Illuminate\Database\QueryException');
        $this->model->save();
    }

    public function testEndsAtRequired()
    {
        $this->model->ends_at = null;
        $this->setExpectedException('Illuminate\Database\QueryException');
        $this->model->save();
    }

    public function testTransectOnDeleteCascade()
    {
        $this->model->transect()->delete();
        $this->assertNull($this->model->fresh());
    }

    public function testGetImageAnnotationsHideOwn()
    {
        $ownUser = UserTest::create();
        $otherUser = UserTest::create();
        $image = ImageTest::create();

        // this should be shown but the annotation label of the own user should be hidden
        $a1 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-05',
            'points' => [20, 30, 40],
        ]);
        $al11 = AnnotationLabelTest::create([
            'annotation_id' => $a1->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-05',
        ]);
        $al12 = AnnotationLabelTest::create([
            'annotation_id' => $a1->id,
            'user_id' => $otherUser->id,
            'created_at' => '2016-09-05',
        ]);

        // this should be shown completely
        $a2 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-06',
            'points' => [30, 40, 50],
        ]);
        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $a2->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-06',
        ]);

        $session = static::create([
            'transect_id' => $image->transect->id,
            'starts_at' => '2016-09-06',
            'ends_at' => '2016-09-07',
            'hide_own_annotations' => true,
            'hide_other_users_annotations' => false,
        ]);

        $annotations = $session->getImageAnnotations($image, $ownUser);
        // expand the models in the collection so we can make assertions
        $annotations = collect($annotations->toArray());

        $this->assertTrue($annotations->contains('points', [20, 30, 40]));
        $this->assertFalse($annotations->contains('labels', [$al11->load('user', 'label')->toArray()]));
        $this->assertTrue($annotations->contains('labels', [$al12->load('user', 'label')->toArray()]));

        $this->assertTrue($annotations->contains('points', [30, 40, 50]));
        $this->assertTrue($annotations->contains('labels', [$al2->load('user', 'label')->toArray()]));
    }

    public function testGetImageAnnotationsHideOther()
    {
        $ownUser = UserTest::create();
        $otherUser = UserTest::create();
        $image = ImageTest::create();

        // this should be shown but the annotation label of other users should be hidden
        $a = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-05',
            'points' => [20, 30, 40],
        ]);
        $al1 = AnnotationLabelTest::create([
            'annotation_id' => $a->id,
            'user_id' => $otherUser->id,
            'created_at' => '2016-09-05',
        ]);
        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $a->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-05',
        ]);

        $session = static::create([
            'transect_id' => $image->transect->id,
            'starts_at' => '2016-09-06',
            'ends_at' => '2016-09-07',
            'hide_own_annotations' => false,
            'hide_other_users_annotations' => true,
        ]);

        $annotations = $session->getImageAnnotations($image, $ownUser);
        // expand the models in the collection so we can make assertions
        $annotations = collect($annotations->toArray());

        $this->assertTrue($annotations->contains('points', [20, 30, 40]));
        $this->assertFalse($annotations->contains('labels', [$al1->load('user', 'label')->toArray()]));
        $this->assertTrue($annotations->contains('labels', [$al2->load('user', 'label')->toArray()]));
    }

    public function testGetImageAnnotationsHideBoth()
    {
        $ownUser = UserTest::create();
        $otherUser = UserTest::create();
        $image = ImageTest::create();

        // this should be shown but the annotation label of other users should be hidden
        $a = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-06',
            'points' => [40, 50, 60],
        ]);
        $al1 = AnnotationLabelTest::create([
            'annotation_id' => $a->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-06',
        ]);
        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $a->id,
            'user_id' => $otherUser->id,
            'created_at' => '2016-09-06',
        ]);

        $session = static::create([
            'transect_id' => $image->transect->id,
            'starts_at' => '2016-09-06',
            'ends_at' => '2016-09-07',
            'hide_own_annotations' => true,
            'hide_other_users_annotations' => true,
        ]);

        $annotations = $session->getImageAnnotations($image, $ownUser);
        // expand the models in the collection so we can make assertions
        $annotations = collect($annotations->toArray());

        $this->assertTrue($annotations->contains('points', [40, 50, 60]));
        $this->assertTrue($annotations->contains('labels', [$al1->load('user', 'label')->toArray()]));
        $this->assertFalse($annotations->contains('labels', [$al2->load('user', 'label')->toArray()]));
    }

    public function testAllowsAccess()
    {
        $ownUser = UserTest::create();
        $otherUser = UserTest::create();
        $image = ImageTest::create();

        $a1 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-05',
        ]);
        $al1 = AnnotationLabelTest::create([
            'annotation_id' => $a1->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-05',
        ]);

        $a2 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-05',
        ]);
        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $a2->id,
            'user_id' => $otherUser->id,
            'created_at' => '2016-09-05',
        ]);

        $a3 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-06',
        ]);
        $al3 = AnnotationLabelTest::create([
            'annotation_id' => $a3->id,
            'user_id' => $ownUser->id,
            'created_at' => '2016-09-06',
        ]);

        $a4 = AnnotationTest::create([
            'image_id' => $image->id,
            'created_at' => '2016-09-06',
        ]);
        $al4 = AnnotationLabelTest::create([
            'annotation_id' => $a4->id,
            'user_id' => $otherUser->id,
            'created_at' => '2016-09-06',
        ]);

        $session = static::make([
            'transect_id' => $image->transect_id,
            'starts_at' => '2016-09-06',
            'ends_at' => '2016-09-07',
            'hide_own_annotations' => false,
            'hide_other_users_annotations' => false,
        ]);

        $this->assertTrue($session->allowsAccess($a1, $ownUser));
        $this->assertTrue($session->allowsAccess($a2, $ownUser));
        $this->assertTrue($session->allowsAccess($a3, $ownUser));
        $this->assertTrue($session->allowsAccess($a4, $ownUser));

        $session->hide_own_annotations = true;

        $this->assertFalse($session->allowsAccess($a1, $ownUser));
        $this->assertTrue($session->allowsAccess($a2, $ownUser));
        $this->assertTrue($session->allowsAccess($a3, $ownUser));
        $this->assertTrue($session->allowsAccess($a4, $ownUser));

        $session->hide_own_annotations = false;
        $session->hide_other_users_annotations = true;

        $this->assertTrue($session->allowsAccess($a1, $ownUser));
        $this->assertFalse($session->allowsAccess($a2, $ownUser));
        $this->assertTrue($session->allowsAccess($a3, $ownUser));
        $this->assertFalse($session->allowsAccess($a4, $ownUser));

        $session->hide_own_annotations = true;

        $this->assertFalse($session->allowsAccess($a1, $ownUser));
        $this->assertFalse($session->allowsAccess($a2, $ownUser));
        $this->assertTrue($session->allowsAccess($a3, $ownUser));
        $this->assertFalse($session->allowsAccess($a4, $ownUser));
    }
}