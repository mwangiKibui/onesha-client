<template>    
    <div :show.sync="this.modalstate" :v-if="this.modalstate">
        
        <div slot="header" class="modal-title" id="modal-title-default" style="width: 100%">
            <h6>{{ jobtype.title }}</h6>
            <ProgressSection :progressval="progressvalue"></ProgressSection>
        </div>
        
        <div v-for="jobquery in jobQueries">                    
            <div :v-if="error" class="error">
                {{ error}}
            </div>
            <div :v-if="jobquery">
                <p>{{ jobquery.title }}</p>
                <ul>
                    <li v-for="queryoption in jobquery.options">
                        <small>{{queryoption.option}}</small> 
                    </li>
                </ul>
            </div>                  
        </div> 

        <template slot="footer">
            <base-button type="primary" @click="moveToNextState()">Proceed</base-button>
            <base-button type="link" class="ml-auto" @click="close">Close
            </base-button>
        </template>
        
    </div>
</template>
<script>
import Modal from "@/components/Common/Modal.vue";
import ProgressSection from "./JobProgress.vue";

export default {
  props: ['modalstate','jobtype'],
  components: {
    ProgressSection,
    Modal
  },
  data() {
    return {
        progressvalue: 0,
        jobQueries : this.jobtype.template,
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
        this.toshow = true
    }
  },
    render: function (createElement) {
      return createElement(jobquerytemplate)
    
      this.jobDetails = this.jobtype.template
      this.show()
    }
  
};
</script>
<style>
</style>