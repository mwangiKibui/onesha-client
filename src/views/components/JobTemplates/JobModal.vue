<template>    
    <!-- job template modal -->
    <section v-if="jobtype != null">
        <modal :show.sync="templateModal">
            <template slot="header">
            <h5
                v-if="templatedata.length"
                class="modal-title"
                id="templateModalTitle"
            >You are {{ Number(templatedata.length) - templateIndex }} steps away to place your order.</h5>
            </template>
            <template slot="header">
            <h5
                v-if="!templatedata.length"
                class="modal-title"
                id="templateModalTitle"
            >No template found.</h5>
            </template>

            <base-progress
            v-if="templatedata.length"
            type="success"
            :value="progress"
            label="Task completed"
            ></base-progress>

            <div v-if="templatedata.length">A quick walkthrough for {{ jobtype.title }}</div>
            <div v-if="templatedata.length" class="templateModal">
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

            <!-- no template defined -->
            <div v-if="!templatedata.length">No template found for specified job type.</div>
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
</template>
<script>
import Modal from "@/components/Common/Modal";
import BaseRadio from "@/components/Common/BaseRadio";
import BaseProgress from "@/components/Common/BaseProgress";
import TemplateContainer from "./TemplateContainer";
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
  methods: {
    fetchCategoryJobTypes() {
      Axios.get("/api/data/jobtype-grouped/" + this.slug).then(
        res => (this.category = res.data)
      );
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
      this.progress = 0;

      // do async loading of job templates
      const jobTemplate = await Axios.get(
        "/api/data/templates/" + this.jobtype.slug
      ).then(res => res.data);

      /*
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
      */
      this.templatedata = jobTemplate.length ? jobTemplate[0].templates : [];
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
     *
     * Called for every next or previous button click when filling in job templates.
     * Previously set object keys values are reset to the new selected option.
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
     * Submit template after client fills in.
     *
     * Created object will be sent after sanitization to remove unwanted characters.
     */
    submitFilledInTemplate() {
      this.populateTemplateFeedback(true);
    }
  }
  
};
</script>
<style>
</style>
