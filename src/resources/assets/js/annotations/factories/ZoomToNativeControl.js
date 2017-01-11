/**
 * @namespace biigle.annotations
 * @ngdoc factory
 * @name ZoomToNativeControl
 * @memberOf biigle.annotations
 * @description Control for zooming the map image to the original resolution
 */
angular.module('biigle.annotations').factory('ZoomToNativeControl', function () {
        "use strict";

        function ZoomToNativeControl (opt_options) {
            var options = opt_options || {};
            var label = options.label ? options.label : '1';
            var button = document.createElement('button');
            var _this = this;
            button.innerHTML = label;
            button.title = 'Zoom to original resolution';

            button.addEventListener('click', function () {
                _this.zoomToNative.call(_this);
            });

            var element = document.createElement('div');
            element.className = 'zoom-to-native ol-unselectable ol-control';
            element.appendChild(button);

            ol.control.Control.call(this, {
                element: element,
                target: options.target
            });

            this.duration_ = options.duration !== undefined ? options.duration : 250;
        }

        ol.inherits(ZoomToNativeControl, ol.control.Control);

        ZoomToNativeControl.prototype.zoomToNative = function () {
            var map = this.getMap();
            var view = map.getView();
            if (!view) {
                // the map does not have a view, so we can't act
                // upon it
                return;
            }

            var currentResolution = view.getResolution();
            if (currentResolution) {
                if (this.duration_ > 0) {
                    map.beforeRender(ol.animation.zoom({
                        resolution: currentResolution,
                        duration: this.duration_,
                        easing: ol.easing.easeOut
                    }));
                }

                view.setResolution(view.constrainResolution(1));
            }
        };

        return ZoomToNativeControl;
    }
);
