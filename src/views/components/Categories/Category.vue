<template>
  <section class="section section-lg section-shaped overflow-hidden my-0">
    <div class="shape shape-style-3 shape-default shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container-fluid py-0">
      <div class="row">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <section v-if="category.length">
            <div class="col-lg-7">
              <h1 class="text-white font-weight-light">{{ category[0].title }}</h1>
              <p class="lead text-white mt-4">{{ category[0].description }}</p>
            </div>

            <!-- display job types -->
            <section class="col-12">
              <div class="row">
                <div class="col-lg-3">
                  <div v-for="(jobtype, index) in category[0].jobtypes" :key="index">
                    <li>{{ jobtype.title }}</li>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div class="row justify-content-center">
                    <div
                      v-for="(jobtype, index) in category[0].jobtypes"
                      :key="index"
                      class="col-md-4 col-sm-6 mb-4"
                      @click="loadJobTemplates(jobtype)"
                    >
                      <div class="jobtype-container d-flex flex-column card bg-transparent">
                        <div class="jobtype-header">
                          <!-- image or jobtype illustration -->
                          <img :src="'/api/file/'+jobtype.avatar.file">
                        </div>
                        <div class="jobtype-title">{{ jobtype.title }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section v-if="!category.length">
            <!-- display a some what 404 page to notify when no job types found for the category provided -->
            <!-- display a centered section -->
            <div>No job types for this category at the moment.</div>
          </section>

          <!-- job template modal -->
          <section v-if="jobtype != null">
            <modal :show.sync="templateModal">
              <template slot="header">
                <h5
                  class="modal-title"
                  id="templateModalTitle"
                >You are {{ Number(templatedata.length) - templateIndex }} steps away to place your order.</h5>
              </template>

              <base-progress type="success" :value="progress" label="Task completed"></base-progress>

              <div>A quick walkthrough for {{ jobtype.title }}</div>
              <div v-if="template" class="templateModal">
                <div class="my-5">
                  <div class="title">{{ template.title }}</div>
                  <div v-if="template.feedback == 'single-select'">
                    <div
                      :name="template._id"
                      v-for="(option, index) in template.options"
                      :key="index"
                    >
                      <base-radio
                        class="mb-3"
                        :id="index"
                        v-model="filledindata[template.title]"
                        :name="index"
                        :value="option.option"
                      >{{ option.option }}</base-radio>
                    </div>
                  </div>
                  <div v-if="template.feedback == 'prompt'">
                    <textarea
                      :name="template._id"
                      v-model="filledindata[template.title]"
                      rows="2"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <template slot="footer">
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
                  class="btn btn-success"
                  v-if="templateIndex === templatedata.length - 1"
                  @click="submitFilledInTemplate"
                >Submit template</button>
              </template>
            </modal>
          </section>
        </div>
        <!-- <div class="col-lg-6 mb-lg-auto"></div> -->
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </section>
</template>
<script>
import Modal from "../Common/Modal";
import BaseRadio from "../Common/BaseRadio";
import TemplateContainer from "./TemplateContainer";
import BaseProgress from "../Common/BaseProgress";
import Axios from "axios";

export default {
  components: {
    Modal,
    TemplateContainer,
    BaseRadio
  },
  props: {
    slug: String
  },
  data() {
    return {
      category: [],
      templateModal: false,
      jobtype: null,
      templateIndex: 1,
      templatedata: {},
      template: {},
      progress: 0,
      filledindata: {}
    };
  },
  async mounted() {
    await this.fetchCategoryJobTypes();
  },
  methods: {
    async fetchCategoryJobTypes() {
      const jobtypes = await Axios.get(
        "/api/data/jobtype-grouped/" + this.slug
      ).then(res => res.data);
      this.category = jobtypes;
    },
    /**
     * Load templates from database for specified job type.
     *
     * Returns an array of template questions.
     */
    async loadJobTemplates(jobtype) {
      Object.keys(this.filledindata).forEach(
        entry => delete this.filledindata[entry]
      );
      this.templateModal = true;
      this.jobtype = jobtype;
      // do async loading of job templates
      const jobTemplate = await Axios.get(
        "/api/data/templates/" + this.jobtype.slug
      ).then(res => res.data);

      this.templatedata = [
        {
          _id: "5we5fd6y7hrubhs2",
          title: "Tell us something about yourself?",
          feedback: "prompt"
        },
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
        },
        {
          _id: "5we5fd6y7dwhrubsdfs2",
          title: "Provide us with your phone number and email address",
          feedback: "prompt"
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
      this.populateTemplateFeedback();
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
      this.populateTemplateFeedback();
    },
    /**
     * Will populate template entry from selected options.
     */
    populateTemplateFeedback(end) {
      var elem = this.$el.querySelector(".templateModal");
      var title = elem.querySelector(".title").innerText;
      var inputs = Array.from(elem.querySelectorAll("input"));
      var label = "";
      var self = this;
      inputs.forEach(function(input) {
        if (input.checked) {
          label = elem.querySelector(
            'label[for="' + input.getAttribute("id") + '"]'
          ).innerText;
          if (self.filledindata[title] != undefined)
            self.filledindata[title] = label;
        }
      });

      var index = end
        ? 1
        : Number(this.templateIndex) / Number(this.templatedata.length);

      this.progress = Math.ceil(index * 100);
    },
    /**
     * Submit template after client fills in
     */
    submitFilledInTemplate() {
      this.populateTemplateFeedback(true);
      console.log(this.filledindata);
    }
  }
};
</script>

<style>
.jobtype-container {
  height: 180px;
  cursor: pointer;
  transition: 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.jobtype-container:hover {
  box-shadow: 0px 2px 25px 2px rgba(0, 0, 0, 0.4);
}
.jobtype-container .jobtype-header {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
}
.jobtype-header img {
  width: 100%;
  height: 100%;
}
.jobtype-header video {
  width: 100%;
  height: 100%;
}
.jobtype-container .jobtype-title {
  position: absolute;
  height: 30%;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  background: -moz-linear-gradient(
    top,
    rgba(26, 96, 111, 0) 0%,
    rgba(26, 96, 111, 0) 1%,
    rgba(24, 87, 104, 0.91) 31%,
    rgba(21, 65, 89, 0.91) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(26, 96, 111, 0) 0%,
    rgba(26, 96, 111, 0) 1%,
    rgba(24, 87, 104, 0.91) 31%,
    rgba(21, 65, 89, 0.91) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(26, 96, 111, 0) 0%,
    rgba(26, 96, 111, 0) 1%,
    rgba(24, 87, 104, 0.91) 31%,
    rgba(21, 65, 89, 0.91) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001a606f', endColorstr='#e8154159',GradientType=0 );
}
</style>