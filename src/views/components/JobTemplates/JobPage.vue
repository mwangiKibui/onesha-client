<template>
  <section class="section section-lg section-shaped overflow-hidden my-0">
    <div class="shape shape-style-1 shape-default shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container py-0 pb-lg" v-if="job.slug">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h1 class="text-white font-weight-light">{{ this.job.title}}</h1>
          <p class="lead text-white mt-4">{{ this.job.description}}.</p>
          <a href="#jobForm" @click="loadJobTemplates(jobtype)" data-toggle="scroll" class="btn btn-white mt-4">Fill in form</a>
        </div>
        <div class="col-lg-6 mb-lg-auto">
          <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
            <b-carousel id="carousel1" controls indicators>
              <!-- Text slides with image -->
              <b-carousel-slide img-src="/assets/img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="/assets/img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      
    </div>
    <div class="container pt-lg-md" id="jobForm" v-if="job.slug">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <h4 class="text-muted text-center mb-3">
                <small>Job Title form</small>
              </h4>
            </template>
            <job-form></job-form>
          </card>
        </div>
      </div>
    </div>
    <div class="container justify-content-between align-items-center" v-if="!job.slug">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h1 class="text-white font-weight-light">Job was not found</h1>
          <p class="lead text-white mt-4">Description was not found. Check the url and try again.</p>
          <a href="#jobForm" @click="loadJobTemplates(jobtype)" data-toggle="scroll" class="btn btn-white mt-4">Fill in form</a>
        </div>
    </div>
  </section>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";
import JobForm from "./JobForm.vue";
import Axios from "axios";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    JobForm
  },
  props: {
    slug: String
  },
  data() {
    return {
      job: {},
      templateModal: false,
      jobtype: null,
      templateIndex: 1,
      templatedata: {},
      template: {},
      progress: 0,
      filledindata: {}
    };    
  },
  /**
   * On template mount, execute defined action below.
   *
   * Fetch all defined job types, grouped with their categories from database, and populate returned data as categories.
   */
  created(){
    this.fetchJobDetails()
  },
  methods: {
    fetchJobDetails() {
      Axios.get("/api/data/jobtype/" + this.slug).then(
        res => {
          console.log(res.data)
          return (this.job = res.data.length ? res.data[0] : {})
        }
      );
    },
    /**
     * Load templates from database for specified job type.
     *
     * Returns an array of template questions.
     */
    async loadJobTemplates(jobtitle) {
      Object.keys(this.filledindata).forEach(
        entry => delete this.filledindata[entry]
      );
      this.templateModal = true;
      this.job = jobtitle;
      this.progress = 0;

      // do async loading of job templates
      // const jobTemplate = await Axios.get(
      //   "/api/data/templates/" + this.job.slug
      // ).then(res => res.data);

      this.templatedata = jobTemplate.length ? jobTemplate[0].templates : [];
      this.templateIndex = 0;
      this.template = this.templatedata[0];
    }
  }
};
</script>
<style>
</style>