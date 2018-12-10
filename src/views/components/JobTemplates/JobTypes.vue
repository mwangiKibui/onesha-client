<template>
    <div class=" col-lg-offset-3 sectionDisplay" id="jobDisplay" v-show="this.modalstate">
        
        <card type="secondary" shadow header-classes="bg-grey pb-1" body-classes="px-lg-5 py-lg-5" class="border-0" id="defShow">
            
        
            <div class="text-left text-muted sectionDisplay" id="sectionDisplay">
                <p>Jobs Types in {{jobcategory.category}}</p>
                <div class="row row-grid mt-5" v-for="(detail, index) in jobcategory.jobtypes">
                            <div class="col-sm-6" v-for="job in detail.jobs">
                                <router-link tag="a" :to="{ path: '/job/'+job.slug }" append>
                                    <icon :v-if="jobcategory.slug === 'social-media'" name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                                    <!-- /<icon :v-else="jobcategory.slug === 'graphic-design'" name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon> -->
                                    <!-- <icon :v-else="jobcategory.slug === 'motion-graphics'" name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon> -->
                                    <p class="text-primary mt-3">{{ job.title }}</p>
                                </router-link>
                            </div>
                    <!-- <li  >
                            <p>
                                <strong class="text-info">
                                    <router-link tag="a" :to="{ path: '/job/'+job.slug }" append>{{ job.title }}
                                    </router-link></strong> <br>
                                <small><i>{{ job.template }}</i></small>
                                <jobsection :modalstate="true" :jobcategory="job.template"></jobsection> 
                            </p>
                    </li> -->
                </div>
                <!-- <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Modal</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table> -->
            </div>               
            <!-- <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button> -->
            <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template>
        </card>  
        
        <card :v-if="showModal"  v-for="(query, index) in allQueries">
            <jobmodal :key="index" :jobtype="query"/>
        </card>
    </div>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
import jobsection2 from "./JobTypes2.vue";
import jobmodal from "./JobModal.vue";

export default {
  props: ['jobcategory','modalstate'],
  components: {
    ProgressSection,
    'jobsection': jobsection2,
    'jobmodal' : jobmodal
  },
  data() {
      return {
          progressvalue: 0,
          error: null,
          showModal: false,
          modalstatus: this.modalstate ,
          jobdetails: [],
          allQueries: []
      }
  },
  methods: {
    moveToNext: function(job, id){
        this.jobdetails = job
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    toggleModal: function (ev,row) {
        console.log('clicked')
        console.log(row)
        this.showModal = true
        this.allQueries = row
        $("#jobDisplay").html(jobmodal)
    }
  },
  mounted: function (){  
    let el = this.$el.getElementsByClassName("sectionDisplay")[0]
    el.scrollIntoView()
    this.showModal = false
    this.jobdetails = this.jobcategory.jobtypes
    this.modalstatus = true
  }
};
console.log();
</script>
<style>
</style>
