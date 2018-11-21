<template>    
    <div class="col-lg-12 sectionDisplay" v-show="this.modalstate">
        <card type="secondary" shadow header-classes="bg-grey pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
            <template slot="header">
                <h5 class="text-default mt-3">{{jobcategory.category}}</h5>
                <p class="text-default mt-3">{{jobcategory.description}}</p>
            </template>
            
        
            <div class="text-left text-muted mb-4 sectionDisplay">
                <p>Jobs Types in {{jobcategory.category}}</p>
                <ol>
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
                                    <a class="btn btn-sm btn-primary btn-block text-white" @click="moveToNext()">{{job.title}}</a>
                                    <!-- <router-link class="btn btn-sm" href="" tag="a">{{job.title}}</router-link> -->
                                </p>
                            </div></p>
                        </div>                 
                    </li> 
                </ol>
            </div>
            <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button>
            <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue"  :striped=false :animated=true></base-progress>
            </template>
        </card>
    </div>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
export default {
  props: ['row','jobcategory','modalstate'],
  components: {
    ProgressSection
  },
  data() {
      return {
          progressvalue: 10,
          error: null
      }
  },
  methods: {
    moveToNext: function(e){
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
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
