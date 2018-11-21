<template>    
    <modal :show.sync="modalstatus" :v-if="modalstatus">
        
        <div slot="header" class="modal-title" id="modal-title-default" style="width: 100%">
            <h6>{{ jobCategory.category }}</h6>
            <ProgressSection :progressval="progressvalue"></ProgressSection>
        </div>
        
        <div  v-for="jobtype in jobCategory.jobtypes">                    
            <div :v-if="error" class="error">
            {{ error}}
            </div>
            <div :v-if="jobtypes">
                <p>{{ jobtypes.title }}</p>
                <small>{{ jobtypes.description }}</small>
                <ul>
                    <li v-for="job in jobtype.jobs">
                        <router-link class="btn btn-sm" href="" tag="a">job.title</router-link>
                    </li>
                </ul>
            </div>                  
        </div> 

        <template slot="footer">
            <base-button type="primary" @click="moveToNext()">Proceed</base-button>
            <base-button type="link" class="ml-auto" @click="close">Close
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
  },
  data() {
    return {
        progressvalue: 0,
        jobCategory : this.jobcategory,
        show: false,
        modalstatus: this.modalstate,
        error: null
      }
  },
  methods: {
    moveToNext: function(e){
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    close: function() {
        this.show = false
    }
  },
  created() {
      console.log(this.modalstatus)
  }
};
</script>
<style>
</style>
