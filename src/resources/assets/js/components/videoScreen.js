import AnnotationPlayback from './videoScreen/annotationPlayback';
import Collection from '@biigle/ol/Collection';
import DrawInteractions from './videoScreen/drawInteractions';
import Indicators from './videoScreen/indicators';
import Map from '@biigle/ol/Map';
import ModifyInteractions from './videoScreen/modifyInteractions';
import PolygonBrushInteractions from './videoScreen/polygonBrushInteractions';
import SelectInteraction from '@biigle/ol/interaction/Select';
import Tooltips from './videoScreen/tooltips';
import VectorLayer from '@biigle/ol/layer/Vector';
import VectorSource from '@biigle/ol/source/Vector';
import VideoPlayback from './videoScreen/videoPlayback';
import ZoomControl from '@biigle/ol/control/Zoom';
import ZoomToExtentControl from '@biigle/ol/control/ZoomToExtent';
import {click as clickCondition} from '@biigle/ol/events/condition';
import {containsCoordinate} from '@biigle/ol/extent';
import {ControlButton} from '../import';
import {defaults as defaultInteractions} from '@biigle/ol/interaction';
import {Keyboard} from '../import';
import {Minimap} from '../import';
import {Styles} from '../import';
import {ZoomToNativeControl} from '../import';

export default {
    mixins: [
        VideoPlayback,
        AnnotationPlayback,
        DrawInteractions,
        ModifyInteractions,
        Tooltips,
        Indicators,
        PolygonBrushInteractions,
    ],
    template: `<div class="video-screen" :style="styleObject">
        <minimap
            v-if="showMinimap"
            :extent="extent"
            ></minimap>
        <label-tooltip
            watch="hoverFeatures"
            :show="showLabelTooltip"
            :position="mousePosition"
            ></label-tooltip>
        <div class="controls">
            <div class="btn-group">
                <control-button
                    v-if="playing"
                    icon="fa-pause"
                    title="Pause 𝗦𝗽𝗮𝗰𝗲𝗯𝗮𝗿"
                    @click="pause"
                    ></control-button>
                <control-button
                    v-else
                    icon="fa-play"
                    title="Play 𝗦𝗽𝗮𝗰𝗲𝗯𝗮𝗿"
                    @click="play"
                    ></control-button>
                <!-- <control-button
                    v-if="canAdd"
                    icon="fa-bookmark"
                    title="Create a bookmark 𝗕"
                    @click="emitCreateBookmark"
                    ></control-button> -->
            </div>
            <div v-if="canAdd" class="btn-group">
                <control-button
                    icon="icon-point"
                    title="Start a point annotation 𝗔"
                    :hover="false"
                    :open="isDrawingPoint"
                    :active="isDrawingPoint"
                    @click="drawPoint"
                    >
                        <control-button
                            icon="fa-check"
                            title="Finish the point annotation 𝗘𝗻𝘁𝗲𝗿"
                            :disabled="cantFinishDrawAnnotation"
                            @click="finishDrawAnnotation"
                            ></control-button>
                        <control-button
                            icon="fa-project-diagram"
                            title="Finish and track the point annotation"
                            v-on:click="finishTrackAnnotation"
                            :disabled="cantFinishTrackAnnotation"
                            ></control-button>
                </control-button>
                <control-button
                    icon="icon-rectangle"
                    title="Start a rectangle annotation 𝗦"
                    :hover="false"
                    :open="isDrawingRectangle"
                    :active="isDrawingRectangle"
                    @click="drawRectangle"
                    >
                        <control-button
                            icon="fa-check"
                            title="Finish the rectangle annotation 𝗘𝗻𝘁𝗲𝗿"
                            :disabled="cantFinishDrawAnnotation"
                            @click="finishDrawAnnotation"
                            ></control-button>
                </control-button>
                <control-button
                    icon="icon-circle"
                    title="Start a circle annotation 𝗗"
                    :hover="false"
                    :open="isDrawingCircle"
                    :active="isDrawingCircle"
                    @click="drawCircle"
                    >
                        <control-button
                            icon="fa-check"
                            title="Finish the circle annotation 𝗘𝗻𝘁𝗲𝗿"
                            :disabled="cantFinishDrawAnnotation"
                            @click="finishDrawAnnotation"
                            ></control-button>
                        <control-button
                            icon="fa-project-diagram"
                            title="Finish and track the circle annotation"
                            v-on:click="finishTrackAnnotation"
                            :disabled="cantFinishTrackAnnotation"
                            ></control-button>
                </control-button>
                <control-button
                    icon="icon-linestring"
                    title="Start a line annotation 𝗙"
                    :hover="false"
                    :open="isDrawingLineString"
                    :active="isDrawingLineString"
                    @click="drawLineString"
                    >
                        <control-button
                            icon="fa-check"
                            title="Finish the line annotation 𝗘𝗻𝘁𝗲𝗿"
                            :disabled="cantFinishDrawAnnotation"
                            @click="finishDrawAnnotation"
                            ></control-button>
                </control-button>
                <control-button
                    icon="icon-polygon"
                    title="Start a polygon annotation 𝗚"
                    :open="isDrawingPolygon"
                    :active="isDrawingPolygon"
                    @click="drawPolygon"
                    >
                        <control-button
                            v-if="isDrawingPolygon || isUsingPolygonBrush"
                            icon="fa-check"
                            title="Finish the polygon annotation 𝗘𝗻𝘁𝗲𝗿"
                            :disabled="cantFinishDrawAnnotation"
                            @click="finishDrawAnnotation"
                            ></control-button>
                        <control-button
                            icon="fa-paint-brush"
                            title="Draw a polygon using the brush tool 𝗘"
                            :active="isUsingPolygonBrush"
                            @click="togglePolygonBrush"
                            ></control-button>
                        <control-button
                            icon="fa-eraser"
                            title="Modify selected polygons using the eraser tool 𝗥"
                            :active="isUsingPolygonEraser"
                            @click="togglePolygonEraser"
                            ></control-button>
                        <control-button
                            icon="fa-fill-drip"
                            title="Modify selected polygons using the fill tool 𝗧"
                            :active="isUsingPolygonFill"
                            @click="togglePolygonFill"
                            ></control-button>
                </control-button>
            </div>
            <div v-if="showModifyBar" class="btn-group">
                <control-button
                    v-if="canModify"
                    icon="fa-tag"
                    title="Attach the currently selected label to existing annotations 𝗟"
                    :active="isAttaching"
                    :disabled="hasNoSelectedLabel"
                    @click="toggleAttaching"
                    ></control-button>
                <control-button
                    v-if="canModify"
                    icon="fa-arrows-alt"
                    title="Move selected annotations 𝗠"
                    :active="isTranslating"
                    @click="toggleTranslating"
                    ></control-button>
                <control-button
                    v-if="canModify"
                    icon="fa-link"
                    title="Link selected annotations"
                    :disabled="cannotLinkAnnotations"
                    @click="emitLinkAnnotations"
                    ></control-button>
                <control-button
                    v-if="canModify"
                    icon="fa-unlink"
                    title="Split selected annotation"
                    :disabled="cannotSplitAnnotation"
                    @click="emitSplitAnnotation"
                    ></control-button>
                <control-button
                    v-if="canDelete"
                    icon="fa-trash"
                    title="Delete selected annotations/keyframes 𝗗𝗲𝗹𝗲𝘁𝗲"
                    :disabled="hasNoSelectedAnnotations"
                    @click="emitDelete"
                    ></control-button>
            </div>
        </div>
        <div class="indicators indicators--left">
            <mouse-position-indicator
                v-if="showMousePosition"
                :position="mousePositionImageCoordinates"
                ></mouse-position-indicator>
        </div>
        <div class="indicators indicators--right">
            <div
                class="indicator"
                v-if="selectedLabel"
                v-text="selectedLabel.name"
                ></div>
        </div>
    </div>`,
    components: {
        controlButton: ControlButton,
        minimap: Minimap,
    },
    props: {
        annotations: {
            type: Array,
            default() {
                return [];
            },
        },
        annotationOpacity: {
            type: Number,
            default: 1.0,
        },
        autoplayDraw: {
            type: Number,
            default: 0,
        },
        canAdd: {
            type: Boolean,
            default: false,
        },
        canModify: {
            type: Boolean,
            default: false,
        },
        canDelete: {
            type: Boolean,
            default: false,
        },
        initialCenter: {
            type: Array,
            default: [0, 0],
        },
        initialResolution: {
            type: Number,
            default: 0,
        },
        listenerSet: {
            type: String,
            default: 'default',
        },
        selectedAnnotations: {
            type: Array,
            default() {
                return [];
            },
        },
        selectedLabel: {
            type: Object,
        },
        showLabelTooltip: {
            type: Boolean,
            default: false,
        },
        showMinimap: {
            type: Boolean,
            default: true,
        },
        showMousePosition: {
            type: Boolean,
            default: true,
        },
        video: {
            type: HTMLVideoElement,
            required: true,
        },
        heightOffset: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            interactionMode: 'default',
            // Mouse position in OpenLayers coordinates.
            mousePosition: [0, 0],
        };
    },
    computed: {
        showModifyBar() {
            return this.canModify || this.canDelete;
        },
        hasSelectedAnnotations() {
            return this.selectedAnnotations.length > 0;
        },
        hasNoSelectedAnnotations() {
            return !this.hasSelectedAnnotations;
        },
        isDefaultInteractionMode() {
            return this.interactionMode === 'default';
        },
        styleObject() {
            if (this.heightOffset !== 0) {
                return `height: calc(65% + ${this.heightOffset}px);`;
            }

            return '';
        },
    },
    methods: {
        createMap() {
            let map = new Map({
                controls: [
                    new ZoomControl(),
                    new ZoomToExtentControl({
                        tipLabel: 'Zoom to show whole video',
                        // fontawesome compress icon
                        label: '\uf066'
                    }),
                ],
                interactions: defaultInteractions({
                    altShiftDragRotate: false,
                    doubleClickZoom: false,
                    keyboard: false,
                    shiftDragZoom: false,
                    pinchRotate: false,
                    pinchZoom: false
                }),
            });

            map.addControl(new ZoomToNativeControl({
                // fontawesome expand icon
                label: '\uf065'
            }));

            return map;
        },
        initLayersAndInteractions(map) {
            this.annotationFeatures = new Collection();

            this.annotationSource = new VectorSource({
                features: this.annotationFeatures,
            });

            this.annotationLayer = new VectorLayer({
                source: this.annotationSource,
                updateWhileAnimating: true,
                updateWhileInteracting: true,
                style: Styles.features,
                opacity: this.annotationOpacity,
                name: 'annotations',
            });

            this.selectInteraction = new SelectInteraction({
                condition: clickCondition,
                style: Styles.highlight,
                layers: [this.annotationLayer],
                multi: true,
            });

            this.selectedFeatures = this.selectInteraction.getFeatures();
            this.selectInteraction.on('select', this.handleFeatureSelect);

            map.addLayer(this.annotationLayer);
            map.addInteraction(this.selectInteraction);
        },

        emitCreateBookmark() {
            this.$emit('create-bookmark', this.video.currentTime);
        },
        resetInteractionMode() {
            this.interactionMode = 'default';
        },
        extractAnnotationFromFeature(feature) {
            return feature.get('annotation');
        },
        handleFeatureSelect(e) {
            this.$emit('select',
                e.selected.map(this.extractAnnotationFromFeature),
                e.deselected.map(this.extractAnnotationFromFeature),
                this.video.currentTime
            );
        },
        updateMousePosition(e) {
            this.mousePosition = e.coordinate;
        },
        emitTrack() {
            this.$emit('track');
        },
        emitMoveend(e) {
            let view = e.target.getView();
            this.$emit('moveend', view.getCenter(), view.getResolution());
        },
        initInitialCenterAndResolution(map) {
            let view = map.getView();
            if (this.initialResolution !==0) {
                view.setResolution(Math.min(view.getMaxResolution(), Math.max(view.getMinResolution(), this.initialResolution)));
            }

            if ((this.initialCenter[0] !== 0 || this.initialCenter[1] !== 0) && containsCoordinate(this.extent, this.initialCenter)) {
                view.setCenter(this.initialCenter);
            }
        },
        updateSize() {
            this.$nextTick(() => this.map.updateSize());
        },
    },
    watch: {
        selectedAnnotations(annotations) {
            let source = this.annotationSource;
            let features = this.selectedFeatures;
            if (source && features) {
                let feature;
                features.clear();
                annotations.forEach(function (annotation) {
                    feature = source.getFeatureById(annotation.id);
                    if (feature) {
                        features.push(feature);
                    }
                });
            }
        },
        isDefaultInteractionMode(isDefault) {
            this.selectInteraction.setActive(isDefault);
        },
        annotationOpacity(opactiy) {
            if (this.annotationLayer) {
                this.annotationLayer.setOpacity(opactiy);
            }
        },
        heightOffset() {
            this.updateSize();
        },
    },
    created() {
        this.$once('map-ready', this.initLayersAndInteractions);
        this.$once('map-ready', this.initInitialCenterAndResolution);
        this.map = this.createMap();
        this.$emit('map-created', this.map);
        this.map.on('pointermove', this.updateMousePosition);
        this.map.on('moveend', this.emitMoveend);

        Keyboard.on('Escape', this.resetInteractionMode, 0, this.listenerSet);

        // if (this.canAdd) {
        //     Keyboard.on('b', this.emitCreateBookmark);
        // }
    },
    mounted() {
        this.map.setTarget(this.$el);
    },
};
