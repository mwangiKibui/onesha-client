<template>
  <!-- Modals -->
  <div>
    <span class="progressloader"></span>
    <div class="row mt-5 justify-content-center" style="text-align: center;">
      <div class="col-lg-4 col-sm-6" v-for="(category, index) in categories" :key="index">
        <router-link :to="`/categories/${category.slug}`" class="m-2">
          <div class="category">
            <icon
              :name="category.avatar.file"
              gradient="white"
              size="lg"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">{{category.title}}</h5>
            <p class="text-white mt-3">{{category.description}}</p>
            <br>
            <!-- <base-button
          class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
          type="info"
          icon="fa fa-cloud-download"
          @click.prevent="requestCategoryJobTypes(category.slug)"
            >Request A Service</base-button>-->
          </div>
        </router-link>
      </div>
      <!-- <br> -->
      <!-- <div class="col-md-2"></div> -->
      <!-- <div class="col-md-12 sectionDisplay mt-4" ref="sectionDisplay">
        <jobmodal ></jobmodal> 
        <div v-if="jobtypes != null">
          <CategoryJobTypes :jobtypes="jobtypes" :modalstate="modalstater"></CategoryJobTypes>
        </div>
      </div>-->
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
    requestCategoryJobTypes(categorySlug) {
      // show progress indicator here
     Axios.get("/api/data/jobtype/" + categorySlug).then(res => this.jobtypes = res.data);
      this.modalstater = true;
    }
  }
};
</script>
<style>
.category {
  transition: 1s;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  max-height: 240px;
  overflow: hidden;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.4);
}
.category:hover {
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0px 2px 25px 2px rgba(0, 0, 0, 0.4);
}
</style>
