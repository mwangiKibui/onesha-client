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
            </div><br>
            <div class="col-md-2"></div>
            <div class="col-md-10 sectionDisplay mt-4" ref='sectionDisplay'>
                <!-- <jobmodal ></jobmodal>  -->
                <jobtypetemplate :jobcategory="jobcategory" :modalstate="modalstater"></jobtypetemplate>
            </div>
        
        </div>
    </div>
</template>
<script>
import jobtypetemplate from "./JobTypes.vue";
import SampleData from "@/assets/sample-template-data.js";
export default {
  components: {
    jobtypetemplate
  },
  data() {
    return {
      categories: SampleData,
      error: null,
      modalstater: false,
      showModal: false,
      jobcategory: []
    }
  },
  mounted: function (){  
    var el = this.$el.getElementsByClassName("sectionDisplay")[0];
    el.scrollIntoView()
    },
  methods: {
    getData: function () {
      var self = this;
      var urlToData = "sample-template-data.json";
      $.getJSON(urlToData, function(err, data){
          
            if (err) {
                this.error = err.toString()
            } else{
                self.categories = data
            }     
      })
    },
    render: function (createElement) {
      return createElement(jobtypetemplate)
    },
    popup: function(category, index) {
        this.modalstater = true
        this.jobcategory = category
        let el = this.$el.getElementsByClassName("sectionDisplay")[0]
        el.scrollIntoView();
    }
  }
}
</script>
<style>
</style>
