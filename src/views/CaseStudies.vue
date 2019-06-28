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
                  <h1
                    class="display-2 text-white colorSchemeHeading"
                  >
                    Case Studies
                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                  </h1>
                  <p
                    class="lead text-white col-lg-10 text-left pt-2 "  style="margin-left: -10px"
                  >We have worked with both large and small businesses to provide the skills they need to make digital content. We also offer valuable advice that helps them carry on the tasks on their own.
                  </p>
                  <div class="btn-wrapper justify-content-center">
                    <a href="#read" data-toggle="scroll">
                      <base-button
                        class="btn btn-md text-white colorSchemeBtn btn-icon mb-3 mb-sm-0"
                        type="default"
                      >READ MORE</base-button>
                    </a>
                    <span stye="color: transparent">.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-sm-nones order-lg-2" id="expect" style="margin-left:-70px">
              <div class="text-white">
                <img
                  src="@/assets/img/ill/ill-2.svg"
                  class="img-center"
                  style="height:400px !important"
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section
            class="section section-sm bg-white "
            id="read"
        >
        <div class="container">
            <div class="row justify-content-center text-center" id="process">
              <div class="mt-4 mb-lg-3 col-md-12">
                        <h2 class="text-primary">Client 1</h2>
                        <p class="lead mt-4">We follow this process to ensure you quality.</p>
                </div>
                <div class="mb-lg-3 row row-grid">
                
                    <div class="row row-grid">
                        <div class="col-lg-6">
                          
                            <img src="../assets/img/brand/me.jpg" class="img-fluid" alt/>
                              
                          <!-- <card
                              class="border-0"
                              hover
                              shadow
                              body-classes="py-5"
                          ></card> -->
                        </div>
                        <div class="col-lg-6">                          
                            <h3 class="mt-5 text-primary text-uppercase">Brief Processing</h3>
                            <p class="description mt-3">Onesha processes your request into a job brief that we present to vetted creatives for quotation.
                                We give you a professional looking company profile that will enable you get introductions, meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made. Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br> Select and approve the quote.</p>
                              <br>
                            <b-button v-b-toggle.collapse-1 variant="default" class="mt-4 colorSchemeBtn text-white">Read More</b-button>
                            
                        </div>
                        <b-collapse id="collapse-1" class="mt-2">
                            <b-card>
                              <div class="card-text p-4 justify-content-center text-center"
                                  id="wara" :show.sync="this.showMore">
                                  <h4>What we did</h4>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p><br>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p>
                                  
                              </div>
                              <div class="row justify-content-center text-center mt-sm mb-sm">
                                  <div class="col-md-8">

                                      <a
                                          href="https://www.youtube.com/watch?v=XUaA8mQ6528"
                                          target="_blank"
                                          data-toggle="popover"
                                          data-original-title="Google - Be found online"
                                      >
                                          <iframe
                                              class="col-md-12"
                                              width="580"
                                              height="350"
                                              src="https://www.youtube.com/embed/XUaA8mQ6528"
                                              frameborder="0"
                                              allow="autoplay; encrypted-media"
                                              allowfullscreen
                                          ></iframe> <br><small>Pangea Video</small>
                                      </a>
                                  </div>
                              </div>
                            </b-card>
                        </b-collapse>
                  </div>
                  <div class="row row-grid">
                      <div class="col-lg-6">
                          <card
                              class="border-0"
                              hover
                              shadow
                              body-classes="py-5"
                          >
                              <icon
                                  name="ni ni-bullet-list-67"
                                  type="primary"
                                  rounded
                                  class="mb-4"
                              >
                              </icon>
                              <h6 class="text-primary text-uppercase">Request a Service</h6>
                              <p class="description mt-3">Onesha helps you flesh out your request using easy to use job templates that make filling forms a simple process.</p>

                              <b-button v-b-toggle.collapse-2 variant="default" class="mt-4 colorSchemeBtn text-white">Read More</b-button>
                          </card>
                      </div>
                      <div class="col-lg-6">
                          <card
                              class="border-0"
                              hover
                              shadow
                              body-classes="py-5"
                          >
                              <icon
                                  name="ni ni-settings-gear-65"
                                  text="warning"
                                  rounded
                                  class="mb-4"
                              >
                              </icon>
                              <h6 class="text-primary text-uppercase">Brief Processing</h6>
                              <p class="description mt-3">Onesha processes your request into a job brief that we present to vetted creatives for quotation.</p>
                              
                              <b-button v-b-toggle.collapse-3 variant="default" class="mt-4 colorSchemeBtn text-white">Read More</b-button>
                          </card>
                      </div>
                      <b-collapse id="collapse-2" class="mt-2">
                            <b-card>
                              <div class="card-text p-4 justify-content-center text-center"
                                  id="wara" :show.sync="this.showMore">
                                  <h4>What we did</h4>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p><br>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p>
                                  
                              </div>
                            </b-card>
                        </b-collapse>
                      <b-collapse id="collapse-3" class="mt-2">
                            <b-card>
                              <div class="card-text p-4 justify-content-center text-center"
                                  id="wara" :show.sync="this.showMore">
                                  <h4>What we did</h4>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p><br>
                                  <p>We give you a professional looking company profile that will enable you get introductions,
                                      meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                                      Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                                      </p>
                                  
                              </div>
                            </b-card>
                        </b-collapse>
                  </div>
              </div>
            </div>
        </div>
        <div id="offer" class="container mt-5 mb-2">
          <div class="justify-content-between align-items-center">
                
                <modal
                    :show.sync="showModal"
                    style="padding: 0"
                >
                    <component
                        :is="component"
                        @response="childComponentResponse"
                    ></component>
                </modal>
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
            <div class="row justify-content-center enq"><br>
                <a
                    @click="showEnquirySec('quote')"
                    class="btn text-white colorSchemeBtn"
                >Request A Quote</a>
                <a
                    @click="showEnquirySec('enquire')"
                    class="btn text-white colorSchemeBtn"
                >Make an Enquiry</a>
            
            </div>
            <div v-if="this.showEnquiry">
                <component
                    :is="component2"
                    @response="enquiryResponse"
                    :type="this.enquiry"
                ></component>
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

let show = true;

export default {
  components: {
    Categories,
    Modal,
    RequestSample,
    EnquiryForm,
    EnquirySuccess,
    EnquiryFailed,
    EnquirySection
  },
  metaInfo: {
    title: "Case Studies - Onesha",
    // override the parent template and just use the above title only
    titleTemplate: null
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
@media screen and (max-width: 768px) {
  .d-sm-nones {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .d-sm-nones {
    display: block !important;
  }
  .d-lg-nones {
    display: none !important;
  }
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
</style>
