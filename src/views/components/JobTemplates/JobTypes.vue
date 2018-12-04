<template>
    <div class="col-lg-12 sectionDisplay" v-show="this.modalstate">
        
        <card type="secondary" shadow header-classes="bg-grey pb-1" body-classes="px-lg-5 py-lg-5" class="border-0">
            <template slot="header" class="text-center">
                <h5 class="text-default mt-3">{{jobcategory.category}}</h5>
                <p class="text-default mt-3">{{jobcategory.description}}</p>
            </template>
        
            <div class="text-left text-muted sectionDisplay" id="sectionDisplay">
                <p>Jobs Types in {{jobcategory.category}}</p>
                <!-- <ol>
                    <li v-for="jobtype in this.jobcategory.jobtypes">                    
                        <div :v-if="error" class="error">
                            {{ error}}
                        </div>
                        <div :v-if="jobtype">
                            <p><img src="@/assets/logo.png" style="height: 30px"/>
                            &nbsp;&nbsp; {{ jobtype.title }}<br>
                            <small>{{ jobtype.description }}</small>
                            <div class="row row-grid">
                                <p v-for="job in jobtype.jobs" class="col-md-4">
                                    <a class="btn btn-sm btn-primary btn-block text-white" @click="moveToNext(job,job.slug)">{{job.title}}</a>
                                </p>
                            </div></p>
                        </div> 
                        <jobmodal :id="jobtype.slug" :jobtypedetails="jobdetails" :modalstate="modalstatus"></jobmodal>                 
                    </li> 
                </ol> -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Modal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(job, index) in alljobs.jobtypes" :key="index" :row="job">
                            <td>{{ job.title }}</td>
                            <td><jobsection :row="job.jobs"></jobsection></td>
                            <td><a @click.prevent="toggleModal(row)" href="#">Open Job</a></td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>               
            <!-- <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button> -->
            <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template>
        </card>   
    </div>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
import jobsection2 from "./JobTemplate2.vue";
import Modal from "./JobModal.vue";
// import Vue from 'vue';
// window.Event = new Vue();


export default {
  props: ['jobcategory','modalstate'],
  components: {
    ProgressSection,
    'jobsection': jobsection2,
    'jobmodal': Modal
  },
  data() {
      return {
          progressvalue: 0,
          error: null,
          modalstatus: false,
          jobdetails: [],
          alljobs: this.jobcategory
      }
  },
  methods: {
    moveToNext: function(job, id){
        this.jobdetails = job
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    toggleModal(row) {
        console.log('clicked')
        this.modalstatus = true
        // Event.$emit('toggleModal', row);
    }
  },
  mounted: function (){  
    var el = this.$el.getElementsByClassName("sectionDisplay")[0];
    el.scrollIntoView();
  }
};
console.log();
</script>
<style>
</style>
