<template>    
    <modal :show.sync="this.modalstate">
        {{this.jobcategory}}
        <div slot="header" class="modal-title" id="modal-title-default" style="width: 100%">
            <!-- <h6>{{ this.jobCategory.category }}</h6> -->
            <ProgressSection :progressval="progressvalue"></ProgressSection>
        </div>
        
        <!-- <div  v-for="jobtypes in this.jobCategory.jobtypes">                    
            <div :v-if="error" class="error">
            {{ error}}
            </div>
            <div :v-if="jobtypes">
                <p>{{ jobtypes }}</p>
            </div>                  
        </div> -->

        <template slot="footer">
            <base-button type="primary" @click="moveToNext()">Proceed</base-button>
            <base-button type="link" class="ml-auto" @click="this.modalstate = false">Close
            </base-button>
        </template>
        
    </modal>
</template>
<script>
import Modal from "@/components/Common/Modal.vue";
import ProgressSection from "./JobProgress.vue";

export default {
  props: ['modalstate','jobcategory'],
  components: {
    ProgressSection,
    Modal
  },
  mounted() {
      this.logDetails()
  },
  data() {
    return {
        progressvalue: 0
      }
  },
  methods: {
    moveToNext: function(e){
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    logDetails: function(){
        console.log(this.modalstate)
    }
  }
};
</script>
<style>
</style>
