<template>
  <!-- Modals -->
  <div>
    <div class="row row-grid mt-5">
      <div class="col-lg-4" v-for="(category, index) in categories" :key="index">
        <icon :name="category.avatar.path" size="lg" gradient="white" shadow round color="primary"></icon>
        <h5 class="text-white mt-3">{{category.title}}</h5>
        <p class="text-white mt-3">{{category.description}}</p>
        <br>
        <base-button
          class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
          type="info"
          icon="fa fa-cloud-download"
          @click.prevent="requestCategoryJobTypes(category.slug)"
        >Request A Service</base-button>
      </div>
      <br>
      <div class="col-md-2"></div>
      <div class="col-md-12 sectionDisplay mt-4" ref="sectionDisplay">
        <!-- <jobmodal ></jobmodal>  -->
        <div v-if="jobtypes != null">
          <CategoryJobTypes :jobtypes="jobtypes" :modalstate="modalstater"></CategoryJobTypes>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryJobTypes from "./JobTypes.vue";
import Axios from "axios";
export default {
  components: {
    CategoryJobTypes
  },
  props: {
    categories: Array
  },
  data() {
    return {
      error: null,
      modalstater: false,
      showModal: false,
      jobtypes: null
    };
  },
  methods: {
    render: function(createElement) {
      return createElement(CategoryJobTypes);
    },
    popup: function(category, index) {
      this.modalstater = true;
      this.jobcategory = category;
      let el = this.$el.getElementsByClassName("sectionDisplay")[0];
      // el.scrollIntoView();
    },

    /**
     * Retrieve job types for the passed category
     *
     * @param {string} categorySlug - slug of the category clicked.
     */
    async requestCategoryJobTypes(categorySlug) {
      // show prgress loader here
      const jobTypes = await Axios.get(
        "/api/data/jobtype/" + categorySlug
      ).then(res => {
        // hide progress loader here
        return res.data;
      });

      this.jobtypes = jobTypes;
      this.modalstater = true;
    }
  }
};
</script>
<style>
</style>
