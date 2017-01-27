/**
 * A component for a form to manually create a new label for a label tree
 *
 * @type {Object}
 */
biigle.$component('labelTrees.components.manualLabelForm', {
    props: {
        labels: {
            type: Array,
            required: true,
        },
        color: {
            type: String,
            default: '',
        },
        parent: {
            type: Object,
            default: null,
        },
        name: {
            type: String,
            default: '',
        },
    },
    components: {
        labelTypeahead: biigle.$require('labelTrees.components.labelTypeahead'),
    },
    computed: {
        selectedColor: {
            get: function () {
                return this.color;
            },
            set: function (color) {
                this.$emit('color', color);
            }
        },
        selectedName: {
            get: function () {
                return this.name;
            },
            set: function (name) {
                this.$emit('name', name);
            }
        },
        selectedParent: function () {
            return this.parent ? this.parent.name : '';
        },
        hasNoLabels: function () {
            return this.labels.length === 0;
        },
        hasNoParent: function () {
            return !this.parent;
        },
        hasNoName: function () {
            return !this.name;
        }
    },
    methods: {
        refreshColor: function () {
            this.selectedColor = biigle.$require('labelTrees.randomColor')();
        },
        resetParent: function () {
            this.$emit('parent', null);
        },
        selectLabel: function (label) {
            this.$emit('parent', label);
        },
        submit: function () {
            this.$emit('submit');
        }
    },
});
