/**
 * @namespace biigle.annotations
 * @ngdoc factory
 * @name AnnotationFilters
 * @memberOf biigle.annotations
 * @description Provides functions that filter annotations based on different properties
 */
angular.module('biigle.annotations').factory('AnnotationFilters', function (ANNOTATION_SESSIONS) {
    "use strict";

    /*
     * Each item is a function that gets one or more parameters for filtering.
     * The function returns a filter function which is specific for the given
     * parameter(s). The filter function gets an input object that consists of
     * a 'flat' list of annotations and a 'groupedByLabel' object (see the annotations
     * service). The filter function should return an object similar to the input object
     * but with the filtered out items removed from 'flat' and 'groupedByLabel'.
     */
    return {
        label: function (labelId) {
            return function (input) {
                var groupedByLabel = {};
                if (input.groupedByLabel.hasOwnProperty(labelId)) {
                    groupedByLabel[labelId] = input.groupedByLabel[labelId];
                }

                var flat = input.flat.filter(function (item) {
                    item.labels = item.labels.filter(function (annotationLabel) {
                        return annotationLabel.label.id === labelId;
                    });

                    return item.labels.length > 0;
                });

                return {
                    groupedByLabel: groupedByLabel,
                    flat: flat
                };
            };
        },
        user: function (userId) {
            return function (input) {
                var groupedByLabel = input.groupedByLabel;
                var annotations;
                for (var id in groupedByLabel) {
                    if (groupedByLabel.hasOwnProperty(id)) {
                        annotations = groupedByLabel[id].annotations;
                        for (var i = annotations.length - 1; i >= 0; i--) {
                            if (annotations[i].label.user.id !== userId) {
                                annotations.splice(i, 1);
                            }
                        }

                        if (annotations.length === 0) {
                            delete groupedByLabel[id];
                        }
                    }
                }

                var flat = input.flat.filter(function (item) {
                    item.labels = item.labels.filter(function (annotationLabel) {
                        return annotationLabel.user.id === userId;
                    });

                    return item.labels.length > 0;
                });

                return {
                    groupedByLabel: groupedByLabel,
                    flat: flat
                };
            };
        },
        shape: function (shapeId) {
            return function (input) {
                var groupedByLabel = input.groupedByLabel;
                var annotations;
                for (var id in groupedByLabel) {
                    if (groupedByLabel.hasOwnProperty(id)) {
                        annotations = groupedByLabel[id].annotations;
                        for (var i = annotations.length - 1; i >= 0; i--) {
                            if (annotations[i].annotation.shape_id !== shapeId) {
                                annotations.splice(i, 1);
                            }
                        }

                        if (annotations.length === 0) {
                            delete groupedByLabel[id];
                        }
                    }
                }

                var flat = input.flat.filter(function (item) {
                    return item.shape_id === shapeId;
                });

                return {
                    groupedByLabel: groupedByLabel,
                    flat: flat
                };
            };
        },
        session: function (sessionId) {
            var session;
            for (var i = ANNOTATION_SESSIONS.length - 1; i >= 0; i--) {
                if (ANNOTATION_SESSIONS[i].id === sessionId) {
                    session = ANNOTATION_SESSIONS[i];
                    break;
                }
            }

            session.starts_at = new Date(session.starts_at);
            session.ends_at = new Date(session.ends_at);
            var userIds = session.users.map(function (user) {
                return user.id;
            });

            return function (input) {
                var groupedByLabel = input.groupedByLabel;
                var annotations;
                var created_at;
                var userId;
                for (var id in groupedByLabel) {
                    if (groupedByLabel.hasOwnProperty(id)) {
                        annotations = groupedByLabel[id].annotations;
                        for (var i = annotations.length - 1; i >= 0; i--) {
                            created_at = new Date(annotations[i].annotation.created_at);
                            userId = annotations[i].label.user.id;
                            /*
                             * Dates without timezone (like these) are interpreted
                             * as dates of the timezone of the browser. Since the
                             * application can run in any timezone, these dates may
                             * not be interpreted correctly. But since the dates of the
                             * annotation session are not interpreted correctly, too
                             * (in the same way), we can compare them anyway.
                             * Just be sure not to use the iso_8601 dates of the
                             * annotation session for comparison with the dates of
                             * the annotations.
                             */
                            if (created_at < session.starts_at || created_at >= session.ends_at || userIds.indexOf(userId) === -1) {
                                annotations.splice(i, 1);
                            }
                        }

                        if (annotations.length === 0) {
                            delete groupedByLabel[id];
                        }
                    }
                }

                var flat = input.flat.filter(function (item) {
                    var created_at = new Date(item.created_at);
                    var hasValidLabel = false;
                    for (var i = item.labels.length - 1; i >= 0; i--) {
                        if (userIds.indexOf(item.labels[i].user.id) !== -1) {
                            hasValidLabel = true;
                            break;
                        }
                    }

                    return created_at >= session.starts_at && created_at < session.ends_at && hasValidLabel;
                });

                return {
                    groupedByLabel: groupedByLabel,
                    flat: flat
                };
            };
        }
    };
});
