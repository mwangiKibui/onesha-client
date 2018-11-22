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
    <div class="modal" :class="{ 'is-active': toshow }">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="content">
              <h1 class="title">{{jobCategory}}</h1>
            </div>
          </div>
        </div>
        <button @click.prevent="active = false" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>
<script>
// import Modal from "@/components/Common/Modal.vue";
import ProgressSection from "./JobProgress.vue";
import Vue from 'vue';
window.Event = new Vue();
export default {
//   props: ['modalstate',
//     'jobtypedetails'
//   ],
  components: {
    ProgressSection,
    // Modal
  },
  data() {
    return {
        progressvalue: 0,
        jobCategory : [],
        toshow: true,
        modalstatus: false,
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
  created() {
    Event.$on('toggleModal', (row) => {
      this.jobCategory = row;
      this.show();
    });
  }
};
</script>
<style>
</style>
