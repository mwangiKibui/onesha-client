<template>    
    
        <!-- <card type="secondary" shadow header-classes="bg-grey pb-1" body-classes="px-lg-5 py-lg-5" class="border-0"> -->
            <!-- <template slot="header">
                <h5 class="text-default mt-3">Title</h5>
                <p class="text-default mt-3">description</p>
            </template> -->
        
            <tr>
                <td v-text="row.name"></td>
                <td v-text="row.description"></td>
                <td><a @click.prevent="toggleModal(row)" href="#">Open Job</a></td>
            </tr>
            <!-- <base-button type="primary" @click.prevent="moveToNext()" class="align-items-right">Proceed</base-button> -->
            <!-- <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template> -->
        <!-- </card> -->
    
</template>
<script>
import Vue from 'vue';
window.Event = new Vue();
import ProgressSection from "./JobProgress.vue";
export default {
  props: ['row'],
  components: {
    ProgressSection
  },
  data() {
      return {
          progressvalue: 0,
          error: null
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
      Event.$emit('toggleModal', row);
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
