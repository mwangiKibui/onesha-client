<template>
  <div class="sectionDisplay" id="jobDisplay" v-show="this.modalstate">
    <!-- <card type="secondary" class="border-0" id="defShow"> -->
    <div class="text-left text-muted sectionDisplay" id="sectionDisplay">
      <div
        class="mt-5 text-left"
        style="display: grid; grid-template-columns: repeat(4, 25%); grid-gap: 18px;"
      >
        <div class="mb-4 card shadow-sm" v-for="(job, index) in jobtypes" :key="index">
          <!-- <span v-for="job in job.title" class="py-5" :key="job.slug"> -->
          <router-link tag="a" :to="{ path: '/job/'+job.slug }" append>
            <div class="d-flex flex-column align-items-center">
              <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
              <span class="ml-2">{{ job.title }}</span>
            </div>
            <p class="text-primary mt-3">{{ job.description }}</p>
          </router-link>
          <!-- </span> -->
        </div>
      </div>
    </div>
    <!-- </card> -->
    <!-- <card :v-if="showModal" v-for="(query, index) in allQueries" :key="index">
      <jobmodal :key="index" :jobtype="query"/>
    </card>-->
  </div>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
import jobsection2 from "./JobTypes2.vue";
import jobmodal from "./JobModal.vue";

export default {
  props: {
    jobtypes: Array,
    modalstate: Boolean
  },
  components: {
    ProgressSection,
    jobsection: jobsection2,
    jobmodal: jobmodal
  },
  data() {
    return {
      progressvalue: 0,
      error: null,
      showModal: false,
      modalstatus: this.modalstate,
      jobdetails: [],
      allQueries: []
    };
  },
  methods: {
    moveToNext: function(job, id) {
      this.jobdetails = job;
      if (this.progressvalue < 100) {
        this.progressvalue += 10;
      }
    },
    toggleModal: function(ev, row) {
      this.showModal = true;
      this.allQueries = row;
      $("#jobDisplay").html(jobmodal);
    }
  }
};
</script>
<style>
</style>
