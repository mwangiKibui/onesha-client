<template>
    <!-- Modals -->
    <div class="row row-grid mt-5">
        <div class="col-lg-4"  v-for="(category, index) in categories">
            <icon :name="category.avatar.path" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">{{category.category}}</h5>
            <p class="text-white mt-3">{{category.description}}</p><br>
            <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                        type="info"
                        icon="fa fa-cloud-download" @click="modalstater = true">
                Request A Service 
            </base-button> 
        </div>
        <jobmodal :jobcategory="category" :modalstate="modalstater"></jobmodal>
    </div>
</template>
<script>
import jobmodal from "./JobTemplate1.vue";
import SampleData from "@/assets/sample-template-data.js";
export default {
  components: {
    jobmodal
  },
  data() {
    return {
      categories: SampleData,
      error: null,
      modalstater: 0,
      jobcategory: [],
    }
  },
  mounted(){
      this.logDetails()
  },
  methods: {
    getData: function () {
      var self = this;
      var urlToData = "sample-template-data.json";
      $.getJSON(urlToData, function(err, data){
          
            if (err) {
                this.error = err.toString()
            } else{
                self.categories = data;
                console.log(data)
            }     
      })
    },
    popup: function(index) {
        this.index.modalstater = true
        console.log(this.modalstater)
    }
  }
}
</script>
<style>
</style>
