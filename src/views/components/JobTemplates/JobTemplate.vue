<template>
    <!-- Modals -->
    <div>
        <div class="row row-grid mt-5">
            <div class="col-lg-4"  v-for="(category, index) in categories">
                <icon :name="category.avatar.path" size="lg" gradient="white" shadow round color="primary"></icon>
                <h5 class="text-white mt-3">{{category.category}}</h5>
                <p class="text-white mt-3">{{category.description}}</p><br>
                <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                            type="info"
                            icon="fa fa-cloud-download" @click.prevent="popup(category,index)">
                    Request A Service 
                </base-button>             
            </div>
        </div><br>
        <div class="row sectionDisplay" ref='sectionDisplay'>
            <jobmodal :jobcategory="jobcategory" :modalstate="modalstater" :row="rownum"></jobmodal>
        </div>
    </div>
</template>
<script>
import jobmodal from "./JobModal.vue";
import SampleData from "@/assets/sample-template-data.js";
export default {
  components: {
    jobmodal
  },
  data() {
    return {
      categories: SampleData,
      error: null,
      modalstater: false,
      jobcategory: [],
      rownum: 0
    }
  },
  mounted(){
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
    popup: function(category, index) {
        this.modalstater = true
        this.jobcategory = category
    }
  }
}
</script>
<style>
</style>
