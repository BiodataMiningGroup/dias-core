angular.module("dias.transects").controller("AnnotationsFilterController",["AnnotationImage","filter",function(e,t){"use strict";t.add({name:"annotations",resource:e,typeahead:null})}]),angular.module("dias.transects").controller("AnnotationsLabelFilterController",["AnnotationLabelImage","filter",function(e,t){"use strict";t.add({name:"label",resource:e,typeahead:"labelFilterTypeahead.html",transformData:function(e){return e.id}})}]),angular.module("dias.transects").controller("AnnotationsUserFilterController",["AnnotationUserImage","filter",function(e,t){"use strict";t.add({name:"user",resource:e,typeahead:"userFilterTypeahead.html",transformData:function(e){return e.id}})}]),angular.module("dias.transects").factory("AnnotationImage",["$resource","URL",function(e,t){"use strict";return e(t+"/api/v1/transects/:transect_id/images/filter/annotations")}]),angular.module("dias.transects").factory("AnnotationLabelImage",["$resource","URL",function(e,t){"use strict";return e(t+"/api/v1/transects/:transect_id/images/filter/label/:data")}]),angular.module("dias.transects").factory("AnnotationUserImage",["$resource","URL",function(e,t){"use strict";return e(t+"/api/v1/transects/:transect_id/images/filter/user/:data")}]),angular.module("dias.transects").factory("TransectLabels",["$resource","URL",function(e,t){"use strict";return e(t+"/api/v1/transects/:transect_id/labels/find/:query",{},{find:{method:"GET",isArray:!0}})}]),angular.module("dias.transects").factory("TransectUsers",["$resource","URL",function(e,t){"use strict";return e(t+"/api/v1/transects/:transect_id/users/find/:query",{},{find:{method:"GET",isArray:!0}})}]),angular.module("dias.transects").directive("transectLabelChooser",function(){"use strict";return{restrict:"A",scope:{select:"=transectLabelChooser",id:"=transectId"},replace:!0,template:'<input type="text" data-ng-model="selected" data-uib-typeahead="label.name for label in find($viewValue)" data-typeahead-wait-ms="250" data-typeahead-on-select="select($item)"/>',controller:["$scope","TransectLabels",function(e,t){e.find=function(a){return t.find({transect_id:e.id,query:encodeURIComponent(a)}).$promise}}]}}),angular.module("dias.transects").directive("transectUserChooser",function(){"use strict";return{restrict:"A",scope:{select:"=transectUserChooser",id:"=transectId"},replace:!0,template:'<input type="text" data-ng-model="selected" data-uib-typeahead="name(user) for user in find($viewValue)" data-typeahead-wait-ms="250" data-typeahead-on-select="select($item)"/>',controller:["$scope","TransectUsers",function(e,t){e.name=function(e){return e&&e.firstname&&e.lastname?e.firstname+" "+e.lastname:""},e.find=function(a){return t.find({transect_id:e.id,query:encodeURIComponent(a)}).$promise}}]}});