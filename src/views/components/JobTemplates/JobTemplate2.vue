<template>    
    
        <!-- <card type="secondary" shadow header-classes="bg-grey pb-1" body-classes="px-lg-5 py-lg-5" class="border-0"> -->
            <!-- <template slot="header">
                <h5 class="text-default mt-3">Title</h5>
                <p class="text-default mt-3">description</p>
            </template> -->
        
            <div>
                
                <p v-for="detail in jobDetail.jobs"><strong class="text-info">{{ detail.title }}</strong> <br>
                    <small><i>{{ detail.description }}</i></small><br>
                    <!-- {{detail.template}} -->
                    <!-- <jobmodal :modalstate="true" :jobcategory="detail.template"></jobmodal> -->
                </p>
                    
               
            </div>
            <!-- <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button> -->
            <!-- <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template> -->
        <!-- </card> -->
    
</template>
<script>
import Modal from "./JobModal.vue";
import ProgressSection from "./JobProgress.vue";
export default {
  props: ['row','itemid'],
  components: {
    'jobmodal': Modal
  },
  data() {
      return {
          progressvalue: 0,
          error: null,
          jobDetail: this.row
      }
  },
  methods: {
    moveToNext: function(e){
        if(this.progressvalue < 100){
            this.progressvalue += 10
        }
    },
    toggleModal(row) {
        console.log('clicked')
      //Event.$emit('toggleModal', row);
    }
  },
  mounted: function (){  
    // var el = this.$el.getElementsByClassName("sectionDisplay")[0];
    // el.scrollIntoView();
    }
};
</script>
<style>
</style>
