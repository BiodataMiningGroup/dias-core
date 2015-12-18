<?php

namespace Dias;

use Dias\Contracts\BelongsToProjectContract;
use Dias\Model\ModelWithAttributes;
use Illuminate\Database\QueryException;
use Exception;
use Dias\Shape;

/**
 * An annotation is a region of an image that can be labeled by the users.
 * It consists of one or many points and has a specific shape.
 */
class Annotation extends ModelWithAttributes implements BelongsToProjectContract
{
    /**
     * Validation rules for attaching a label to a annotation.
     *
     * @var array
     */
    public static $attachLabelRules = [
        'label_id'    => 'required|exists:labels,id',
        'confidence'  => 'required|numeric|between:0,1',
    ];

    /**
     * Validation rules for creating a point for an annotation.
     *
     * @var array
     */
    public static $createPointRules = [
        'x' => 'required|numeric',
        'y' => 'required|numeric',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        // don't display info from the pivot table
        'pivot',
    ];

    /**
     * Validates a points array for the shape of this annotation
     *
     * @param array $points Points array (a point may be an array or an object with 'x' and 'y')
     * @throws Exception If the points array is invalid
     */
    public function validatePoints(array $points)
    {
        $valid = true;
        foreach ($points as $point) {
            if (is_array($point)) {
                if (!array_key_exists('x', $point) || !array_key_exists('y', $point)) {
                    $valid = false;
                    break;
                }

                if (!is_numeric($point['x']) || !is_numeric($point['y'])) {
                    $valid = false;
                    break;
                }
            } else {
                if (!property_exists($point, 'x') || !property_exists($point, 'y')) {
                    $valid = false;
                    break;
                }

                if (!is_numeric($point->x) || !is_numeric($point->y)) {
                    $valid = false;
                    break;
                }
            }
        }

        if (!$valid) {
            throw new Exception("Malformed point object. It needs a 'x' and a 'y' property with numeric values.");
        }

        switch ($this->shape_id) {
            case Shape::$pointId:
                $valid = sizeof($points) === 1;
                break;
            case Shape::$circleId:
                $valid = sizeof($points) === 2;
                break;
            case Shape::$rectangleId:
                $valid = sizeof($points) === 4;
                break;
            default:
                $valid = sizeof($points) > 0;
        }

        if (!$valid) {
            throw new Exception('Invalid number of points for shape '.$this->shape->name.'!');
        }
    }

    /**
     * The image, this annotation belongs to.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo('Dias\Image');
    }

    /**
     * The shape of this annotation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function shape()
    {
        return $this->belongsTo('Dias\Shape');
    }

    /**
     * The points, this annotation consists of, ordered by index
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function points()
    {
        return $this->hasMany('Dias\AnnotationPoint')->orderBy('index', 'asc');
    }

    /**
     * The points, this annotation consists of, *not* ordered by index
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function unorderedPoints()
    {
        return $this->hasMany('Dias\AnnotationPoint');
    }

    /**
     * The labels, this annotation got assigned by the users.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function labels()
    {
        return $this->hasMany('Dias\AnnotationLabel')->with('label', 'user');
    }

    /**
     * {@inheritdoc}
     * @return array
     */
    public function projectIds()
    {
        return $this->image->projectIds();
    }

    /**
     * Adds a new point to this annotation.
     *
     * @param int $x x position of the point
     * @param int $y y position of the point
     * @return AnnotationPoint
     */
    public function addPoint($x, $y)
    {
        $point = new AnnotationPoint;
        $point->x = intval($x);
        $point->y = intval($y);
        $index = $this->unorderedPoints()->max('index');
        // the new point gets the next higher index
        $point->index = ($index === null) ? 0 : $index + 1;

        return $this->points()->save($point);
    }

    /**
     * Adds an array of points to this annotation.
     * A point may be an associative array `['x'=>10, 'y'=>10]` or an object
     * `{x => 10, y => 10}`.
     *
     * @param array $points array of point arrays or objects
     */
    public function addPoints($points)
    {
        foreach ($points as $point) {
            // depending on decoding, a point may be an object or an array
            if (is_array($point)) {
                $this->addPoint($point['x'], $point['y']);
            } else {
                $this->addPoint($point->x, $point->y);
            }
        }
    }

    /**
     * Replaces the current points with the given ones.
     * Does nothing if the given array is empty.
     *
     * @param array $points array of point arrays or objects
     */
    public function refreshPoints($points)
    {
        if (empty($points)) {
            return;
        }
        $this->points()->delete();
        $this->addPoints($points);
    }

    /**
     * Adds a new label to this annotation.
     *
     * @param int $labelId
     * @param float $confidence
     * @param User $user The user attaching tha label
     * @return AnnotationLabel
     */
    public function addLabel($labelId, $confidence, $user)
    {
        try {
            $annotationLabel = new AnnotationLabel;
            $annotationLabel->annotation()->associate($this);
            $annotationLabel->label()->associate(Label::find($labelId));
            $annotationLabel->user()->associate($user);
            $annotationLabel->confidence = $confidence;
            $annotationLabel->save();

            return $annotationLabel;
        } catch (QueryException $e) {
            abort(400, 'The user already attached label "'.$labelId.'" to annotation "'.$this->id.'"!');
        }
    }
}
