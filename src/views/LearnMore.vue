<template>
  <div>
    <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 bg-gradient-warning">
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
             <div class="container pt-lg-md">
                    <div class="col px-0">
                        <div class="my-0 py-1 d-sm-nones"></div>
                        <div class="mt--300 d-lg-nones"></div>
                        <div class="row btn-wrapper justify-content-center">
                            <div class="col-lg-10 text-center">
                                <h2 class="display-3 text-white">Build Your Sales Pipeline Faster</h2>
                                <p class="lead  text-white">According to the experts, a company profile can shape the decision of a potential client. Here is what a proper company profile can do for you.</p>
                            </div>
                        </div>
                        <div id="benefits">
                          <div class="row row-grid mt-5">
                              <div class="col-lg-4">
                                  <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                      <i class="ni ni-satisfied text-primary"></i>
                                  </div>
                                  <h5 class="text-white mt-3">Secure More Meetings</h5>
                                  <p class=" text-white mt-3">Highlight your services and client testimonials on your profile to convince potential clients looking for your services and lead to more referrals.</p>
                              </div>
                              <div class="col-lg-4">
                                  <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                      <i class="ni ni-ruler-pencil text-primary"></i>
                                  </div>
                                  <h5 class="text-white mt-3">Establish Credibility</h5>
                                  <p class=" text-white mt-3">Let your portfolio of previous work give you an edge over competitors to close that deal and build a credible background for your business.</p>
                              </div>
                              <div class="col-lg-4">
                                  <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                      <i class="ni ni-book-bookmark text-primary"></i>
                                  </div>
                                  <h5 class="text-white mt-3">Use Local Business Intelligence</h5>
                                  <p class=" text-white mt-3">Grow your market share with our local business intelligence. We use research reports and analysis to give you an in-depth knowledge about your industry.</p>
                              </div>
                          </div>
                      </div>
                    </div>
              </div>
              <div class="row btn-wrapper justify-content-center floating">
                    <a
                        href="#who"
                        data-toggle="scroll"
                        class="btn-inner--icon text-white"><i class="ni ni-bold-down"></i>
                    </a>
                </div>
            </section>
    </section>
    <section id="who" class="section section-shaped my-4 mb-2  bg-secondary mt-lg-auto ">
        <div class="container mt-4"><div class="row row-grid align-items-center">
            <div class="d-flex pl-2 text-white">
                    <h4 class="display-3 text-primary">Who needs a company profile?</h4>
                
            </div>
        <div class="col-lg-5 mb-lg-auto order-md-2">
            <img src="@/assets/img/theme/promo.jpg" class="img-fluid floating" style="width: 100%;"></div>
            <div class="col-lg-7 order-md-1"><div class="pr-md-5">
            <p>Your company profile is a professional introduction and aims to inform your prospective clients and stakeholders about your products,
                    services and current status. Your company profile is a key component in your marketing strategy. It is especially important for:</p><ul class="list-unstyled mt-2 text-primary"><li class="py-2"><div class="d-flex align-items-center"><div><div class="badge badge-circle badge-primary mr-3"><i class="ni ni-album-2"></i></div></div><div><h6 class="mb-0 ">Photographers and designers ready to show their portfolio</h6></div></div></li><li class="py-2"><div class="d-flex align-items-center"><div><div class="badge badge-circle badge-primary mr-3"><i class="ni ni-laptop"></i></div></div><div><h6 class="mb-0 ">A tech startup pitching their solutions</h6></div></div></li><li class="py-2"><div class="d-flex align-items-center"><div><div class="badge badge-circle badge-primary mr-3"><i class="ni ni-paper-diploma"></i></div></div><div><h6 class="mb-0 ">Suppliers looking to apply for a tender</h6></div></div></li><li class="py-2"><div class="d-flex align-items-center"><div><div class="badge badge-circle badge-primary mr-3"><i class="ni ni-cart"></i></div></div><div><h6 class="mb-0 ">A business looking to deliver their goods to new customers</h6></div></div></li></ul><p><a href="#request" class="btn btn-primary ">Get Yours Here</a> 
                    or &nbsp; <a class="btn btn-white text-primary" @click="showSampleModal()">Show Me A Sample</a></p>
                    </div>
                </div>
            </div>
        </div><br>
    </section>
    <section
            class="section section-sm bg-secondary mt--100  bg-secondary"
            id="process"
        >
        <div class="container">
            <div class="row justify-content-center text-center" id="process">
              <div class="mt-4 mb-lg-3 col-md-12">
                        <h2 class="text-primary">Our Process</h2>
                        <p class="lead mt-4">We follow this process to ensure you quality.</p>
              </div>
              <div class="mb-lg-3 col-md-12">
                
                  <div class="row row-grid">
                      <div class="col-lg-3">
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

                              <base-button
                                  tag="a"
                                  href="#request"
                                  data-toggle="scroll"
                                  type="primary"
                                  class="mt-4"
                              >
                                  BEGIN REQUEST
                              </base-button>
                          </card>
                      </div>
                      <div class="col-lg-3">
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
                              <p class="description mt-3">Onesha processes your request into a job brief that we present to vetted creatives for quotation.<br><br> Select and approve the quote.</p>
                              <br>
                              <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="primary" class="mt-4">-->
                          </card>
                      </div>
                      <div class="col-lg-3">
                          <div class="card border-0 card-lift--hover shadow">
                              <!---->
                              <div class="card-body py-5">
                                  <div class="icon icon-shape mb-4 icon-shape-primary rounded-circle"><i class="ni ni-settings"></i></div>
                                  <h6 class="text-primary text-uppercase">Job Execution</h6>
                                  <p class="description mt-3">We start working on your job according to the brief. We send you samples for your approval.<br><br> Make a deposit to continue.</p><br>
                              </div>
                              <!---->
                              <!---->
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="card border-0 card-lift--hover shadow">
                              <!---->
                              <div class="card-body py-5">
                                  <div class="icon icon-shape mb-4 icon-shape-primary rounded-circle"><i class="ni ni-check-bold"></i></div>
                                  <h6 class="text-primary text-uppercase">Job Delivery</h6>
                                  <p class="description mt-3">You receive the final samples and complete the payment upon being satisfied with the result.<br><br> Choose your mode of delivery.</p><br>
                              </div>
                              <!---->
                              <!---->
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div id="offer" class="container mt-5 mb-2">
          <div class="justify-content-between align-items-center">
                <transition
                    name="component-fade"
                    mode="out-in"
                >
                    <div class="row justify-content-center text-center">
                        <h3>What can we offer?</h3>
                        <p>We give you a professional looking company profile that will enable you get introductions,
                            meetings and close sales even faster. Our quick online service simplifies the process of looking for a place to get your company profile made.
                            Get high quality services from our vetted creatives with quick delivery to fit your schedule. <br><br>Simply choose a service, fill a simple job form, get your task done!
                            </p>
                        <div class="mt-3 mb-lg-1 col-md-12">
                            <a href="#request" class="btn btn-primary mt-4">See all services</a>
                        </div>
                    </div>
                </transition>
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
    <section class="section section-lg  mt-100 bg-gradient-info">  
            <div class="container">
                <div class="row text-center justify-content-center" id="request">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Begin your request</h2>
                        <p class="lead text-white">Your journey starts here. Revamp your existing company profile, or get a new one.</p>
                    </div>
                </div>
                <!-- <JobCategories :categories="categories"></JobCategories> -->
                <categories></categories>
                <div class="row justify-content-center text-center">
                            <div class="mt-5 mb-lg-3 col-md-12 text-white">
                                <p>Need another service? We also offer graphic design, posters for social media and web design.</p>
                                <h2 class=""><a
                                        @click="gtag_report_conversion()"
                                        href="/job/new-creative-service"
                                        class="btn btn-white text-default"
                                    >REQUEST ANOTHER CREATIVE SERVICE</a></h2>
                            </div>
                        </div>
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
        }
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
        },
    }
}
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

</style>
