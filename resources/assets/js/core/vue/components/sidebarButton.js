/**
 * A button to open or switch a tab in a sidebar
 *
 * @type {Object}
 */
biigle.$component('core.components.sidebarButton', {
    template: '<a :href="href" :disabled="disabled" class="sidebar__button btn btn-default btn-lg" :class="classObject" @click="toggle" :title="tab.title">' +
        '<span v-if="open" class="glyphicon" :class="chevronClass" aria-hidden="true"></span>' +
        '<span v-else class="glyphicon" :class="iconClass" aria-hidden="true"></span>' +
    '</a>',
    props: {
        tab: {
            type: Object,
            required: true
        },
        direction: {
            type: String,
            default: 'right',
            validator: function (value) {
                return value === 'left' || value === 'right';
            },
        },
    },
    computed: {
        iconClass: function () {
            return 'glyphicon-' + this.tab.icon;
        },
        chevronClass: function () {
            return 'glyphicon-chevron-' + this.direction;
        },
        classObject: function () {
            return {
                active: this.open,
                'btn-info': this.tab.highlight,
            };
        },
        disabled: function () {
            return this.tab.disabled;
        },
        href: function () {
            return this.disabled ? null : this.tab.href;
        },
        open: function () {
            return this.tab.open;
        },
    },
    methods: {
        toggle: function (e) {
            if (this.disabled || this.href) return;

            e.preventDefault();
            if (this.open) {
                this.$parent.$emit('close');
            } else {
                this.$parent.$emit('open', this.tab.name);
            }
        }
    },
});