<script>
import LabelTrees from '../../label-trees/components/labelTrees';
import LoaderMixin from '../../core/mixins/loader';
import PowerToggle from '../../core/components/powerToggle';

/**
 * View model for the volume filter tab
 */
export default {
    mixins: [LoaderMixin],
    components: {
        labelTrees: LabelTrees,
        powerToggle: PowerToggle,
    },
    props: {
        volumeId: {
            type: Number,
            required: true,
        },
        showLabels: {
            type: Boolean,
            default: false,
        },
        loadingLabels: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            labelTrees: [],
        };
    },
    methods: {
        handleSelectedLabel(label) {
            this.$emit('select', label);
        },
        handleDeselectedLabel(label) {
            this.$emit('deselect', label);
        },
        enableLabels() {
            this.$emit('enable-labels');
        },
        disableLabels() {
            this.$emit('disable-labels');
        },
    },
    created() {
        this.labelTrees = biigle.$require('volumes.labelTrees');
    },
};
</script>
