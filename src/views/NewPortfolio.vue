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
                <div class="col-lg-9">
                  <h1 class="display-1 text-white colorSchemeHeading">Check out some of our work</h1>
                  <p
                    class="lead text-white col-lg-10 text-left pt-2"
                    style="margin-left: -10px"
                  >Through our network team of creatives, we provide with you the following services.</p>
                  <div class="btn-wrapper justify-content-center">
                    <a href="#request" data-toggle="scroll">
                      <base-button
                        class="btn btn-md text-white colorSchemeBtn btn-icon mb-3 mb-sm-0"
                        type="default"
                      >VIEW OUR SERVICES</base-button>
                    </a>
                    <span stye="color: transparent">.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-sm-nones order-lg-2" id="expect" style="margin-left:-70px">
              <div class="text-white">
                <img
                  src="@/assets/img/portfolioImage.svg"
                  class="img-center"
                  style="height:400px !important"
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section id="who" class="section section-shaped my-4 mb-2 mt-10">
      <div class="container mt-4">
        <div class="row row-grid align-items-center">
          <div class="col-md-12 col-lg-12">
            <h1 class="text-warning">Graphics Design</h1>
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio1.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio2.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio3.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio4.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
        </div>
      </div>
      <br>
    </section>

    <!-- General services -->

    <section id="who" class="section section-shaped my-4 mb-2 mt-10">
      <div class="container mt-4">
        <div class="row row-grid align-items-center">
          <div class="col-md-12 col-lg-12">
            <h1 class="text-warning">General Services</h1>
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio1.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio2.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio3.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio4.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
        </div>
      </div>
      <br>
    </section>

    <!-- end of general services -->

    <!-- start of digital design -->
    <section id="who" class="section section-shaped my-4 mb-2 mt-10">
      <div class="container mt-4">
        <div class="row row-grid align-items-center">
          <div class="col-md-12 col-lg-12">
            <h1 class="text-warning">Digital Design</h1>
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio1.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio2.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio3.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
          <div class="col-lg-3">
            <img
              src="@/assets/img/portfolio4.jpg"
              class="img-center portfolioImage"
              alt="portfolioImage"
            >
          </div>
        </div>
      </div>
      <br>
    </section>

    <!-- end of digital design -->

    <section class="section section-lg mt-10">
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
                class="btn text-white colorSchemeBtn"
              >Request A Quote</a>
              <a
                @click="showEnquirySec('enquire')"
                class="btn text-white colorSchemeBtn"
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
import Categories from "./components/Landing/AllCategories";
import Modal from "@/components/Common/Modal.vue";
export default {
  metaInfo: {
    title: "Learn More - Onesha",
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  components: {
    Categories,
    Modal,
    RequestSample
  },
  data() {
    return {
      selectedAnimationIn: "",
      selectedAnimationOut: "",
      showModal: false,
      component: "request-sample"
    };
  },
  methods: {
    showSampleModal() {
      this.showModal = true;
    },
    childComponentResponse(response) {
      if (response == "success") {
        this.component = "request-success";
      }
      if (response == "failed") {
        this.component = "request-failed";
      }
      if (response == "closemodal") {
        this.showModal = false;
        this.component = "request-sample";
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
.portfolioImage {
  width: 90%;
  height: 200px;
  border-radius: 10px;
}
</style>
