define({ "api": [
  {
    "type": "delete",
    "url": "annotation-labels/:id",
    "title": "Delete a label",
    "group": "Annotations",
    "name": "DeleteAnnotationLabels",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation <strong>label</strong> ID (not the annotation ID).</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationLabelController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "delete",
    "url": "annotations/:id",
    "title": "Delete an annotation",
    "group": "Annotations",
    "name": "DestroyAnnotation",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "delete",
    "url": "annotations/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "Annotations",
    "name": "DestroyAnnotationAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationAttributeController.php",
    "groupTitle": "Annotations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "annotations/:id/attributes",
    "title": "Get all attributes",
    "group": "Annotations",
    "name": "IndexAnnotationAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationAttributeController.php",
    "groupTitle": "Annotations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "annotations/:id/labels",
    "title": "Get all labels",
    "group": "Annotations",
    "name": "IndexAnnotationLabels",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"confidence\": 0.5,\n      \"label\": {\n         \"id\": 2,\n         \"name\": \"Coral\",\n         \"parent_id\": 1,\n         \"aphia_id\": null,\n         \"color\": \"0099ff\"\n      },\n      \"user\": {\n         \"id\": 1,\n         \"role_id\": 2,\n         \"name\": \"Joe User\"\n      }\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationLabelController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "get",
    "url": "annotations/:id",
    "title": "Get an annotation",
    "group": "Annotations",
    "name": "ShowAnnotation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\":1,\n   \"image_id\":1,\n   \"shape_id\":1,\n   \"created_at\":\"2015-02-13 11:59:23\",\n   \"updated_at\":\"2015-02-13 11:59:23\",\n   \"points\": [\n       {\"x\": 100, \"y\": 200}\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "get",
    "url": "annotations/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "Annotations",
    "name": "ShowAnnotationAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationAttributeController.php",
    "groupTitle": "Annotations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "annotations/:id/attributes",
    "title": "Attach an attribute",
    "group": "Annotations",
    "name": "StoreAnnotationAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationAttributeController.php",
    "groupTitle": "Annotations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "annotations/:id/labels",
    "title": "Attach a new label",
    "group": "Annotations",
    "name": "StoreAnnotationLabels",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "label_id",
            "description": "<p>The ID of the label category to attach to the annotation.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "confidence",
            "description": "<p>The level of confidence for this annotation label.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "label_id: 1\nconfidence: 0.75",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"confidence\": 0.5,\n   \"label\": {\n      \"id\": 2,\n      \"name\": \"Coral\",\n      \"parent_id\": 1,\n      \"aphia_id\": null,\n      \"color\": \"0099ff\"\n   },\n   \"user\": {\n      \"id\": 1,\n      \"role_id\": 2,\n      \"name\": \"Joe User\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationLabelController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "post",
    "url": "images/:id/annotations",
    "title": "Create a new annotation",
    "group": "Annotations",
    "name": "StoreImageAnnotations",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The image ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "shape_id",
            "description": "<p>ID of the shape of the new annotation.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "label_id",
            "description": "<p>ID of the initial category label of the new annotation.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "confidence",
            "description": "<p>Confidence of the initial annotation label of the new annotation. Must be a value between 0 and 1.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "points",
            "description": "<p>Array (JSON or as String) of the initial points of the annotation. Must contain at least one point. The interpretation of the points of the different shapes is as follows: <strong>Point:</strong> The first point is the center of the annotation point. <strong>Rectangle:</strong> The first four points are the vertices of the rectangle (in the given order). <strong>Polygon:</strong> Like rectangle with one or more vertices. <strong>LineString:</strong> Like rectangle with one or more vertices. <strong>Circle:</strong> The first point is the center of the circle. The x-coordinate of the second point is the radius of the circle. The y-coordinate of the second point is ignored.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example (JSON):",
          "content": "{\n   \"shape_id\": 3,\n   \"label_id\": 1,\n   \"confidence\": 0.75,\n   \"points\": [\n      {\"x\": 10, \"y\": 11},\n      {\"x\": 20, \"y\": 21}\n   ]\n}",
          "type": "JSON"
        },
        {
          "title": "Request example (String):",
          "content": "shape_id: 1\nlabel_id: 1\nconfidence: 0.75\npoints: '[{\"x\":10,\"y\":11},{\"x\":20,\"y\":21}]'",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"created_at\": \"2015-02-18 11:45:00\",\n   \"id\": 1,\n   \"image_id\": 1,\n   \"shape_id\": 1,\n   \"updated_at\": \"2015-02-18 11:45:00\",\n   \"points\": [\n      {\"x\": 100, \"y\": 200}\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAnnotationController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "put",
    "url": "annotations/:id",
    "title": "Update an annotation",
    "group": "Annotations",
    "name": "UpdateAnnotation",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "points",
            "description": "<p>Array (JSON or as String) of new points of the annotation. The new points will replace the old points. See the &quot;Create a new annotation&quot; endpoint for how the points are interpreted for different shapes.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example (JSON):",
          "content": "{\n   \"points\": [\n      {\"x\": 10, \"y\": 11},\n      {\"x\": 20, \"y\": 21}\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Request example (String):",
          "content": "points: '[{\"x\":10,\"y\":11},{\"x\":20,\"y\":21}]'",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "put",
    "url": "annotations/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "Annotations",
    "name": "UpdateAnnotationAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationAttributeController.php",
    "groupTitle": "Annotations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "annotation-labels/:id",
    "title": "Update a label",
    "group": "Annotations",
    "name": "UpdateAnnotationLabels",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation <strong>label</strong> ID (not the annotation ID).</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "confidence",
            "description": "<p>The level of confidence for this annotation label.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "confidence: 0.75",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AnnotationLabelController.php",
    "groupTitle": "Annotations"
  },
  {
    "type": "delete",
    "url": "attributes/:id",
    "title": "Delete an attribute",
    "group": "Attributes",
    "name": "DestroyAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "description": "<p>If an attribute is still in use, it cannot be deleted.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The attribute ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AttributeController.php",
    "groupTitle": "Attributes"
  },
  {
    "type": "get",
    "url": "attributes",
    "title": "Get all attributes",
    "group": "Attributes",
    "name": "IndexAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"bad_quality\",\n      \"type\": \"boolean\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AttributeController.php",
    "groupTitle": "Attributes"
  },
  {
    "type": "get",
    "url": "attributes/:id",
    "title": "Get an attribute",
    "group": "Attributes",
    "name": "ShowAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The attribute ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"bad_quality\",\n   \"type\": \"boolean\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AttributeController.php",
    "groupTitle": "Attributes"
  },
  {
    "type": "post",
    "url": "attributes",
    "title": "Create a new attribute",
    "group": "Attributes",
    "name": "StoreAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the new attribute.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>One of <code>integer</code>, <code>double</code>, <code>string</code> or <code>boolean</code>.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 2,\n   \"name\": \"expert\",\n   \"type\": \"boolean\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/AttributeController.php",
    "groupTitle": "Attributes"
  },
  {
    "type": "delete",
    "url": "images/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "Images",
    "name": "DestroyImageAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAttributeController.php",
    "groupTitle": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "images/:id/annotations",
    "title": "Get all annotations",
    "group": "Images",
    "name": "IndexImageAnnotations",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The image ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"created_at\": \"2015-02-18 11:45:00\",\n      \"id\": 1,\n      \"image_id\": 1,\n      \"shape_id\": 1,\n      \"updated_at\": \"2015-02-18 11:45:00\",\n      \"points\": [\n         {\"x\": 100, \"y\": 200}\n      ],\n      \"labels\": [\n         {\n            \"confidence\": 1,\n            \"id\": 1,\n            \"label\": {\n               \"aphia_id\": null,\n               \"color\": \"bada55\",\n               \"id\": 3,\n               \"name\": \"My label\",\n               \"parent_id\": null,\n               \"project_id\": null\n            },\n            \"user\": {\n               \"id\": 4,\n               \"name\": \"Graham Hahn\",\n               \"role_id\": 2\n            }\n         }\n      ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAnnotationController.php",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "images/:id/attributes",
    "title": "Get all attributes",
    "group": "Images",
    "name": "IndexImageAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAttributeController.php",
    "groupTitle": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "images/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "Images",
    "name": "ShowImageAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAttributeController.php",
    "groupTitle": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "images/:id/file",
    "title": "Get an original image",
    "group": "Images",
    "name": "ShowImageFiles",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "description": "<p>Responds with a JPG image of the original file.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The image ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageController.php",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "images/:id/thumb",
    "title": "Get a thumbnail image",
    "group": "Images",
    "name": "ShowImageThumbs",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "description": "<p>Responds with a JPG image thumbnail.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The image ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageController.php",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "images/:id",
    "title": "Get image information",
    "description": "<p>Image information includes a subset of the image EXIF data as well as the transect, the image belongs to.</p> ",
    "group": "Images",
    "name": "ShowImages",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The image ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\":1,\n   \"width\":1000,\n   \"height\":750,\n   \"exif\":{\n      \"FileName\":\"IMG_3275.JPG\"\n      \"FileDateTime\":1411554694,\n      \"FileSize\":3014886,\n      \"FileType\":2,\n      \"MimeType\":\"image\\/jpeg\",\n      \"Make\":\"Canon\",\n      \"Model\":\"Canon PowerShot G9\",\n      \"Orientation\":1,\n      \"DateTime\":\"2014:05:09 00:53:45\",\n      \"ExposureTime\":\"1\\/100\",\n      \"FNumber\":\"28\\/10\",\n      \"ShutterSpeedValue\":\"213\\/32\",\n      \"ApertureValue\":\"95\\/32\",\n      \"ExposureBiasValue\":\"0\\/3\",\n      \"MaxApertureValue\":\"95\\/32\",\n      \"MeteringMode\":5,\n      \"Flash\":9,\n      \"FocalLength\":\"7400\\/1000\",\n      \"ExifImageWidth\":3264,\n      \"ExifImageLength\":2448,\n      \"ImageType\":\"IMG:PowerShot G9 JPEG\"\n   },\n   \"transect\":{\n      \"id\":1,\n      \"name\":\"Test transect\",\n      \"media_type_id\":2,\n      \"creator_id\":1,\n      \"created_at\":\"2015-05-04 07:34:04\",\n      \"updated_at\":\"2015-05-04 07:34:04\",\n      \"url\":\"\\/path\\/to\\/transect\\/1\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageController.php",
    "groupTitle": "Images"
  },
  {
    "type": "post",
    "url": "images/:id/attributes",
    "title": "Attach an attribute",
    "group": "Images",
    "name": "StoreImageAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAttributeController.php",
    "groupTitle": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "images/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "Images",
    "name": "UpdateImageAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ImageAttributeController.php",
    "groupTitle": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "labels/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "Labels",
    "name": "DestroyLabelAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelAttributeController.php",
    "groupTitle": "Labels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "labels/:id",
    "title": "Delete a label category",
    "group": "Labels",
    "name": "DestroyLabels",
    "permission": [
      {
        "name": "adminOrProjectAdmin",
        "title": "Global admin or project admin",
        "description": "<p>The authenticated user needs to be global admin or admin of the project.</p> "
      }
    ],
    "description": "<p>If a label category is still attached to an annotation, it cannot be removed. Also, if a label category has child labels, the <code>force</code> argument is required. Project specific label categories can only be deleted by project admins. Global categories can only be deleted by global admins.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The label ID.</p> "
          }
        ],
        "Optional parameters": [
          {
            "group": "Optional parameters",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "force",
            "description": "<p>Set this parameter to delete label categories with child labels.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelController.php",
    "groupTitle": "Labels"
  },
  {
    "type": "get",
    "url": "labels/:id/attributes",
    "title": "Get all attributes",
    "group": "Labels",
    "name": "IndexLabelAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelAttributeController.php",
    "groupTitle": "Labels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "labels",
    "title": "Get all label categories",
    "description": "<p>This does not include project specific label categories.</p> ",
    "group": "Labels",
    "name": "IndexLabels",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"aphia_id\": null,\n      \"id\": 1,\n      \"name\": \"Benthic Object\",\n      \"parent_id\": null,\n      \"color\": \"0099ff\"\n   },\n   {\n      \"aphia_id\": null,\n      \"id\": 2,\n      \"name\": \"Coral\",\n      \"parent_id\": 1,\n      \"color\": \"9900ff\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelController.php",
    "groupTitle": "Labels"
  },
  {
    "type": "get",
    "url": "labels/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "Labels",
    "name": "ShowLabelAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelAttributeController.php",
    "groupTitle": "Labels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "labels/:id",
    "title": "Get a label category",
    "description": "<p>This does not include project specific label categories.</p> ",
    "group": "Labels",
    "name": "ShowLabels",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The label ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"aphia_id\": null,\n   \"id\": 1,\n   \"name\": \"Benthic Object\",\n   \"parent_id\": null,\n   \"color\": \"0099ff\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelController.php",
    "groupTitle": "Labels"
  },
  {
    "type": "post",
    "url": "labels/:id/attributes",
    "title": "Attach an attribute",
    "group": "Labels",
    "name": "StoreLabelAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelAttributeController.php",
    "groupTitle": "Labels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "labels",
    "title": "Create a new (project specific) label category",
    "description": "<p>Project specific label categories can only be created by project admins. Global categories can only be created by global admins.</p> ",
    "group": "Labels",
    "name": "StoreLabels",
    "permission": [
      {
        "name": "adminOrProjectAdmin",
        "title": "Global admin or project admin",
        "description": "<p>The authenticated user needs to be global admin or admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new label category.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the new label category as exadecimal string (like <code>bada55</code>). May have an optional <code>#</code> prefix.</p> "
          }
        ],
        "Optional arguments": [
          {
            "group": "Optional arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>ID of the parent label category for ordering in a tree-like stricture.</p> "
          },
          {
            "group": "Optional arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "aphia_id",
            "description": "<p>The <a href=\"http://www.marinespecies.org/\">WoRMS</a> AphiaID.</p> "
          },
          {
            "group": "Optional arguments",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project, this category should belong to. If this attribute is present, the category becomes a project specific category.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"Sea Cucumber\",\n   \"parent_id\": 1,\n   \"aphia_id\": 1234,\n   \"project_id\": null,\n   \"color\": \"0099ff\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelController.php",
    "groupTitle": "Labels"
  },
  {
    "type": "put",
    "url": "labels/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "Labels",
    "name": "UpdateLabelAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelAttributeController.php",
    "groupTitle": "Labels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "labels/:id",
    "title": "Update a label category",
    "description": "<p>Project specific label categories can only be updated by project admins. Global categories can only be updated by global admins.</p> ",
    "group": "Labels",
    "name": "UpdateLabels",
    "permission": [
      {
        "name": "adminOrProjectAdmin",
        "title": "Global admin or project admin",
        "description": "<p>The authenticated user needs to be global admin or admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The label ID.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the label category.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the label category.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>ID of the parent label category for ordering in a tree-like stricture.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "aphia_id",
            "description": "<p>The <a href=\"http://www.marinespecies.org/\">WoRMS</a> AphiaID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/LabelController.php",
    "groupTitle": "Labels"
  },
  {
    "type": "get",
    "url": "media-types",
    "title": "Get all media types",
    "group": "Media_Types",
    "name": "IndexMediaTypes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"time-series\"\n   },\n   {\n      \"id\": 2,\n      \"name\": \"location-series\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/MediaTypeController.php",
    "groupTitle": "Media_Types"
  },
  {
    "type": "get",
    "url": "media-types/:id",
    "title": "Get a media type",
    "group": "Media_Types",
    "name": "ShowMediaTypes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The media type ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"time-series\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/MediaTypeController.php",
    "groupTitle": "Media_Types"
  },
  {
    "type": "post",
    "url": "projects/:pid/transects/:tid",
    "title": "Attach a transect",
    "group": "Projects",
    "name": "AttachProjectTransects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "description": "<p>This endpoint attaches an existing transect to another existing project. The transect then will belong to multiple projects. The user performing this operation needs to be project admin in both the project, the transect initially belongs to, and the project, the transect should be attached to.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pid",
            "description": "<p>ID of the project that should get the annotation.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "tid",
            "description": "<p>ID of the existing transect to attach to the project.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectTransectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "projects/:pid/transects/:uid",
    "title": "Add a new member",
    "group": "Projects",
    "name": "AttachProjectUsers",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pid",
            "description": "<p>The project ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "uid",
            "description": "<p>The user ID of the new member.</p> "
          }
        ],
        "Required attributes": [
          {
            "group": "Required attributes",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "project_role_id",
            "description": "<p>The project role of the member.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "project_role_id: 3",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectUserController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "delete",
    "url": "projects/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "Projects",
    "name": "DestroyProjectAttributes",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectAttributeController.php",
    "groupTitle": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "projects/:pid/transects/:tid",
    "title": "Detach/delete a transect",
    "group": "Projects",
    "name": "DestroyProjectTransects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "description": "<p>Detaches a transect from a project. The transect will no longer belong to the project it was detached from. If the transect belongs only to a single project, it cannot be detached but should be deleted. Use the <code>force</code> parameter to delete a transect belonging only to one project.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pid",
            "description": "<p>The project ID, the transect should be detached from.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "tid",
            "description": "<p>The transect ID.</p> "
          }
        ],
        "Optional parameters": [
          {
            "group": "Optional parameters",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "force",
            "description": "<p>If the transect only belongs to a single project, set this parameter to delete it instead of detaching it. Otherwise the transect cannot be removed.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectTransectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "delete",
    "url": "projects/:pid/transects/:uid",
    "title": "Remove a member",
    "group": "Projects",
    "name": "DestroyProjectUsers",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "description": "<p>A project member can remove themselves. Only a project admin can remove members other than themselves.</p> <p><strong>The only remaining admin of a project is not allowed to remove themselves.</strong> The admin role should be passed over to another project user or the project should be deleted.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pid",
            "description": "<p>The project ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "uid",
            "description": "<p>The user ID of the member.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectUserController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "delete",
    "url": "projects/:id",
    "title": "Delete a project",
    "group": "Projects",
    "name": "DestroyProjects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "description": "<p>A project cannot be deleted if it contains any transects that belong <strong>only</strong> to this project. To delete the project <strong>and</strong> these transects, use the <code>force</code> parameter.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ],
        "Optional parameters": [
          {
            "group": "Optional parameters",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "force",
            "description": "<p>Set this parameter to delete the project <strong>and</strong> all transects that belong only to this project.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "projects/my",
    "title": "Get all own projects",
    "group": "Projects",
    "name": "IndexOwnProjects",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>Returns a list of all projects, the requesting user is a member of.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"Test Project\",\n      \"description\": \"This is a test project.\",\n      \"creator_id\": 1,\n      \"created_at\": \"2015-02-10 09:45:30\",\n      \"updated_at\": \"2015-02-10 09:45:30\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "projects/:id/attributes",
    "title": "Get all attributes",
    "group": "Projects",
    "name": "IndexProjectAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectAttributeController.php",
    "groupTitle": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "projects/:id/labels",
    "title": "Get all label categories",
    "group": "Projects",
    "name": "IndexProjectLabels",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"aphia_id\": null,\n      \"id\": 1,\n      \"name\": \"Benthic Object\",\n      \"parent_id\": null,\n      \"project_id\": 1,\n      \"color\": \"0099ff\"\n   },\n   {\n      \"aphia_id\": null,\n      \"id\": 2,\n      \"name\": \"Coral\",\n      \"parent_id\": 1,\n      \"project_id\": 1,\n      \"color\": \"9900ff\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectLabelController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "projects/:id/transects",
    "title": "Get all transects",
    "group": "Projects",
    "name": "IndexProjectTransects",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"transect 1\",\n      \"media_type_id\": 3,\n      \"creator_id\": 7,\n      \"created_at\": \"2015-02-19 14:45:58\",\n      \"updated_at\":\"2015-02-19 14:45:58\",\n      \"url\": \"/vol/transects/1\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectTransectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "projects/:id/users",
    "title": "Get all members",
    "group": "Projects",
    "name": "IndexProjectUsers",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"Joe User\",\n      \"project_role_id\": 1\n   },\n   {\n      \"id\": 2,\n      \"name\": \"Jane User\",\n      \"project_role_id\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectUserController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "projects/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "Projects",
    "name": "ShowProjectAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectAttributeController.php",
    "groupTitle": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "projects/:id",
    "title": "Get a project",
    "group": "Projects",
    "name": "ShowProjects",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"Test Project\",\n   \"description\": \"This is a test project.\",\n   \"creator_id\": 1,\n   \"created_at\": \"2015-02-10 09:45:30\",\n   \"updated_at\": \"2015-02-10 09:45:30\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "projects/:id/attributes",
    "title": "Attach an attribute",
    "group": "Projects",
    "name": "StoreProjectAttributes",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectAttributeController.php",
    "groupTitle": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "projects",
    "title": "Create a new project",
    "group": "Projects",
    "name": "StoreProjects",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>The user creating a new project will automatically become project admin.</p> ",
    "parameter": {
      "fields": {
        "Required attributes": [
          {
            "group": "Required attributes",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new project.</p> "
          },
          {
            "group": "Required attributes",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the new project.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "projects/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "Projects",
    "name": "UpdateProjectAttributes",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectAttributeController.php",
    "groupTitle": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "projects/:pid/users/:uid",
    "title": "Update a member",
    "group": "Projects",
    "name": "UpdateProjectUsers",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pid",
            "description": "<p>The project ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "uid",
            "description": "<p>The user ID of the project member.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "project_role_id",
            "description": "<p>The project role of the member.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectUserController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "projects/:id",
    "title": "Update a project",
    "group": "Projects",
    "name": "UpdateProjects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the project.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the project.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "roles",
    "title": "Get all user roles",
    "group": "Roles",
    "name": "IndexRoles",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"admin\"\n   },\n   {\n      \"id\": 2,\n      \"name\": \"editor\"\n   },\n   {\n      \"id\": 3,\n      \"name\": \"guest\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "roles/:id",
    "title": "Get a user role",
    "group": "Roles",
    "name": "ShowRoles",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The user role ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "shapes",
    "title": "Get all shapes",
    "group": "Shapes",
    "name": "IndexShapes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"Point\"\n   },\n   {\n      \"id\": 2,\n      \"name\": \"LineString\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ShapeController.php",
    "groupTitle": "Shapes"
  },
  {
    "type": "get",
    "url": "shapes/:id",
    "title": "Get a user role",
    "group": "Shapes",
    "name": "ShowShapes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The shape ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"Point\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ShapeController.php",
    "groupTitle": "Shapes"
  },
  {
    "type": "delete",
    "url": "transects/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "Transects",
    "name": "DestroyTransectAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAttributeController.php",
    "groupTitle": "Transects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "transects/:id/annotations",
    "title": "Get all annotations",
    "group": "Transects",
    "name": "IndexTransectAnnotations",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "description": "<p>Returns a list of all images that have annotations, along with detailed information on all annotations.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The transect ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n    {\n        \"id\":1,\n        \"filename\":\"image.jpg\",\n        \"annotations\": [\n            {\n                \"id\":1,\n                \"image_id\":1,\n                \"shape_id\":6,\n                \"labels\": [\n                   {\n                      \"id\":1,\n                      \"confidence\": 0.6,\n                      \"label\": {\n                         \"id\":3,\n                         \"name\":\"Benthic Object\",\n                         \"parent_id\":2,\n                         \"aphia_id\":null,\n                         \"project_id\":null,\n                         \"color\": \"0099ff\"\n                      },\n                      \"user\": {\n                         \"id\":13,\n                         \"role_id\":2,\n                         \"name\":\"Gudrun Schinner\"\n                      }\n                   }\n                ],\n                \"shape\": {\n                   \"id\":6,\n                   \"name\":\"Circle\"\n                },\n                \"points\": [\n                   {\"x\":4,\"y\":8}\n                ]\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAnnotationController.php",
    "groupTitle": "Transects"
  },
  {
    "type": "get",
    "url": "transects/:id/attributes",
    "title": "Get all attributes",
    "group": "Transects",
    "name": "IndexTransectAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAttributeController.php",
    "groupTitle": "Transects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "transects/:id/images",
    "title": "Get all images",
    "group": "Transects",
    "name": "IndexTransectImages",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "description": "<p>Returns a list of all image IDs of the transect.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The transect ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[1, 2, 3, 4, 5, 6]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectImageController.php",
    "groupTitle": "Transects"
  },
  {
    "type": "get",
    "url": "transects/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "Transects",
    "name": "ShowTransectAttributes",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAttributeController.php",
    "groupTitle": "Transects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "transects/:id",
    "title": "Get a transect",
    "group": "Transects",
    "name": "ShowTransects",
    "permission": [
      {
        "name": "projectMember",
        "title": "Project member",
        "description": "<p>The authenticated user needs to be member of a project containing this element.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The transect ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"transect 1\",\n   \"media_type_id\": 3,\n   \"creator_id\": 7,\n   \"created_at\": \"2015-02-20 17:51:03\",\n   \"updated_at\": \"2015-02-20 17:51:03\",\n   \"url\": \"/vol/images/\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectController.php",
    "groupTitle": "Transects"
  },
  {
    "type": "post",
    "url": "projects/:id/transects",
    "title": "Create a new transect",
    "group": "Transects",
    "name": "StoreProjectTransects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The project ID.</p> "
          }
        ],
        "Required attributes": [
          {
            "group": "Required attributes",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the new transect.</p> "
          },
          {
            "group": "Required attributes",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>The base URL ot the image files. Can be a local path like <code>/vol/transects/1</code> or a remote path like <code>https://example.com/transects/1</code>.</p> "
          },
          {
            "group": "Required attributes",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "media_type_id",
            "description": "<p>The ID of the media type of the new transect.</p> "
          },
          {
            "group": "Required attributes",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "images",
            "description": "<p>List of image file names of the images that can be found at the base URL, formatted as comma separated values. With the base URL <code>/vol/transects/1</code> and the image <code>1.jpg</code>, the local file <code>/vol/transects/1/1.jpg</code> will be used.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: 'New transect'\nurl: '/vol/transects/test-transect'\nmedia_type_id: 1\nimages: '1.jpg,2.jpg,3.jpg'",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 2,\n   \"name\": \"New transect\",\n   \"media_type_id\": 1,\n   \"creator_id\": 2,\n   \"created_at\": \"2015-02-19 16:10:17\",\n   \"updated_at\": \"2015-02-19 16:10:17\",\n   \"url\": \"/vol/transects/test-transect\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/ProjectTransectController.php",
    "groupTitle": "Transects"
  },
  {
    "type": "post",
    "url": "transects/:id/attributes",
    "title": "Attach an attribute",
    "group": "Transects",
    "name": "StoreTransectAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAttributeController.php",
    "groupTitle": "Transects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "transects/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "Transects",
    "name": "UpdateTransectAttributes",
    "permission": [
      {
        "name": "projectEditor",
        "title": "Project editor",
        "description": "<p>The authenticated user needs to be editor or admin of a project containing this element.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectAttributeController.php",
    "groupTitle": "Transects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "transects/:id",
    "title": "Update a transect",
    "group": "Transects",
    "name": "UpdateTransects",
    "permission": [
      {
        "name": "projectAdmin",
        "title": "Project admin",
        "description": "<p>The authenticated user needs to be admin of the project.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The transect ID.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the transect.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/TransectController.php",
    "groupTitle": "Transects"
  },
  {
    "type": "delete",
    "url": "users/:id/attributes/:name",
    "title": "Detach an attribute",
    "group": "User",
    "name": "DestroyUserAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserAttributeController.php",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "users/:id/attributes",
    "title": "Get all attributes",
    "group": "User",
    "name": "IndexUserAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserAttributeController.php",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 2,\n      \"name\": \"test\",\n      \"type\": \"integer\",\n      \"value_int\": 1,\n      \"value_double\": null,\n      \"value_string\": null\n   }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "users/:id/attributes/:name",
    "title": "Get an attribute",
    "group": "User",
    "name": "ShowUserAttributes",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserAttributeController.php",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The annotation ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n    \"id\": 2,\n    \"name\": \"test\",\n    \"type\": \"integer\",\n    \"value_int\": 1,\n    \"value_double\": null,\n    \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "users/:id/attributes",
    "title": "Attach an attribute",
    "group": "User",
    "name": "StoreUserAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserAttributeController.php",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          },
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 4,\n   \"name\": \"my-test-attribute\",\n   \"type\": \"integer\",\n   \"value_int\": 123,\n   \"value_double\": null,\n   \"value_string\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "users/:id/attributes/:name",
    "title": "Update an attribute",
    "group": "User",
    "name": "UpdateUserAttributes",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserAttributeController.php",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The model ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The attribute name.</p> "
          }
        ],
        "Required arguments": [
          {
            "group": "Required arguments",
            "type": "<p>Mixed</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>The attribute value, either <code>Integer</code>, <code>Double</code>, <code>String</code> or <code>Boolean</code>, depending on the type of the attribute.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "name: my-test-attribute\nvalue: 123",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "users/my/token",
    "title": "Revoke an API token",
    "description": "<p>This action is allowed only by session cookie authentication.</p> ",
    "group": "Users",
    "name": "DestroyOwnTokenUsers",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "users/my",
    "title": "Delete the own user",
    "group": "Users",
    "name": "DestroyOwnUser",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>This action is allowed only by session cookie authentication. If the user is the last admin of a project, they cannot be deleted. The admin role needs to be passed on to another member of the project first.</p> ",
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "users/:id",
    "title": "Delete a user",
    "group": "Users",
    "name": "DestroyUsers",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "description": "<p>This action is allowed only by session cookie authentication. If the user is the last admin of a project, they cannot be deleted. The admin role needs to be passed on to another member of the project first.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/find/:pattern",
    "title": "Find a user",
    "group": "Users",
    "name": "FindUsers",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>Searches for a user with firstname or lastname like <code>pattern</code> and returns the first 10 matches.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pattern",
            "description": "<p>Part of the firstname or lastname of the user to search for.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"Joe User\",\n      \"role_id\": 2\n   },\n   {\n      \"id\": 2,\n      \"name\": \"Jane User\",\n      \"role_id\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users",
    "title": "Get all users",
    "group": "Users",
    "name": "IndexUsers",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n   {\n      \"id\": 1,\n      \"name\": \"Joe User\",\n      \"role_id\": 2\n   },\n   {\n      \"id\": 2,\n      \"name\": \"Jane User\",\n      \"role_id\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/my",
    "title": "Get the own user",
    "group": "Users",
    "name": "ShowOwnUser",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>Returns the user making the request.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"Joe User\",\n   \"role_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/:id",
    "title": "Get a user",
    "group": "Users",
    "name": "ShowUsers",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 1,\n   \"name\": \"Joe User\",\n   \"role_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "users/my/token",
    "title": "Generate a new API token",
    "description": "<p>This action is allowed only by session cookie authentication.</p> ",
    "group": "Users",
    "name": "StoreOwnTokenUsers",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "users",
    "title": "Create a new user",
    "group": "Users",
    "name": "StoreUsers",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "description": "<p>This action is allowed only by session cookie authentication. A new user gets the global role <code>editor</code> by default.</p> ",
    "parameter": {
      "fields": {
        "Required parameters": [
          {
            "group": "Required parameters",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the new user. Must be unique for all users.</p> "
          },
          {
            "group": "Required parameters",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the new user.</p> "
          },
          {
            "group": "Required parameters",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>The password of the new user again.</p> "
          },
          {
            "group": "Required parameters",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstname",
            "description": "<p>The firstname of the new user.</p> "
          },
          {
            "group": "Required parameters",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>The lastname of the new user.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "email: 'new@example.com'\npassword: 'TotallySecure'\npassword_confirmation: 'TotallySecure'\nfirstname: 'New'\nlastname: 'User'",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"id\": 2,\n   \"name\": \"Joe User\",\n   \"role_id\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/my",
    "title": "Update the own user",
    "group": "Users",
    "name": "UpdateOwnUser",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>The user needs to be authenticated.</p> "
      }
    ],
    "description": "<p>This action is allowed only by session cookie authentication.</p> ",
    "parameter": {
      "fields": {
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The new email address of the user. Must be unique for all users. If this parameter is set, an additional <code>old_password</code> needs to be present, containing the user's current password.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The new password of the user. If this parameter is set, an additional <code>password_confirmation</code> parameter needs to be present, containing the same new password, as well as an <code>old_password</code> parameter, containing the old password.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstname",
            "description": "<p>The new firstname of the user.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>The new lastname of the user.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "email: 'new@example.com'\npassword: 'TotallySecure'\npassword_confirmation: 'TotallySecure'\nfirstname: 'New'\nlastname: 'Name'",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id",
    "title": "Update a user",
    "group": "Users",
    "name": "UpdateUsers",
    "permission": [
      {
        "name": "admin",
        "title": "Authenticated admin",
        "description": "<p>The user needs to be global admin.</p> "
      }
    ],
    "description": "<p>This action is allowed only by session cookie authentication.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID.</p> "
          }
        ],
        "Attributes that can be updated": [
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The new email address of the user. Must be unique for all users.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The new password of the user. If this parameter is set, an additional <code>password_confirmation</code> parameter needs to be present, containing the same new password.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "firstname",
            "description": "<p>The new firstname of the user.</p> "
          },
          {
            "group": "Attributes that can be updated",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>The new lastname of the user.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "email: 'new@example.com'\npassword: 'TotallySecure'\npassword_confirmation: 'TotallySecure'\nfirstname: 'New'\nlastname: 'Name'",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "Users"
  }
] });