<template>
  <div>
    <div class="progress" style="height: 15px;">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style="width: 25%;"
      >25%</div>
    </div>
    <div v-if="template">
      <TemplateContainer :template="template"></TemplateContainer>
    </div>
    <div>
      <button
        class="btn btn-default"
        v-if="templateIndex !== 0"
        @click="loadPreviousTemplate(templateIndex)"
      >Previous</button>
      <button
        class="btn btn-dark"
        v-if="templateIndex !== templatedata.length - 1"
        @click="loadNextTemplate(templateIndex)"
      >Next</button>
      
      <button
        class="btn btn-success mx-5"
        v-if="templateIndex === templatedata.length - 1"
        @click="submit"
      >Submit template</button>
    </div>
  </div>
  <!-- </v-app>  -->
</template>
<script>
import ProgressSection from "./JobProgress";
import TemplateContainer from "./TemplateContainer.vue";
import Axios from "axios";

export default {
  data() {
    return {
      templateIndex: 1,
      templatedata: {},
      template: {},
      progress: 76
    };
  },
  components: {
    ProgressSection,
    TemplateContainer
  },
  methods: {
    submit() {
      // console.log(this.templatedata);
    },
    /**
     * Load templates from database for specified job type.
     *
     * Returns an array of template questions.
     */
    async loadJobTemplates() {
      let jobslug = "";
      try {
        jobslug = window.location.pathname.split("/").filter(e => e)[1];
      } catch (e) {}
      // do async loading of job templates
      const jobTemplate = await Axios.get(
        "/api/data/templates/" + jobslug
      ).then(res => res.data);

      this.templatedata = [
        {
          _id: "5we5fd6y7hrubhs2",
          title: "How often do you post on Twitter?",
          feedback: "single-select",
          options: [
            { option: "Twice per week." },
            { option: "I know but I won't say." }
          ]
        },
        {
          _id: "5we5fd6y7hrubsdf3hs2",
          title: "How many followers do you have on Twitter?",
          feedback: "single-select",
          options: [
            { option: "About 1000" },
            { option: "Lemme check I will come back in a few." }
          ]
        },
        {
          _id: "5we5fd6y7dwhrubsdf3hs2",
          title: "Do you think Twitter is right for your business?",
          feedback: "single-select",
          options: [
            { option: "It's not right in my own opinion." },
            {
              option:
                "I have been thinking about it but I haven't resolved to anything."
            },
            { option: "My wife told me it's right. I never question her." }
          ]
        }
      ];

      this.templateIndex = 0;
      this.template = this.templatedata[0];
    },
    /**
     * Loads previous template question given the current index
     *
     */
    loadPreviousTemplate(index) {
      if (this.templateIndex === 0) {
        this.templateIndex = 0;
        this.template = this.templatedata[this.templateIndex];
      } else {
        this.templateIndex -= 1;
        this.template = this.templatedata[this.templateIndex];
      }
    },
    /**
     * Loads next template question given the current index
     *
     */
    loadNextTemplate(index) {
      if (this.templateIndex == this.templatedata.length - 1) {
        this.templateIndex = this.templatedata.length - 1;
        this.template = this.templatedata[this.templateIndex];
      } else {
        this.templateIndex += 1;
        this.template = this.templatedata[this.templateIndex];
      }
    }
  },
  mounted() {
    this.loadJobTemplates();
  }
};
</script>