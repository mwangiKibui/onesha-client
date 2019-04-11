<template>
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <card
                type="secondary"
                shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0"
                id="card-details"
            >
                <div id="usercategories">

                    <div class="mt-5 text-center justify-content-center">
                        <p class="text-default">Select your field</p>
                    </div>

                    <div
                        class="row justify-content-center"
                        style="text-align: center;"
                    >
                        <div
                            class="col-lg-4 col-sm-6"
                            v-for="(user, index) in usertypes"
                            :key="index"
                        >
                            <a
                                @click="hideCategories(user.title)"
                                class="m-2"
                            >
                                <div
                                    class="category"
                                    :style="`background-image: url(${user.avatar.file})`"
                                >
                                    <div class="category-bg-faded">
                                        <h5 class="text-white mt-3">{{ user.title }}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="jobDetails">
                    <!-- <keep-alive> -->
                    <component
                        v-bind:is="component"
                        @response="childComponentResponse"
                        :jslug="this.jobslug"
                        :jdata="this.jobs"
                        :category="this.userIndustry"
                    ></component>
                    <!-- </keep-alive> -->

                </div>
            </card>
        </div>
    </div>
    <!-- job template modal -->

</template>
<script>
import ProgressSection from "./JobProgress";
import JobCategories from "../Categories/UserCategory";
import OrderTemplate from "@/views/components/Partials/OrderTemplate.vue";
import OrderSuccess from "@/views/components/Partials/OrderSuccess.vue";
import OrderFailed from "@/views/components/Partials/OrderFailed.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    props: {
        jobs: Object,
        toShows: Number
    },
    data() {
        return {
            notemplate: true,
            clientInfo: false,
            userIndustry: null,
            jobslug: this.jobs.slug,
            categories: null,
            businessprofiles: null,
            component: "order-template",
            usertypes: [
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Photography and Design"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Tech and Software"
                },
                {
                    avatar: {
                        file: "/assets/img/bg3.jpg"
                    },
                    title: "Professional Consultancy"
                },
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Sales and Marketing"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Finance and Accounting"
                },
                {
                    avatar: {
                        file: "/assets/img/bg3.jpg"
                    },
                    title: "Other"
                }
            ],
            templateModal: this.toShows
        };
    },
    watch: {
        jobs: function(val1, val2) {            
            this.jobs = val1;
        },
        jobslug: function(val1, val2) {            
            this.jobslug = val1;
        }
    },
    components: {
        JobCategories,
        RotateSquare5,
        OrderTemplate,
        OrderFailed,
        OrderSuccess
    },
    mounted() {
        this.notemplate = true;
        this.$el.querySelector("#jobDetails").hidden = true;
    },
    methods: {
        hideCategories(category) {
            this.userIndustry = category;
            this.$el.querySelector("#usercategories").hidden = true;
            this.$el.querySelector("#jobDetails").hidden = false;

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
                this.$el.querySelector("#usercategories").hidden = false;
                this.$el.querySelector("#jobDetails").hidden = true;
            }
        }
    }
};
</script>