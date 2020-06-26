import AnnotationClip from './annotationClip';

export default {
    template: `<div class="annotation-track">
        <div class="annotation-lane" v-for="lane in lanes">
            <annotation-clip v-for="annotation in lane"
                :key="annotation.id"
                :annotation="annotation"
                :element-width="elementWidth"
                :label="label"
                :duration="duration"
                @select="emitSelect"
                @deselect="emitDeselect"
                ></annotation-clip>
        </div>
    </div>`,
    components: {
        annotationClip: AnnotationClip,
    },
    props: {
        label: {
            type: Object,
            required: true,
        },
        lanes: {
            type: Array,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        elementWidth: {
            type: Number,
            required: true,
        },
    },
    methods: {
        emitSelect(annotation, time, shift) {
            this.$emit('select', annotation, time, shift);
        },
        emitDeselect(annotation) {
            this.$emit('deselect', annotation);
        },
    },
};
