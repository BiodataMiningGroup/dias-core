<?php

use Dias\Role;

class PoliciesAnnotationLabelPolicyTest extends TestCase
{
    private $annotation;
    private $project;
    private $user;
    private $guest;
    private $editor;
    private $admin;
    private $globalAdmin;

    public function setUp()
    {
        parent::setUp();
        $this->annotation = AnnotationTest::create();
        $this->project = ProjectTest::create();
        $this->project->transects()->attach($this->annotation->image->transect);
        $this->user = UserTest::create();
        $this->guest = UserTest::create();
        $this->editor = UserTest::create();
        $this->admin = UserTest::create();
        $this->globalAdmin = UserTest::create(['role_id' => Role::$admin->id]);

        $this->project->addUserId($this->guest->id, Role::$guest->id);
        $this->project->addUserId($this->editor->id, Role::$editor->id);
        $this->project->addUserId($this->admin->id, Role::$admin->id);
    }

    public function testUpdate()
    {
        $label = LabelTest::create();
        $al1 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->user->id,
        ]);

        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->guest->id,
        ]);

        $al3 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->editor->id,
        ]);

        $this->assertFalse($this->user->can('update', $al1));
        $this->assertFalse($this->user->can('update', $al2));
        $this->assertFalse($this->user->can('update', $al3));

        $this->assertFalse($this->guest->can('update', $al1));
        $this->assertFalse($this->guest->can('update', $al2));
        $this->assertFalse($this->guest->can('update', $al3));

        $this->assertFalse($this->editor->can('update', $al1));
        $this->assertFalse($this->editor->can('update', $al2));
        $this->assertTrue($this->editor->can('update', $al3));

        $this->assertTrue($this->admin->can('update', $al1));
        $this->assertTrue($this->admin->can('update', $al2));
        $this->assertTrue($this->admin->can('update', $al3));

        $this->assertTrue($this->globalAdmin->can('update', $al1));
        $this->assertTrue($this->globalAdmin->can('update', $al2));
        $this->assertTrue($this->globalAdmin->can('update', $al3));
    }

    public function testDestroy()
    {
        $label = LabelTest::create();
        $al1 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->user->id,
        ]);

        $al2 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->guest->id,
        ]);

        $al3 = AnnotationLabelTest::create([
            'annotation_id' => $this->annotation->id,
            'label_id' => $label->id,
            'user_id' => $this->editor->id,
        ]);

        $this->assertFalse($this->user->can('destroy', $al1));
        $this->assertFalse($this->user->can('destroy', $al2));
        $this->assertFalse($this->user->can('destroy', $al3));

        $this->assertFalse($this->guest->can('destroy', $al1));
        $this->assertFalse($this->guest->can('destroy', $al2));
        $this->assertFalse($this->guest->can('destroy', $al3));

        $this->assertFalse($this->editor->can('destroy', $al1));
        $this->assertFalse($this->editor->can('destroy', $al2));
        $this->assertTrue($this->editor->can('destroy', $al3));

        $this->assertTrue($this->admin->can('destroy', $al1));
        $this->assertTrue($this->admin->can('destroy', $al2));
        $this->assertTrue($this->admin->can('destroy', $al3));

        $this->assertTrue($this->globalAdmin->can('destroy', $al1));
        $this->assertTrue($this->globalAdmin->can('destroy', $al2));
        $this->assertTrue($this->globalAdmin->can('destroy', $al3));
    }
}