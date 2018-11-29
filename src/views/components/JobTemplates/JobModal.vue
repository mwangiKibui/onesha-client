<template>    
    <!-- <modal :show.sync="this.modalstate" :v-if="this.modalstate">
        
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
            <base-button type="primary" @click="moveToNextState()">Proceed</base-button>
            <base-button type="link" class="ml-auto" @click="close">Close
            </base-button>
        </template>
        
    </modal> -->
    <div class="" :class="{ 'is-active': toshow }">
              <p class="text">{{jobCategory.jobtypes[0].name}}
                 <ul>
                    <li v-for="job in jobCategory.jobtypes">
                        <a v-for="temp in job.temps">{{temp.query}}</a>
                    </li>
                </ul>


              </p>
    </div>
</template>
<script>
// import Modal from "@/components/Common/Modal.vue";
import ProgressSection from "./JobProgress.vue";
//import Vue from 'vue';
//window.Event = new Vue();
export default {
  props: ['modalstate','jobcategory'],
  components: {
    ProgressSection,
    // Modal
  },
  data() {
    return {
        progressvalue: 0,
        jobCategory : this.jobcategory,
        toshow: this.modalstate,
        modalstatus: this.modalstate,
        error: null
      }
  },
  methods: {
    moveToNextState: function(e){
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    close: function() {
        this.toshow = false
    },
    show() {
        this.toshow = true;
    }
  },
    render: function (createElement) {
      return createElement(jobtypetemplate)
    
      this.jobCategory = row;
      this.show();
    }
  
};
</script>
<style>
</style>
