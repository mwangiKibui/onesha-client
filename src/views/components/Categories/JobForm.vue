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
    <!-- <v-app> -->
    <!-- 
      <v-content data-app="v-content">
      <v-container>
        <v-stepper v-model="step" vertical>
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1">Your Information</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="step > 2">Your Address</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Misc Info</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-text-field label="Name" v-model="registration.name" required></v-text-field>
              <v-text-field label="Email" v-model="registration.email" required></v-text-field>
              <base-button type="primary" class="my-4" @click.native="step = 2">Next</base-button>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-text-field label="Street" v-model="registration.street" required></v-text-field>
              <v-text-field label="City" v-model="registration.city" required></v-text-field>
              <v-text-field label="State" v-model="registration.state" required></v-text-field>
              <v-btn flat @click.native="step = 1">Previous</v-btn>
              <base-button type="primary" class="my-4" @click.native="step = 3">Next</base-button>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-text-field
                label="Number of Tickets"
                type="number"
                v-model="registration.numtickets"
                required
              ></v-text-field>
              <v-select label="Shirt Size" v-model="registration.shirtsize" :items="sizes" required></v-select>
              <div class="form-group focused">
                <div class="input-group input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="ni ni-building"></i>
                    </span>
                  </div>
                  <select
                    class="select form-control"
                    aria-placeholder="Select Ind"
                    name="industry"
                    required
                  >
                    <option disabled selected>Select Industry</option>
                    <option value="fashion">Fashion</option>
                    <option value="media">Media</option>
                    <option value="ict">ICT</option>
                    <option value="business services">Business Services</option>
                    <option value="accounting">Accounting</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="transport">Transport</option>
                    <option value="real estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <v-btn flat @click.native="step = 2">Previous</v-btn>
              <base-button type="primary" class="my-4" @click.prevent="submit">Save</base-button>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
    </v-content>
    -->
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
import ProgressSection from "../JobTemplates/JobProgress";
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