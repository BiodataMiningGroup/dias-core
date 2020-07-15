@extends('app')
@section('full-navbar', true)
@section('title', $video->name)

@section('navbar')
<div class="navbar-text navbar-annotations-breadcrumbs">
    <a href="{{route('project', $video->project_id)}}" class="navbar-link" title="Show project {{$video->project->name}}">{{$video->project->name}}</a> /
    <strong>{{$video->name}}</strong>
    @if ($video->doi)
        <a href="https://doi.org/{{$video->doi}}" class="btn btn-default btn-xs" title="DOI: {{$video->doi}}"><span class="fa fa-link" aria-hidden="true" ></span></a>
    @endif
</div>
@endsection

@section('content')
<div
    id="video-container"
    class="video-container sidebar-container"
    v-bind:class="classObject"
    >
    <div
        class="sidebar-container__content"
        v-on:mousemove="updateTimelineHeight"
        v-on:mouseleave="finishUpdateTimelineHeight"
        v-on:mouseup="finishUpdateTimelineHeight"
        >
        @include('videos.show.content')
    </div>
    <sidebar
        v-cloak
        ref="sidebar"
        :toggle-on-keyboard="true"
        :open-tab="openTab"
        v-on:open="handleOpenedTab"
        v-on:close="handleClosedTab"
        v-on:toggle="handleToggledTab"
        >
            @include('videos.show.sidebar-annotations')
            @can('edit-in', $video)
                @include('videos.show.sidebar-labels')
            @endcan
            @mixin('videosSidebar')
            @include('videos.show.sidebar-settings')
            @can('update', $video)
                @include('videos.show.sidebar-edit')
            @endcan
    </sidebar>
</div>
@endsection

@push('scripts')
<script type="text/javascript">
    biigle.$declare('videos.id', '{{$video->id}}');
    biigle.$declare('videos.src', '{{url('api/v1/videos/'.$video->id.'/file')}}');
    @can('editIn', $video)
        biigle.$declare('videos.labelTrees', {!! $labelTrees !!});
    @endcan
    biigle.$declare('videos.shapes', {!! $shapes !!});
    biigle.$declare('videos.isEditor', @can('editIn', $video) true @else false @endcan);
</script>
@endpush