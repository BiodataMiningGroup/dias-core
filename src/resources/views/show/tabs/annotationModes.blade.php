<sidebar-tab name="annotation-modes" icon="th" title="Annotation modes" :highlight="!isDefaultAnnotationMode">
    <annotation-modes-tab v-on:attach-label="handleAttachAllSelected" v-on:change="handleAnnotationModeChange" v-on:create-sample="createSampledAnnotation" inline-template>
        <div class="annotator-tab annotator-tab--annotation-modes">
            <div class="sidebar-tab__section">
                <h5 title="Cycle through all annotations">Volume Label Review<br><small>cycle through annotations</small></h5>
                <power-button :active="isVolareActive" title-off="Start cycling through all annotations" title-on="Stop cycling through all annotations 𝗘𝘀𝗰" v-on:on="startVolare" v-on:off="resetMode"></power-button>
                @can('add-annotation', $image)
                    <button class="btn btn-default" :disabled="!isVolareActive" v-on:click="emitAttachLabel" title="Attach the current h5 to the selected annotation 𝗘𝗻𝘁𝗲𝗿"><span class="fa fa-plus" aria-hidden="true"></span></button>
                @endcan
            </div>

            <div class="sidebar-tab__section">
                <h5 title="Cycle through image sections">Lawnmower Mode<br><small>cycle through image sections</small></h5>
                <power-button :active="isLawnmowerActive" title-off="Start cycling through image sections" title-on="Stop cycling through image sections 𝗘𝘀𝗰" v-on:on="startLawnmower" v-on:off="resetMode"></power-button>
            </div>
            @can('add-annotation', $image)
                <div class="sidebar-tab__section">
                    <h5 title="Randomly sample annotations">Random Sampling<br><small>randomly sample annotations</small></h5>
                    <power-button :active="isRandomSamplingActive" title-off="Start random sampling of annotations" title-on="Stop random sampling of annotations 𝗘𝘀𝗰" v-on:on="startRandomSampling" v-on:off="resetMode"></power-button>
                    <button class="btn btn-default" :disabled="!isRandomSamplingActive" v-on:click="emitCreateSample" title="Create a new annotation at the current location 𝗘𝗻𝘁𝗲𝗿"><span class="fa fa-plus" aria-hidden="true"></span></button>
                    <input type="number" class="form-control form-control--small" min="1" step="1" title="Number of random samples per image" v-model="randomSamplingNumber" v-bind:disabled="isRandomSamplingActive">
                </div>

                <div class="sidebar-tab__section">
                    <h5 title="Regularly sample annotations">Regular Sampling<br><small>regularly sample annotations</small></h5>
                    <power-button :active="isRegularSamplingActive" title-off="Start regular sampling of annotations" title-on="Stop regular sampling of annotations 𝗘𝘀𝗰" v-on:on="startRegularSampling" v-on:off="resetMode"></power-button>
                    <button class="btn btn-default" :disabled="!isRegularSamplingActive" v-on:click="emitCreateSample" title="Create a new annotation at the current location 𝗘𝗻𝘁𝗲𝗿"><span class="fa fa-plus" aria-hidden="true"></span></button>
                    <input type="number" class="form-control form-control--small" min="1" step="1" title="Number of regular sample rows per image" v-model="regularSamplingRows" v-bind:disabled="isRegularSamplingActive">
                    &times;
                    <input type="number" class="form-control form-control--small" min="1" step="1" title="Number of regular sample columns per image" v-model="regularSamplingColumns" v-bind:disabled="isRegularSamplingActive">
                </div>
            @endcan
        </div>
    </annotation-modes-tab>
</sidebar-tab>
