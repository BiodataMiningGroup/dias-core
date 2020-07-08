<div id="projects-label-trees" class="panel panel-default" :class="classObject">
    <div class="panel-heading">
        Label Trees
        @can('update', $project)
            <span class="pull-right">
                <loader :active="loading"></loader>
                @if(Route::has('label-trees'))
                    <a href="{{route('label-trees-create', ['project' => $project->id])}}" class="btn btn-default btn-xs" title="Create label tree" ><span class="fa fa-plus" aria-hidden="true"></span></a>
                @endif
                <button class="btn btn-default btn-xs" title="Attach/detach label trees" v-on:click="toggleEditing" :class="{active: editing}"><span class="fa fa-pencil-alt" aria-hidden="true"></span></button>
            </span>
        @endcan
    </div>
    @can('update', $project)
        <div v-if="editing" v-cloak class="panel-body">
            <form>
                <div class="form-group">
                    <label>Label tree to attach</label>
                    <typeahead class="typeahead--block" :items="attachableLabelTrees" placeholder="Label tree name" :disabled="loading" v-on:select="attachTree" :clear-on-select="true" :template="typeaheadTemplate" title="Attach a new label tree"></typeahead>
                </div>
            </form>
        </div>
    @endcan
    <ul class="list-group list-group-restricted">
        @can('update', $project)
            <li v-cloak class="list-group-item" v-for="tree in labelTrees">
                <button v-if="editing" type="button" class="close" aria-label="Close" title="Detach this tree" v-on:click="removeTree(tree)"><span aria-hidden="true">&times;</span></button>
                @if(Route::has('label-trees'))
                    <a :href="'{{route('label-trees', '')}}/' + tree.id" v-text="tree.name"></a>
                @else
                    <span v-text="tree.name"></span>
                @endif
                <span v-if="tree.description">
                    <br><small v-text="tree.description"></small>
                </span>
            </li>
            <li v-if="hasNoLabelTrees" v-cloak class="list-group-item">This project uses no label trees</li>
        @else
            @forelse ($labelTrees as $tree)
                <li class="list-group-item">
                    @if(Route::has('label-trees'))
                        <a href="{{route('label-trees', $tree->id)}}">{{$tree->versionedName}}</a>
                    @else
                        {{$tree->versionedName}}
                    @endif
                    @if ($tree->description)
                        <br><small>{{$tree->description}}</small>
                    @endif
                </li>
            @empty
                <li class="list-group-item">This project uses no label trees</li>
            @endforelse
        @endcan
    </ul>
</div>