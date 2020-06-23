import {Typeahead} from './import';

/**
 * The merge label trees index view.
 */
export default {
    components: {
        typeahead: Typeahead,
    },
    data: {
        mergeUrlTemplate: null,
        mergeCandidates: [],
        typeaheadTemplate: '<span v-text="item.name"></span><br><small v-text="item.description"></small>',
        chosenCandidate: null,
    },
    computed: {
        cannotContinue() {
            return this.chosenCandidate === null;
        },
        continueUrl() {
            if (this.chosenCandidate) {
                return this.mergeUrlTemplate.replace(':id', this.chosenCandidate.id);
            }

            return '';
        },
    },
    methods: {
        parseLabelTreeVersionedName(tree) {
            if (tree.version) {
                tree.name = tree.name + ' @ ' + tree.version.name;
            }

            return tree;
        },
        chooseCandidate(tree) {
            this.chosenCandidate = tree;
        },
    },
    created() {
        this.mergeUrlTemplate = biigle.$require('labelTrees.mergeUrlTemplate');
        this.mergeCandidates = biigle.$require('labelTrees.mergeCandidates')
            .map(this.parseLabelTreeVersionedName);
    },
};
