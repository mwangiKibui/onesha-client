<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Job Title</h1>
                    <p class="lead text-white mt-4">A description of the job you are about to request.</p>
                    <a href="#jobForm" data-toggle="scroll"
                       class="btn btn-white mt-4">Fill in form</a>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="/img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="/img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-lg-md" id="jobForm">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <h4 class="text-muted text-center mb-3">
                                <small>Job Title form</small>
                            </h4>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Fill in your requirements</small>
                            </div>
                            <form role="form">
                                <div class="text-right text-muted mb-1">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Name"
                                                addon-left-icon="ni ni-hat-3">
                                    </base-input>
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Email"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    <base-input alternative
                                                type="text"
                                                placeholder="Location"
                                                addon-left-icon="ni ni-map-marker">
                                    </base-input>
                                    <div class="text-muted font-italic text-left">
                                        <small>password strength:
                                            <span class="text-success font-weight-700">strong</span>
                                        </small>
                                    </div>
                                    <base-button type="primary" class="my-4">Next</base-button>
                                </div>
                                <div class="text-center d-none">
                                    <base-button type="primary" class="my-4">Submit Request</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
    }
}
};
</script>
<style>
</style>