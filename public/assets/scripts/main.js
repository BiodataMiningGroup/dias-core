angular.module("dias.api",["ngResource"]),angular.module("dias.api").config(["$httpProvider","$compileProvider",function(e,i){"use strict";e.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",i.debugInfoEnabled(!1)}]),angular.module("dias.ui.messages",["ui.bootstrap"]),angular.module("dias.ui.messages").config(["$compileProvider",function(e){e.debugInfoEnabled(!1)}]),angular.element(document).ready(function(){"use strict";angular.bootstrap(document.querySelector('[data-ng-controller="MessagesController"]'),["dias.ui.messages"])}),angular.module("dias.ui.users",["ui.bootstrap","dias.api"]),angular.module("dias.ui.users").config(["$compileProvider",function(e){"use strict";e.debugInfoEnabled(!1)}]),angular.module("dias.ui.utils",[]),angular.module("dias.ui.utils").config(["$compileProvider","$locationProvider",function(e,i){"use strict";e.debugInfoEnabled(!1),i.html5Mode({enabled:!0,requireBase:!1,rewriteLinks:!1})}]),angular.module("dias.ui",["ui.bootstrap","dias.ui.messages","dias.ui.users","dias.ui.utils","ngAnimate"]),angular.module("dias.ui").config(["$compileProvider","$animateProvider",function(e,i){"use strict";e.debugInfoEnabled(!1),i.classNameFilter(/\banimated\b/)}]),biigle={},biigle.$viewModel=function(e,i){var t=document.getElementById(e);window.addEventListener("load",function(){t&&i(t)})},angular.module("dias.api").factory("Annotation",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/annotations/:id",{id:"@id"},{save:{method:"PUT"},query:{method:"GET",url:i+"/api/v1/images/:id/annotations",isArray:!0},add:{method:"POST",url:i+"/api/v1/images/:id/annotations"}})}]),angular.module("dias.api").factory("AnnotationLabel",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/annotation-labels/:id",{id:"@id",annotation_id:"@annotation_id"},{query:{method:"GET",url:i+"/api/v1/annotations/:annotation_id/labels",isArray:!0},attach:{method:"POST",url:i+"/api/v1/annotations/:annotation_id/labels"},save:{method:"PUT",params:{annotation_id:null}},delete:{method:"DELETE",params:{annotation_id:null}}})}]),angular.module("dias.api").factory("AnnotationSession",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/annotation-sessions/:id",{id:"@id"},{save:{method:"PUT"},query:{method:"GET",url:i+"/api/v1/transects/:transect_id/annotation-sessions",isArray:!0},create:{method:"POST",url:i+"/api/v1/transects/:transect_id/annotation-sessions"}})}]),angular.module("dias.api").factory("Image",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/images/:id",{id:"@id"})}]),angular.module("dias.api").factory("ImageLabel",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/image-labels/:id",{id:"@id",image_id:"@image_id"},{query:{method:"GET",url:i+"/api/v1/images/:image_id/labels",isArray:!0},attach:{method:"POST",url:i+"/api/v1/images/:image_id/labels"},delete:{method:"DELETE",params:{image_id:null}}})}]),angular.module("dias.api").factory("Label",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/labels/:id",{id:"@id"},{create:{method:"POST",url:i+"/api/v1/label-trees/:label_tree_id/labels",params:{label_tree_id:"@label_tree_id"},isArray:!0}})}]),angular.module("dias.api").factory("LabelSource",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/label-sources/:id/find")}]),angular.module("dias.api").factory("LabelTree",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/label-trees/:id",{id:"@id"},{query:{method:"GET",isArray:!0},create:{method:"POST"},update:{method:"PUT"}})}]),angular.module("dias.api").factory("LabelTreeAuthorizedProject",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/label-trees/:id/authorized-projects",{},{addAuthorized:{method:"POST"},removeAuthorized:{method:"DELETE",url:i+"/api/v1/label-trees/:id/authorized-projects/:pid",params:{pid:"@id"}}})}]),angular.module("dias.api").factory("LabelTreeUser",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/label-trees/:label_tree_id/users/:id",{id:"@id"},{update:{method:"PUT"},attach:{method:"POST",url:i+"/api/v1/label-trees/:label_tree_id/users",params:{id:null}},detach:{method:"DELETE"}})}]),angular.module("dias.api").factory("MediaType",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/media-types/:id",{id:"@id"})}]),angular.module("dias.api").factory("OwnUser",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/users/my",{},{save:{method:"PUT"}})}]),angular.module("dias.api").factory("Project",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/projects/:id",{id:"@id"},{query:{method:"GET",params:{id:"my"},isArray:!0},add:{method:"POST"},save:{method:"PUT"}})}]),angular.module("dias.api").factory("ProjectLabelTree",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/projects/:project_id/label-trees",{project_id:"@project_id"},{available:{method:"GET",isArray:!0,url:i+"/api/v1/projects/:project_id/label-trees/available"},attach:{method:"POST",url:i+"/api/v1/projects/:project_id/label-trees"},detach:{method:"DELETE",url:i+"/api/v1/projects/:project_id/label-trees/:id",params:{id:"@id"}}})}]),angular.module("dias.api").factory("ProjectTransect",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/projects/:project_id/transects/:id",{id:"@id"},{add:{method:"POST"},attach:{method:"POST"},detach:{method:"DELETE"}})}]),angular.module("dias.api").factory("ProjectUser",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/projects/:project_id/users/:id",{id:"@id"},{save:{method:"PUT"},attach:{method:"POST"},detach:{method:"DELETE"}})}]),angular.module("dias.api").factory("Role",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/roles/:id",{id:"@id"})}]),angular.module("dias.api").factory("Shape",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/shapes/:id",{id:"@id"})}]),angular.module("dias.api").factory("Transect",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/transects/:id",{id:"@id"},{save:{method:"PUT"}})}]),angular.module("dias.api").factory("TransectImage",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/transects/:transect_id/images",{},{save:{method:"POST",isArray:!0}})}]),angular.module("dias.api").factory("User",["$resource","URL",function(e,i){"use strict";return e(i+"/api/v1/users/:id/:query",{id:"@id"},{save:{method:"PUT"},add:{method:"POST"},find:{method:"GET",params:{id:"find"},isArray:!0}})}]),angular.module("dias.api").service("roles",["Role",function(e){"use strict";var i={},t={};e.query(function(e){e.forEach(function(e){i[e.id]=e.name,t[e.name]=e.id})}),this.getName=function(e){return i[e]},this.getId=function(e){return t[e]}}]),angular.module("dias.api").service("shapes",["Shape",function(e){"use strict";var i={},t={},a=e.query(function(e){e.forEach(function(e){i[e.id]=e.name,t[e.name]=e.id})});this.getName=function(e){return i[e]},this.getId=function(e){return t[e]},this.getAll=function(){return a}}]),biigle.api={},biigle.api.notifications=Vue.resource("/api/v1/notifications{/id}",{},{markRead:{method:"PUT"}}),biigle.api.projectTransects=Vue.resource("/api/v1/projects{/pid}/transects{/id}",{},{attach:{method:"POST"},detach:{method:"DELETE"}}),biigle.api.projects=Vue.resource("/api/v1/projects{/id}",{},{query:{method:"GET",params:{id:"my"}}}),biigle.messages={},biigle.$viewModel("messages-display",function(e){var i={props:["message"],computed:{typeClass:function(){return this.message.type?"alert-"+this.message.type:"alert-info"}},methods:{close:function(){this.message?biigle.messages.store.close(this.message.id):this.$el.remove()}}};new Vue({el:e,components:{message:i},data:{messages:biigle.messages.store.all}})}),biigle.messages.store=new Vue({data:{max:1,all:[]},methods:{post:function(e,i){biigle.utils.cb.exitFullscreen(),this.all.unshift({id:Date.now(),type:e,text:i}),this.all.length>this.max&&this.all.pop()},danger:function(e){this.post("danger",e)},warning:function(e){this.post("warning",e)},success:function(e){this.post("success",e)},info:function(e){this.post("info",e)},close:function(e){for(var i=this.all.length-1;i>=0;i--)this.all[i].id===e&&this.all.splice(i,1)},handleErrorResponse:function(e){var i=e.body;if(i){if(i.message)return void this.danger(i.message);if("string"==typeof i)return void this.danger(i)}if(422===e.status)for(var t in i)this.danger(i[t][0]);else 403===e.status?this.danger("You have no permission to do that."):401===e.status?this.danger("Please log in (again)."):this.danger("The server didn't respond, sorry.")}}}),$diasPostMessage=biigle.messages.store.post,biigle.notifications={},biigle.$viewModel("notifications-list",function(e){var i={props:["item","removeItem"],data:function(){return{isLoading:!1}},computed:{classObject:function(){return this.item.data.type?"panel-"+this.item.data.type:"panel-default"},isUnread:function(){return null===this.item.read_at}},methods:{markRead:function(e){var i=this;this.isLoading=!0,biigle.api.notifications.markRead({id:this.item.id},{}).then(function(e){i.item.read_at=new Date,i.removeItem&&biigle.notifications.store.remove(i.item.id)},function(i){e||biigle.messages.store.handleErrorResponse(i)}).finally(function(){i.isLoading=!1})}}};new Vue({el:e,components:{notification:i},data:{notifications:biigle.notifications.store.all},methods:{hasNotifications:function(){return biigle.notifications.store.count()>0}}})}),biigle.$viewModel("notifications-navbar-indicator",function(e){new Vue({el:e,computed:{unread:function(){return biigle.notifications.store.isInitialized()?biigle.notifications.store.hasUnread():"true"===this.$el.attributes.unread.value}}})}),biigle.notifications.store=new Vue({data:{_all:null,initialized:!1},computed:{all:{get:function(){return this._all||[]},set:function(e){this.initialized=!0,this._all=e}},unread:function(){return this.all.filter(function(e){return null===e.read_at})}},methods:{isInitialized:function(){return this.initialized},count:function(){return this.all.length},countUnread:function(){return this.unread.length},hasUnread:function(){for(var e=this.all.length-1;e>=0;e--)if(null===this.all[e].read_at)return!0;return!1},remove:function(e){for(var i=this.all.length-1;i>=0;i--)this.all[i].id===e&&this.all.splice(i,1)}}}),biigle.$viewModel("notifications-unread-count",function(e){new Vue({el:e,computed:{count:biigle.notifications.store.countUnread}})}),biigle.systemMessages={},biigle.$viewModel("system-messages-edit-form",function(e){var i=e.querySelector('textarea[name="body"]'),t="";i&&(t=i.value,i.innerHTML=""),new Vue({el:e,data:{body:t}})}),biigle.utils={},biigle.utils.cb={exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},angular.module("dias.ui.messages").service("msg",function(){"use strict";var e=this;this.post=function(e,i){i=i||e,window.$diasPostMessage(e,i)},this.danger=function(i){e.post("danger",i)},this.warning=function(i){e.post("warning",i)},this.success=function(i){e.post("success",i)},this.info=function(i){e.post("info",i)},this.responseError=function(i){var t=i.data;if(t)if(t.message)e.danger(t.message);else if("string"==typeof t)e.danger(t);else for(var a in t)e.danger(t[a][0]);else 403===i.status?e.danger("You have no permission to do that."):401===i.status?e.danger("Please log in (again)."):e.danger("The server didn't respond, sorry.")}}),angular.module("dias.ui.users").directive("userChooser",function(){"use strict";return{restrict:"A",scope:{select:"=userChooser"},replace:!0,template:'<input type="text" data-ng-model="selected" data-uib-typeahead="name(user) for user in find($viewValue)" data-typeahead-wait-ms="250" data-typeahead-on-select="select($item)"/>',controller:["$scope","User",function(e,i){e.name=function(e){return e&&e.firstname&&e.lastname?e.firstname+" "+e.lastname:""},e.find=function(e){return i.find({query:encodeURIComponent(e)}).$promise}}]}}),angular.module("dias.ui.utils").factory("debounce",["$timeout","$q",function(e,i){"use strict";var t={};return function(a,r,n){var s=i.defer();return function(){var o=this,u=arguments,d=function(){t[n]=void 0,s.resolve(a.apply(o,u)),s=i.defer()};return t[n]&&e.cancel(t[n]),t[n]=e(d,r),s.promise}()}}]),angular.module("dias.ui.utils").factory("filterExclude",function(){"use strict";var e=function(e,i){return e-i},i=function(i,t,a){a||(t=t.slice(0).sort(e));for(var r=i.slice(0).sort(e),n=0,s=0;n<t.length&&s<r.length;)t[n]<r[s]?n++:t[n]===r[s]?(i.splice(i.indexOf(r[s]),1),n++,s++):s++};return i}),angular.module("dias.ui.utils").factory("filterSubset",function(){"use strict";var e=function(e,i){return e-i},i=function(i,t,a){a||(t=t.slice(0).sort(e));for(var r=i.slice(0).sort(e),n=[],s=0,o=0;s<t.length&&o<r.length;)t[s]<r[o]?s++:t[s]===r[o]?(s++,o++):n.push(r[o++]);for(;o<r.length;)n.push(r[o++]);for(s=0;s<n.length;s++)i.splice(i.indexOf(n[s]),1)};return i}),angular.module("dias.ui.utils").service("keyboard",["$document",function(e){"use strict";var i={},t=e[0].body,a=function(e,i){for(var t=e.length-1;t>=0;t--)if(e[t].callback(i)===!1)return},r=function(e){if(e.target===t){var r=e.keyCode,n=String.fromCharCode(e.which||r).toLowerCase();i[r]&&a(i[r],e),i[n]&&a(i[n],e)}};e.bind("keydown",r),this.on=function(e,t,a){("string"==typeof e||e instanceof String)&&(e=e.toLowerCase()),a=a||0;var r={callback:t,priority:a};if(i[e]){var n,s=i[e];for(n=0;n<s.length&&!(s[n].priority>=a);n++);n===s.length-1?s.push(r):s.splice(n,0,r)}else i[e]=[r]},this.off=function(e,t){if(("string"==typeof e||e instanceof String)&&(e=e.toLowerCase()),i[e])for(var a=i[e],r=0;r<a.length;r++)if(a[r].callback===t){a.splice(r,1);break}}}]),angular.module("dias.ui.utils").service("urlParams",["$location",function(e){"use strict";this.setSlug=function(i){var t=e.path();t=t.substring(0,t.lastIndexOf("/")),e.path(t+"/"+i),e.replace()},this.set=function(i){e.search(i),e.replace()},this.unset=function(i){e.search(i,null),e.replace()},this.get=function(i){return e.search()[i]}}]);