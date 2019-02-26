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
            <div class="container py-0 pb-lg ">
                <div
                    class="row"
                    v-if="category.length"
                >
                    <div class="mb-5 mb-lg-0">
                        <section>
                            <div class="col-lg-7">
                                <h1 class="text-white font-weight-light">{{ category[0].title }}</h1>
                                <p class="lead text-white mt-4">{{ category[0].description }}. Choose a service below.</p>
                            </div>

                            <!-- display job types -->
                            <section class="col-lg-12">
                                <div class="row">
                                    <span style="color: rgba (0,0,0,0) !important;">.</span>
                                    <hr>
                                    <div class="col-md-12 mb-2">
                                        <div class="row justify-content-center">
                                            <div
                                                v-for="(jobtype, index) in category[0].jobtypes"
                                                :key="index"
                                                class="col-md-4 col-sm-6 mb-4"
                                                @click="loadJobTemplatesModal(jobtype)"
                                            >
                                                <div class="jobtype-container d-flex flex-column card bg-transparent">
                                                    <div class="jobtype-header">
                                                        <!-- image or jobtype illustration -->
                                                        <img
                                                            v-if="jobtype.slug == 'new-design-only'"
                                                            src="/assets/img/newdesign.jpg"
                                                        >
                                                        <img
                                                            v-if="jobtype.slug == 'redesign-existing-profile'"
                                                            src="/assets/img/redesign.jpg"
                                                        >
                                                        <img
                                                            v-if="jobtype.slug == 'new-design-&-structure'"
                                                            src="/assets/img/design-structure.jpg"
                                                        >
                                                    </div>
                                                    <div class="jobtype-title">{{ jobtype.title }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section v-if="!category.length">
                                <!-- display a some what 404 page to notify when no job types found for the category provided -->
                                <!-- display a centered section -->
                                <div>No job types for this category at the moment.</div>
                            </section>

                            <modal
                                :show.sync="templateModal"
                                style="padding: 0"
                            >
                                <keep-alive>
                                    <component
                                        v-bind:is="component"
                                        @response="childComponentResponse"
                                        :jslug="this.jobtype"
                                        :category="this.userIndustry"
                                    ></component>
                                </keep-alive>
                            </modal>
                        </section>

                        <!-- job template modal -->

                    </div>
                    <!-- <div class="col-lg-6 mb-lg-auto"></div> -->
                </div>

                <section
                    v-if="!category.length"
                    class="d-flex justify-content-center align-items-center"
                >
                    <RotateSquare5 style="width: 300px; height: 300px;"></RotateSquare5>

                </section>
            </div>
        </section>
    </div>
</template>
<script>
import Modal from "@/views/components/Common/Modal.vue";
import OrderTemplate from "@/views/components/Partials/OrderTemplate.vue";
import OrderSuccess from "@/views/components/Partials/OrderSuccess.vue";
import OrderFailed from "@/views/components/Partials/OrderFailed.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    components: {
        Modal,
        RotateSquare5,
        OrderTemplate,
        OrderFailed,
        OrderSuccess
    },
    props: {
        slug: String
    },
    data() {
        return {
            category: [],
            templateModal: false,
            notemplate: false,
            userIndustry: null,
            jobtype: null,
            clientInfo: false,
            component: "order-template"
        };
    },
    /**
     * On template mount, execute defined action below.
     *
     * Fetch all defined job types, grouped with their categories from database, and populate returned data as categories.
     */
    created() {
        this.notemplate = true;
        let urlParams = new URLSearchParams(window.location.search);
        let myParam = urlParams.get("cat");
        this.userIndustry = myParam;
        this.fetchCategoryJobTypes();
    },
    methods: {
        fetchCategoryJobTypes() {
            Axios.get("/api/data/jobtype-grouped/" + this.slug).then(res => {
                this.notemplate = true;
                return (this.category = res.data);
            });
        },
        loadJobTemplatesModal(jobtype) {
            this.progress = 0;
            this.templateModal = true;
            this.jobtype = jobtype.slug;
        },
        childComponentResponse(response) {
            if (response == "success") {
                this.component = "order-success";
            }
            if (response == "failed") {
                this.component = "order-failed";
            }
            if (response == "empty") {
                this.component = "order-failed";
            }
            if (response == "closemodal") {
                this.templateModal = false;
                this.component = "order-template";
            }
        }
    }
};
</script>
<style>
.jobtype-container {
    height: 180px;
    cursor: pointer;
    transition: 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.jobtype-container:hover {
    box-shadow: 0px 2px 25px 2px rgba(0, 0, 0, 0.4);
}
.jobtype-container .jobtype-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    max-width: 100%;
}
.jobtype-header img {
    width: 100%;
    height: 100%;
}
.jobtype-header video {
    width: 100%;
    height: 100%;
}
.jobtype-container .jobtype-title {
    position: absolute;
    height: 30%;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: white;
    background: -moz-linear-gradient(
        top,
        rgba(26, 96, 111, 0) 0%,
        rgba(26, 96, 111, 0) 1%,
        rgba(24, 87, 104, 0.91) 31%,
        rgba(21, 65, 89, 0.91) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        top,
        rgba(26, 96, 111, 0) 0%,
        rgba(26, 96, 111, 0) 1%,
        rgba(24, 87, 104, 0.91) 31%,
        rgba(21, 65, 89, 0.91) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to bottom,
        rgba(26, 96, 111, 0) 0%,
        rgba(26, 96, 111, 0) 1%,
        rgba(24, 87, 104, 0.91) 31%,
        rgba(21, 65, 89, 0.91) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001a606f', endColorstr='#e8154159',GradientType=0 );
}
</style>