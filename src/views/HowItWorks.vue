<template>
  <div>
    <section class="section section-lg section-shaped my-0">
      <div class="shape shape-style-1 shape-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section>
        <div class="container shape-container py-md">
          <div class="row">
            <div class="col-lg-9 order-lg-1">
              <div class="my-0 py-1 d-sm-nones"></div>
              <div class="mt--300 d-lg-nones"></div>
              <div class="row">
                <div class="">
                  <h1 class="display-2 text-white colorSchemeHeading">
                    Its simple!
                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                  </h1>
                  <p class="lead text-white col-lg-10 text-left pt-2" style="margin-left: -10px">
                    We give you professional creative services that will enable you grow your business even faster. Our
                    quick online platform simplifies the process of looking for a place to get your design tasks done.
                  </p>
                </div>
                <div class="btn-wrapper justify-content-center">
                    <a href="#process" data-toggle="scroll">
                      <base-button
                        class="btn btn-md text-white colorSchemeBtn btn-icon mb-3 mb-sm-0"
                        type="default"
                      >VIEW OUR PROCESS</base-button>
                    </a>
                    <span stye="color: transparent"></span>
                  </div>
              </div>
            </div>
            <div class="col-lg-3 d-sm-nones order-lg-2" id="expect" style="margin-left:-70px">
              <div class="text-white">
                <img
                  src="@/assets/img/mobileApp.svg"
                  class="img-center"
                  style="height:400px !important"
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section id="who" class="section section-shaped my-4 mb-2 bg-secondary mt-lg-auto">
      <div class="container mt-4">
        <div class="container row row-grid align-items-center">
          <div class="col-lg-7">
            <div class="img-bg-holder text-center bg-warning">
              <img src="@/assets/img/girl.png" alt="customerImage" class=" img-fluid">
            </div>
          </div>
          <div class="col-lg-5">
            <h4 class="text-warning">Our customers</h4>
            <p
              class="lead text-gray text-left"
            >Simply choose a service, fill a simple job form, get your task done!</p>
            <p class="lead text-gray text-left">
              We have worked with both large and small businesses to provide the skills they need to make digital content.
              We also offer valuable advice that helps them carry on the tasks on their own. </p>
            <p class="lead text-gray text-left">
              We help you with design, digital and social media through our network of skilled creatives.
            </p>
          </div>
        </div>
      </div>
      <br>
    </section>

    <section class="section section-sm bg-secondary mt--100 bg-secondary">
      <div>
        <div class="row justify-content-center text-center" >
          <div class="mb-lg-3 col-md-12">
            
          </div>
        </div>
      </div>
    </section>
    <section class="section mt-10" id="process">
      <div class="container">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-warning">Begin your request</h2>
            <p
              class="lead text-default"
            >Your journey starts here. We follow this process to assure you quality.</p>
          </div>
        </div>
      </div>
      <div class="p-5 mb-lg-3 col-md-12">
        <div class="row row-grid">
          <div class="col-lg-3 process-card">
            <card class="border-0" hover shadow body-classes="py-5">
              <icon name="ni ni-bullet-list-67" rounded class="mb-4 text-white bg-default"></icon>
              <h6 class="text-default text-uppercase">Request a Service</h6>
              <p
                class="description mt-3"
              >Onesha helps you flesh out your request using easy to use job templates that make filling forms a simple process.</p>
            </card>
          </div>
          <div class="col-lg-3 process-card">
            <card class="border-0" hover shadow body-classes="py-5">
              <icon name="ni ni-settings-gear-65" rounded class="mb-4 text-white bg-default"></icon>
              <h6 class="text-default text-uppercase">Brief Processing</h6>
              <p
                class="description mt-3"
              >Onesha processes your request into a job brief that we present to vetted creatives for quotation. Select and approve the quote.</p>
              
              <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="default" class="mt-4">-->
            </card>
          </div>
          <div class="col-lg-3 process-card">
            <card class="border-0" hover shadow body-classes="py-5">
              <icon name="ni ni-settings" rounded class="mb-4 text-white bg-default"></icon>
              <h6 class="text-default text-uppercase">Job execution</h6>
              <p
                class="description mt-3"
              >We start working on your job according to the brief. We send you samples for your approval. Make a deposit to continue.</p>
              
              <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="default" class="mt-4">-->
            </card>
          </div>
          <div class="col-lg-3 process-card">
            <card class="border-0" hover shadow body-classes="py-5">
              <icon name="ni ni-check-bold" rounded class="mb-4 text-white bg-default"></icon>
              <h6 class="text-default text-uppercase">Job delivery</h6>
              <p
                class="description mt-3"
              >You receive the final samples and complete the payment upon being satisfied with the result. Choose your mode of delivery.</p>
            </card>
          </div>
        </div>
        <div class="row justify-content-center">
            <div>
              <base-button
                tag="a"
                href="services"
                type="default"
                class="colorSchemeBtn"
              >BEGIN REQUEST</base-button>
            </div>
        </div>
      </div>
    </section>
    <section class="section section-lg mt-100">
      <div class="container">
        <card gradient="warning BannerCard" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="pb-lg-4">
              <h3 class="mb-1 text-center text-white">Want to work with us?</h3>
              <h6 class="mb-1 text-center">Let us know what you need</h6>
            </div>
            <div class="row justify-content-center enq">
              <br>
              <a
                @click="showEnquirySec('quote')"
                class="btn text-white colorSchemeBtn m-2"
              >Request A Quote</a>
              <a
                @click="showEnquirySec('enquire')"
                class="btn text-white colorSchemeBtn m-2"
              >Make an Enquiry</a>
            </div>
            <div v-if="this.showEnquiry">
              <component :is="component2" @response="enquiryResponse" :type="this.enquiry"></component>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
import RequestSample from "@/views/components/Partials/SampleRequest.vue";
import EnquiryForm from "@/views/components/Partials/EnquiryForm.vue";
import EnquirySuccess from "@/views/components/Partials/EnquirySuccess.vue";
import EnquiryFailed from "@/views/components/Partials/EnquiryFailed.vue";
import EnquirySection from "@/views/components/Partials/EnquirySection.vue";
import Categories from "./components/Landing/AllCategories";
import Modal from "@/components/Common/Modal.vue";
import Axios from "axios";
export default {
  metaInfo: {
    title: "How It Works - Onesha",
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  components: {
    Categories,
    Modal,
    EnquiryForm,
    EnquirySuccess,
    EnquiryFailed,
    EnquirySection
  },
  data() {
    return {
      selectedAnimationIn: "",
      selectedAnimationOut: "",
      showMore: false,
      showEnquiry: false,
      component: "request-sample",
      component2: "enquiry-form",
      component3: "enquiry-section"
    };
  },
  methods: {
    hideEnquirySec() {
      this.$el.querySelector(".enq").innerHTML = "";
    },
    showEnquirySec(val) {
      this.showEnquiry = false;
      console.log(val);
      this.hideEnquirySec();
      this.showEnquiry = true;
      this.enquiry = val;
    },
    showMoreSec(val) {
      this.showMore = !this.showMore;
      this.$el.querySelector("#"+val).hidden = this.showMore;
    },
    enquiryResponse(response) {
      console.log(response);
      if (response == "success") {
        this.component2 = "enquiry-success";
      }
      if (response == "failed") {
        this.component2 = "enquiry-failed";
        this.component2 = "enquiry-section";
        this.showEnquiry = true;
      }
      if (response == "closemodal") {
        this.showEnquiry = false;
        this.component2 = "enquiry-section";
        this.showEnquiry = true;
      } else if (
        response !== "success" &&
        response !== "failed" &&
        response !== "closemodal"
      ) {
        this.showEnquiry = false;
        this.component2 = "enquiry-section";
        this.showEnquiry = true;
      }
    }
  }
};
</script>

<style>
.display-3 span {
  display: inline-flex !important;
}
.position-relative {
  position: relative;
  background-image: none;
  background-image: url("/assets/img/social-bg.jpg") !important;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 100vh !important;
}
.home-content {
  /* background-color: rgba(0, 0, 34, 0.7); */
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.img-bg-holder {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
}
.customerImage {
  width: 100px;
  height: 300px;
  margin: auto;
}
.process-card {
  height: 400px;
  padding: 10px;
}
.consultDiv {
  border-radius: 10px;
  padding: 20px;
  width: 100%;
}
</style>
