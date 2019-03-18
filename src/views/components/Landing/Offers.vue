<template>
    <div>
        <div class="row justify-content-between align-items-center my-5 pt-lg-2">
            <div class="col-lg-5 mb-5 mb-lg-0">
                <h2 class="text-info font-weight-light">New Design</h2>
                <p class=" text-default mt-4">Our Design System comes with several pre-built sections to help you get started faster. You can change the text and images and you're good to go.</p>
                <a @click="gtag_report_conversion()"  href="/job/new-design-only#jobFormArea" class="btn btn-info mt-4">Begin Request</a>
            </div>
            <div class="col-lg-6 mb-lg-auto">
                <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                <div id="carousel_example" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carousel_example" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel_example" data-slide-to="1" class=""></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="img-fluid" src="@/assets/img/theme/about.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="img-fluid" src="@/assets/img/theme/profile.jpg" alt="Second slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
        </div><br>
        <div class="row justify-content-between align-items-center my-5 pt-lg-2">
            <div class="col-lg-6 mb-lg-auto mb-5">
                <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                <div id="carousel_example" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carousel_example" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel_example" data-slide-to="1" class=""></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="img-fluid" src="@/assets/img/theme/landing.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="img-fluid" src="@/assets/img/theme/profile.jpg" alt="Second slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
            <div class="col-lg-5 mb-5 mb-lg-0">
                <h2 class="text-info font-weight-light">New Content and Structure</h2>
                <p class=" text-default mt-4">Get your first profile designed with new content and structure. You can choose from various profile content sections and get content research for your business.</p>
                <a @click="gtag_report_conversion()"  href="/job/new-design-&-structure#jobFormArea" class="btn btn-info mt-4">Begin Request</a>
            </div>
            
        </div><br>
        <div class="row justify-content-between align-items-center my-5 pt-lg-2">
            <div class="col-lg-5 mb-5 mb-lg-0">
                <h2 class="text-info font-weight-light">Redesign Existing Profile</h2>
                <p class=" text-default mt-4">Give your profile a new look with the content provided. You can specify your theme or choose from design samples given.</p>
                <a @click="gtag_report_conversion()" href="/job/redesign-existing-profile#jobFormArea" class="btn btn-info mt-4">Begin Request</a>
            </div>
            <div class="col-lg-6 mb-lg-auto">
                <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                <div id="carousel_example" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carousel_example" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel_example" data-slide-to="1" class=""></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="img-fluid" src="@/assets/img/theme/profile.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="img-fluid" src="@/assets/img/theme/landing.jpg" alt="Second slide">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
    components: {
        BCarousel,
        BCarouselSlide
    },
    metaInfo: {
        title: "Onesha Offers",
        // override the parent template and just use the above title only
        titleTemplate: null
    }
};
</script>
<style>
.carousel-caption {
    background: white;
}
.carousel-caption h3 {
    color: #33e;
}
</style>