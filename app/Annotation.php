<?php

namespace Dias;

use Illuminate\Database\Eloquent\Model;
use Exception;
use Dias\Shape;

/**
 * An annotation is a region of an image that can be labeled by the users.
 * It consists of one or many points and has a specific shape.
 */
class Annotation extends Model
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
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        // don't display info from the pivot table
        'pivot',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'points' => 'array',
    ];

    /**
     * Validates a points array for the shape of this annotation
     *
     * @param array $points Points array like `[x1, y1, x2, y2, x3, y3, ...]`
     * @throws Exception If the points array is invalid
     */
    public function validatePoints(array $points)
    {
        // check if all elements are integer
        $valid = array_reduce($points, function ($carry, $point) {
            return $carry && (is_float($point) || is_int($point));
        }, true);

        if (!$valid) {
            throw new Exception("Point coordinates must be of type float or integer.");
        }

        $size = sizeof($points);

        switch ($this->shape_id) {
            case Shape::$pointId:
                $valid = $size === 2;
                break;
            case Shape::$circleId:
                $valid = $size === 3;
                break;
            case Shape::$rectangleId:
                $valid = $size === 8;
                break;
            default:
                $valid = $size > 0 && $size % 2 === 0;
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
     * The labels, this annotation got assigned by the users.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function labels()
    {
        return $this->hasMany('Dias\AnnotationLabel')->with('label', 'user');
    }
}
