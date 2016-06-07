/**
 * @namespace dias.annotations
 * @ngdoc service
 * @name labels
 * @memberOf dias.annotations
 * @description Wrapper service for annotation labels to provide some convenience functions.
 */
angular.module('dias.annotations').service('labels', function (AnnotationLabel, msg, LABEL_TREES) {
        "use strict";

        var selectedLabel;
        var currentConfidence = 1.0;

        var trees = LABEL_TREES;
        var treesCompiled = {};
        var labelsList = [];

        var init = function () {
            var treeName = null;
            var buildTree = function (label) {
                var parent = label.parent_id;
                if (treesCompiled[treeName][parent]) {
                    treesCompiled[treeName][parent].push(label);
                } else {
                    treesCompiled[treeName][parent] = [label];
                }
            };

            for (var i = trees.length - 1; i >= 0; i--) {
                treeName = trees[i].name;
                treesCompiled[treeName] = {};
                trees[i].labels.forEach(buildTree);
                labelsList = labelsList.concat(trees[i].labels);
            }
        };

        this.fetchForAnnotation = function (annotation) {
            if (!annotation) return;

            // don't fetch twice
            if (!annotation.labels) {
                annotation.labels = AnnotationLabel.query({
                    annotation_id: annotation.id
                });
            }

            return annotation.labels;
        };

        this.attachToAnnotation = function (annotation) {
            var label = AnnotationLabel.attach({
                annotation_id: annotation.id,
                label_id: selectedLabel.id,
                confidence: currentConfidence
            });

            label.$promise.then(function () {
                annotation.labels.push(label);
            });

            label.$promise.catch(msg.responseError);

            return label;
        };

        this.removeFromAnnotation = function (annotation, label) {
            // use index to see if the label exists for the annotation
            var index = annotation.labels.indexOf(label);
            if (index > -1) {
                return AnnotationLabel.delete({id: label.id}, function () {
                    // update the index since the label list may have been modified
                    // in the meantime
                    index = annotation.labels.indexOf(label);
                    annotation.labels.splice(index, 1);
                }, msg.responseError);
            }
        };

        this.getTree = function () {
            return treesCompiled;
        };

        this.getList = function () {
            return labelsList;
        };

        this.setSelected = function (label) {
            selectedLabel = label;
        };

        this.getSelected = function () {
            return selectedLabel;
        };

        this.hasSelected = function () {
            return !!selectedLabel;
        };

        this.getSelectedId = function () {
            return selectedLabel ? selectedLabel.id : null;
        };

        this.setCurrentConfidence = function (confidence) {
            currentConfidence = confidence;
        };

        this.getCurrentConfidence = function () {
            return currentConfidence;
        };

        init();
    }
);
