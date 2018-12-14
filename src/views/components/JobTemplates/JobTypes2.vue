<template>
  <span class="text-default">
    <ul>
      <li v-for="job in jobDetails">
        <a>{{job.title}}</a>
        <br>
        <ol>
          <li v-for="option in job.options">
            <small>{{option.option}}</small>
          </li>
        </ol>
      </li>
    </ul>
  </span>
</template>
<script>
import ProgressSection from "./JobProgress.vue";
export default {
  props: ["modalstate", "jobcategory"],
  data() {
    return {
      progressvalue: 0,
      jobDetails: this.jobcategory,
      toshow: this.modalstate,
      modalstatus: this.modalstate,
      error: null
    };
  },
  methods: {
    moveToNextState: function(e) {
      if (this.progressvalue < 100) {
        this.progressvalue += 10;
      }
    },
    close: function() {
      this.toshow = false;
    },
    show() {
      this.toshow = true;
    }
  },
  render: function(createElement) {
    this.jobcategory = row;
    this.show();
  }
};
</script>
<style>
</style>
