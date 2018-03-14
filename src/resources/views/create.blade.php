@extends('app')

@section('title', 'Create new volume')

@section('content')
<div class="container">
   <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
      <h2>New volume for {{ $project->name }}</h2>
      <form id="create-volume-form" class="clearfix" role="form" method="POST" action="{{ url('api/v1/projects/'.$project->id.'/volumes') }}" v-on:submit="startLoading">
         <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
            <label for="name">Volume name</label>
            <input type="text" class="form-control" name="name" id="name" value="{{ old('name') }}" placeholder="My new volume" required>
            @if($errors->has('name'))
               <span class="help-block">{{ $errors->first('name') }}</span>
            @endif
         </div>

         <div class="form-group{{ $errors->has('url') ? ' has-error' : '' }}">
            <label for="url">Volume url</label>
            <input type="text" class="form-control" name="url" id="url" placeholder="local://images/volume" required value="{{old('url')}}">
            <p class="help-block">
               The directory containing the volume images. Can be a storage disk like <code>local://images/volume</code> or <a href="{{route('manual-tutorials', ['volumes', 'remote-volumes'])}}">remote</a> like <code>https://my-domain.tld/volume</code>.
            </p>
            @if($errors->has('url'))
               <span class="help-block">{{ $errors->first('url') }}</span>
            @endif
         </div>
         <div class="panel panel-warning">
            <div class="panel-body text-warning">
                Please <a href="mailto:{{config('biigle.admin_email')}}">contact the admins</a> if you want to create a new volume that is not a remote volume.
            </div>
        </div>


         <div class="row">
             <div class="form-group col-sm-6{{ $errors->has('media_type_id') ? ' has-error' : '' }}">
                <label for="media_type_id">Volume media type</label>
                <select class="form-control" name="media_type_id" id="media_type_id" required>
                   @foreach($mediaTypes as $mediaType)
                      <option{!! old('media_type_id') == $mediaType->id ? ' selected="selected"' : '' !!} value="{{ $mediaType->id }}">{{ trans('biigle.media_types.'.$mediaType->name) }}</option>
                   @endforeach
                </select>
                @if($errors->has('media_type_id'))
                   <span class="help-block">{{ $errors->first('media_type_id') }}</span>
                @endif
             </div>
             <div class="form-group col-sm-6{{ $errors->has('doi') ? ' has-error' : '' }}">
                <label for="doi">DOI</label>
                <input type="text" class="form-control" name="doi" id="doi" value="{{ old('doi') }}" placeholder="10.1000/xyz123">
                @if($errors->has('doi'))
                    <span class="help-block">{{ $errors->first('doi') }}</span>
                @endif
            </div>
            <div class="form-group col-sm-6{{ $errors->has('video_link') ? ' has-error' : '' }}">
                <label for="video_link">Video link</label>
                <input type="text" class="form-control" name="video_link" id="video_link" value="{{ old('video_link') }}" placeholder="http://video.example.com">
                @if($errors->has('video_link'))
                    <span class="help-block">{{ $errors->first('video_link') }}</span>
                @endif
            </div>
            <div class="form-group col-sm-6{{ $errors->has('gis_link') ? ' has-error' : '' }}">
                <label for="gis_link">GIS link</label>
                <input type="text" class="form-control" name="gis_link" id="gis_link" value="{{ old('gis_link') }}" placeholder="http://gis.example.com">
                @if($errors->has('gis_link'))
                    <span class="help-block">{{ $errors->first('gis_link') }}</span>
                @endif
            </div>
        </div>

         <div class="form-group{{ $errors->has('images') ? ' has-error' : '' }}">
            <label for="images">Volume images</label>
            <textarea class="form-control" name="images" id="images" placeholder="1.jpg, 2.jpg, 3.jpg" required v-model="filenames"></textarea>
            <p class="help-block">
               The filenames of the volume images in the directory of the volume URL formatted as comma separated values. Example: <code>1.jpg, 2.jpg, 3.jpg</code>. The supported image file formats are: JPEG, PNG and TIFF.
            </p>
            <div v-if="showFilenameWarning" v-cloak class="panel panel-warning">
                <div class="panel-body text-warning">
                    Most browsers do not support the TIFF format. Only use it for very large images with more than {{config('image.tiles.threshold')}} pixels at one edge, as these will be automatically converted by BIIGLE.
                </div>
            </div>
            @if($errors->has('images'))
               <span class="help-block">{{ $errors->first('images') }}</span>
            @endif
         </div>

         <input type="hidden" name="_token" value="{{ csrf_token() }}">
         <input type="hidden" name="_redirect" value="{{ url('projects/'.$project->id) }}">
         <a href="{{ URL::previous() }}" class="btn btn-link" :disabled="loading">Cancel</a>
         <input type="submit" class="btn btn-success pull-right" value="Create" :disabled="loading">
      </form>
   </div>
</div>
@endsection

@push('scripts')
    <script type="text/javascript">
        biigle.$viewModel('create-volume-form', function (element) {
            new Vue({
                el: element,
                mixins: [biigle.$require('core.mixins.loader')],
                data: {
                    filenames: '{!! old('images') !!}',
                },
                computed: {
                    showFilenameWarning: function () {
                        return this.filenames.includes('.tif');
                    },
                },
            });
        });
    </script>
@endpush
