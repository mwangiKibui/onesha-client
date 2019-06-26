<template>
  <div>
    <section class="section section-lg section-shaped my-0" style="height:100vh">
      <div class="shape shape-style-1 shape-skew bg-gradient-warning">
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
              <div class="justify-content-between align-items-center">
                <div class="col-lg-11">
                  <h2
                    class="display-1 text-left text-white"
                    style="display: inline-block; float: center"
                  >
                    Creativity at Work
                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                  </h2>
                  <h3
                    class="justify-content-between text-white text-left pt-2 my-2"
                  >Through our network of skilled creatives, we provide you with the following services</h3>

                  <div class="btn-wrapper justify-content-center mt-4">
                    <a href="#request" data-toggle="scroll">
                      <base-button
                        class="btn btn-md btn-default btn-icon mb-3 mt-5 mb-sm-0"
                        type="info"
                      >VIEW OUR SERVICES</base-button>
                    </a>
                    <span stye="color: transparent">.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-sm-nones order-lg-2" id="expect" style="margin-left:-50px">
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

    <section class="section section-sm bg-secondary mt--100 bg-secondary" id="request">
      <div class="container">
        <div class="row justify-content-center text-center" id="process">
          <div class="mt-4 mb-lg-3 col-md-3">
            <h2 class="text-warning" style="margin-left: -5px">Graphic Design</h2>
            <p class="text-left text-warning">For Print</p>
            <img src="@/assets/img/ill/ill-2.svg" class="img-center img-fluid">
            <p class="mt-4">Get high quality print-ready designs with delivery options availale</p>
          </div>
          <div class="mb-lg-3 col-md-9 pl-4">
            <div class="row row-grid pl-4">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-bullet-list-67"
                    class="mb-4 text-warning"
                    style="border-radius:5px,border:1px solid #fb6340"
                  ></icon>
                  <h6 class="text-warning">Business Profiles</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-settings-gear-65" class="mb-4 text-warning"></icon>
                  <h6 class="text-warning">Brochures</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                  <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="warning" class="mt-4">-->
                </card>
              </div>

              <div class="col-lg-4">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Posters</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Business Cards</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Stationery Branding</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Attire Branding</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Banners</h6><br>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Reports and Presentations</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Other designs</h6><br>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br>
    <br>
    <section>
      <div class="container">
        <div class="row justify-content-center text-center" id="process">
          <div class="mt-4 mb-lg-3 col-md-3">
            <h2 class="text-warning" style="margin-left: -19px">General Services</h2>
            <p class="text-left text-warning">Longer term projects</p>
            <img src="@/assets/img/ill/ill-2.svg" class="img-center img-fluid">
            <p
              class="mt-4"
            >Get your task done whether its web development,social media content or design</p>
          </div>
          <div class="mb-lg-3 col-md-9 pl-4">
            <div class="row row-grid pl-4">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-bullet-list-67"
                    class="mb-4 text-warning"
                    style="border-radius:5px,border:1px solid #fb6340"
                  ></icon>
                  <h6 class="text-warning">Social Media Audit</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                </card>
              </div>

              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-settings-gear-65" class="mb-4 text-warning"></icon>
                  <h6 class="text-warning">Web Design</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                  <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="warning" class="mt-4">-->
                </card>
              </div>

              <div class="col-lg-4">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Mobile App Design</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>

              <div class="col-lg-4 mt-5">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-bullet-list-67"
                    class="mb-4 text-warning"
                    style="border-radius:5px,border:1px solid #fb6340"
                  ></icon>
                  <h6 class="text-warning">Social Media Strategy</h6><br>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                </card>
              </div>

              <div class="col-lg-4 mt-5">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-settings-gear-65" class="mb-4 text-warning"></icon>
                  <h6 class="text-warning">Page Management</h6><br>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                  <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="warning" class="mt-4">-->
                </card>
              </div>

              <div class="col-lg-4 mt-5">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Campaign/ Ad management</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center text-center" id="process">
          <div class="mt-4 mb-lg-3 col-md-3">
            <h2 class="text-warning" style="margin-left: -30px">Digital Design</h2>
            <p class="text-left text-warning">For Social Media</p>
            <img src="@/assets/img/ill/ill-2.svg" class="img-center img-fluid">
            <p class="mt-4">Get high quality print-ready designs with delivery options available</p>
          </div>
          <div class="mb-lg-3 col-md-9 pl-4 mt-4">
            <div class="row row-grid pl-4 mt-5">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-bullet-list-67"
                    class="mb-4 text-warning"
                    style="border-radius:5px,border:1px solid #fb6340"
                  ></icon>
                  <h6 class="text-warning">Motion Graphics</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                </card>
              </div>

              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-settings-gear-65" class="mb-4 text-warning"></icon>
                  <h6 class="text-warning">UI Mockups</h6>
                  <base-button
                    tag="a"
                    href="#request"
                    data-toggle="scroll"
                    type="warning"
                    class="mt-4"
                  >REQUEST</base-button>
                  <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="warning" class="mt-4">-->
                </card>
              </div>

              <div class="col-lg-4">
                <div class="card border-0 card-lift--hover shadow">
                  <!---->
                  <div class="card-body py-5">
                    <icon name="ni ni-check-bold" class="mb-4 text-warning"></icon>
                    <h6 class="text-warning">Illustrations</h6>
                    <base-button
                      tag="a"
                      href="#request"
                      data-toggle="scroll"
                      type="warning"
                      class="mt-4"
                    >REQUEST</base-button>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg mt-100 bg-gradient-warning">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 justify-content-left" id="request">
            <h4 style="color:#fff">Any other services you require</h4>
            <br>
            <h6 style="color:#fff">Get in touch with us today</h6>
          </div>
          <div class="col-lg-3 row text-right justify-content-right">
            <base-button
              class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
              style="height:50px"
              type="success"
              @click="showEnquirySec('quote')"
            >REQUEST A QUOTE</base-button>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-lg-2 mt-5 section-contact-us">
      <div class="container">
        <div class="pb-lg-4">
            <h3 class="mb-1 text-center text-warning">Want to work with us?</h3>                    
        </div>
        <div class="row justify-content-center enq"><br>
            <a
                @click="showEnquirySec('quote')"
                class="btn btn-white text-default"
            >Request A Quote</a>
            <a
                @click="showEnquirySec('enquire')"
                class="btn btn-white text-default"
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
  metaInfo: {
    title: "Learn More - Onesha",
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  components: {
    Categories,
    Modal,
    RequestSample,
    EnquiryForm,
    EnquirySuccess,
    EnquiryFailed,
    EnquirySection
  },
  data() {
    return {
      selectedAnimationIn: "",
      selectedAnimationOut: "",
      showModal: false,
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
@media screen and (max-width: 579px) {
  .d-sm-nones {
    display: none !important;
  }
}

@media screen and (min-width: 579px) {
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
