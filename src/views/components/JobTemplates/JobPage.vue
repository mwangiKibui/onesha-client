<template>
    <div>
        <section class="section section-lg section-shaped overflow-hidden my-0">
            <div class="shape shape-style-1 shape-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div
                class="container py-0 pb-lg"
                v-if="job.slug"
            >
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">
                        <h1 class="text-white font-weight-light">{{ this.job.title}}</h1>
                        <p class="lead text-white mt-4">{{ this.job.description}}.</p>
                        <a
                            href="#jobFormArea"
                            @click="loadJobTemplates(job)"
                            data-toggle="scroll"
                            class="btn btn-white mt-4"
                        >Get Started</a>
                    </div>
                    <div class="col-lg-6 mb-lg-auto">
                        <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                            <b-carousel
                                id="carousel1"
                                controls
                                indicators
                            >
                                <!-- Text slides with image -->
                                <!-- image or jobtype illustration -->
                                <b-carousel-slide
                                    v-if="job.slug == 'new-design-only'"
                                    img-src="/assets/img/newdesign.jpg"
                                ></b-carousel-slide>
                                <b-carousel-slide
                                    v-if="job.slug == 'redesign-existing-profile'"
                                    img-src="/assets/img/redesign.jpg"
                                ></b-carousel-slide>
                                <b-carousel-slide
                                    v-if="job.slug == 'new-design-&-structure'"
                                    img-src="/assets/img/design-structure.jpg"
                                ></b-carousel-slide>
                                <b-carousel-slide
                                    v-if="job.slug == 'new-creative-service'"
                                    img-src="/assets/img/design-structure.jpg"
                                ></b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>
                </div>

            </div>
            <div
                class="container pt-lg-md"
                id="jobFormArea"
                v-if="job.slug"
            >
                <job-form
                    :jobs="job"
                    :toShows="toShow"
                    id="jobForm"
                ></job-form>

            </div>

            <section
                v-if="!job.slug"
                class="d-flex justify-content-center align-items-center"
                id="message"
            >

                <RotateSquare5 style="width: 300px; height: 300px;"></RotateSquare5>
            </section>

            <!-- <section
                v-if="1==2"
                class="d-flex justify-content-center align-items-center"
            >
                <div class="container justify-content-between align-items-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">
                        <h1 class="text-white font-weight-light">Job was not found</h1>
                        <p class="lead text-white mt-4">Description was not found. Check the url and try again.</p>
                        <a
                            on-click="window.reload()"
                            data-toggle="scroll"
                            class="btn btn-white mt-4"
                        >Reload</a>
                    </div>
                </div>
            </section> -->
        </section>
    </div>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";
import JobForm from "./JobForm.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    components: {
        BCarousel,
        BCarouselSlide,
        JobForm,
        RotateSquare5
    },
    props: {
        slug: String
    },
    data() {
        return {
            job: {},
            toShow: 2,
            jobtype: null,
            templateIndex: 1,
            templatedata: {},
            notemplate: true,
            template: {},
            progress: 0,
            filledindata: {},
            clientInfo: false
        };
    },
    /**
     * On template mount, execute defined action below.
     *
     * Fetch all defined job types, grouped with their categories from database, and populate returned data as categories.
     */
    watch: {
        $route(to, from) {
            // react to route changes...
            this.fetchJobDetails();
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadCategories();
            next();
        });
    },
    created() {
        this.fetchJobDetails();
    },
    methods: {
        async fetchJobDetails() {
            Axios.get("/api/data/jobtype/" + this.slug).then(res => {
                this.notemplate = true;
                return (this.job = res.data.length ? res.data[0] : {});
            });
        },
        loadJobTemplates(job) {
            this.notemplate = false;
            this.toShow = 1;
            this.job = job;
        },
        /**
         * Load available categories from server
         */
        loadCategories() {
            try {
                //display loader
                console.log("now fetching jobtypes");
                var progressloader = document.getElementsByClassName(
                    "progressloader"
                );
                progressloader.innerHTML = "<h3>Fetching data</h3>";
                Axios.get("/api/data/categories").then(res => {
                    //hide loader
                    console.log("displaying jobtypes");
                    progressloader.innerHTML = "";
                    return (this.categories = res.data);

                    this.fetchJobDetails();
                });
            } catch (err) {
                console.log(err);
            }
        }
    },

    metaInfo: {
        title: "New Job - Onesha",
        // override the parent template and just use the above title only
        titleTemplate: null
    }
};
</script>
<style>
.carousel-caption {
    background: transparent !important;
}
</style>