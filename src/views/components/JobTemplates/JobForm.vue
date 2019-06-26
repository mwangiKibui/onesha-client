<template>
    <div class="col-lg-10 justify-content-center">
        
        <card
            header-classes="pb-5"
            body-classes="px-lg-5"
            class="border-0"
            id="card-details"
        >
            <div id="usercategories">

                <div class=" text-center justify-content-center">
                    <h4 class="text-white">Select the field your business is in</h4>
                </div>

                <div
                    class="row justify-content-center mb-4"
                    style="text-align: center;"
                >
                    <select class="select form-control" placeholder="Select Industry" name="userIndustry" v-model="userIndustry">
                        <option disabled selected>Select your industry</option>
                        <option
                            v-for="(user, index) in usertypes"
                        >
                            {{ user.title }}
                        </option>
                    </select>
                </div>
                <br>
                <div
                    id="message2"
                >
                    <button
                        @click="hideCategories()"
                        class="btn btn-default" 
                    >Next</button>
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
            userIndustry: 'Select your industry',
            jobslug: this.jobs.slug,
            categories: null,
            businessprofiles: null,
            component: "order-template",
            usertypes: [
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Photography and Film"
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
                    title: "General Supplies"
                },
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Transport and Logistics"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Manufacturing and Petroleum"
                },
                {
                    avatar: {
                        file: "/assets/img/bg3.jpg"
                    },
                    title: "Fashion and Design"
                },
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Agricultural Products"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Engineeering and Construction"
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
        hideCategories() {
            // console.log(this.userIndustry)
            // this.userIndustry = category;
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