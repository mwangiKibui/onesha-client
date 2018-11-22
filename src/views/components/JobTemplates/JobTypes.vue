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
                        <tr><td>1</td><td>This type</td><td><a @click.prevent="toggleModal(jobcategory)" href="#">Open</a></td></tr>
                        <company-modal></company-modal>
                        <jobsection v-for="job in alljobs" :key="job.slug" :comp="job"></jobsection>
                    </tbody>
                    
                </table>
            </div>               
            <!-- <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button> -->
            <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template>
        </card>
        </div>    
    </div>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
import Vue from 'vue';
window.Event = new Vue();
import jobsection from "./JobTemplate2.vue";
const jobs = [
            { id: 1, name: 'Company 1', jobtypes: [{ id: 1, name: 'Type Alpha',temps: [{ id: 1, query: 'Who is Type Alpha'}]}]},
            { id: 2, name: 'Company 2', jobtypes: [{ id: 1, name: 'Type Beta',temps: [{ id: 1, query: 'Who is Type Beta'}]}]},
            { id: 3, name: 'Company 3', jobtypes: [{ id: 1, name: 'Type Charlie',temps: [{ id: 1, query: 'Who is Type Charlie'}]}]},
            { id: 4, name: 'Company 4', jobtypes: [{ id: 1, name: 'Type Delta',temps: [{ id: 1, query: 'Who is Type Delta'}]}]},
            ];
const Jobsection = {
    template: `<tr>
      <td>Jobtypes in {{comp.name}}</td
      <td>
        <ol>
            <department v-for="jobtype in this.comp.jobtypes" :key="jobtype.id" :jobrow="jobtype">
        </department>  
         </ol>
          
      </td>
      <td>Next page</td>
    </tr>`,
    props: ['comp'],
    mounted() {
        console.log('here')
    }
}
const JobDescription = {
    template: `<li>
      <p> {{ jobrow.name }} - 
      <a @click.prevent="toggleModal(jobrow)" href="#">Open Job</a></p>
    </li>`,
    props: ['jobrow'],
    methods: {
        toggleModal(jobrow) {
        Event.$emit('toggleModal', jobrow);
        }
    }
}
const Modal = {
  template: `
    <div class="section" :class="{ 'is-active': toshow }">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="content">
              <h1 class="title">{{jobCategory}} here it is</h1>
            </div>
          </div>
        </div>
        <button @click.prevent="toshow = false" class="modal-close is-large" aria-label="close"></button>
    </div>
  `,
  data() {
    return {
      toshow: true,
      jobCategory: [],
    }
  },
  methods: {
    show() {
      this.toshow = true;
    }
  },
  created() {
    Event.$on('toggleModal', (row) => {
      this.jobCategory = row.temps;
      this.show();
    });
  }
};

Vue.component('jobsection', Jobsection);
Vue.component('department', JobDescription);
Vue.component('company-modal', Modal);


export default {
  props: ['jobcategory','modalstate'],
  components: {
    ProgressSection,
    'jobsection': Jobsection,
    'department': JobDescription,
    'company-modal': Modal
  },
  data() {
      return {
          progressvalue: 0,
          error: null,
          modalstatus: false,
          jobdetails: [],
          alljobs: [
            { id: 1, name: 'Company 1', jobtypes: [{ id: 1, name: 'Type Alpha',temps: [{ id: 1, query: 'Who is Type Alpha'}]}]},
            { id: 2, name: 'Company 2', jobtypes: [{ id: 1, name: 'Type Beta',temps: [{ id: 1, query: 'Who is Type Beta'}]}]},
            { id: 3, name: 'Company 3', jobtypes: [{ id: 1, name: 'Type Charlie',temps: [{ id: 1, query: 'Who is Type Charlie'}]}]},
            { id: 4, name: 'Company 4', jobtypes: [{ id: 1, name: 'Type Delta',temps: [{ id: 1, query: 'Who is Type Delta'}]}]},
            ]
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
        Event.$emit('toggleModal', row);
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
