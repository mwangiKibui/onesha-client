<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-3 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg ">
            <div class="row">
                <div class="mb-5 mb-lg-0">
                    <section v-if="category.length">
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
                                            @click="loadJobTemplates(jobtype)"
                                        >
                                            <div class="jobtype-container d-flex flex-column card bg-transparent">
                                                <div class="jobtype-header">
                                                    <!-- image or jobtype illustration -->
                                                    <img :src="jobtype.avatar.file">
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
                            v-if="jobtype != null"
                        >

                            <div id="card-details">
                                <div v-if="clientInfo == false">
                                    <div slot="header">
                                        <!-- <div slot="header"> -->
                                        <h5
                                            v-if="templatedata.length"
                                            class="modal-title"
                                            id="templateModalTitle"
                                        >You are {{ Number(templatedata.length) - templateIndex }} {{ Number(templatedata.length) - templateIndex > 1 ? 'steps' : 'step'}} away from placing your order</h5>
                                        <h5
                                            v-if="!templatedata.length && notemplate == false"
                                            class="modal-title"
                                            id="templateModalTitle"
                                        >No template found.</h5>
                                        <!-- </div> -->
                                    </div>

                                    <base-progress
                                        v-if="templatedata.length"
                                        type="success"
                                        :value="progress"
                                        :label="jobtype.title"
                                    ></base-progress>

                                    <div v-if="templatedata.length"></div>
                                    <div
                                        v-if="templatedata.length"
                                        class="templateModal"
                                    >
                                        <div class="my-5">
                                            <div class="title">{{ template.title }}</div><br>
                                            <div v-if="template.feedback == 'single-select'">
                                                <div
                                                    :name="template._id"
                                                    v-for="(option, index) in template.options"
                                                    :key="index"
                                                >
                                                    <base-radio
                                                        class="mb-3"
                                                        :id="index"
                                                        v-model="filledindata[template.title]"
                                                        :name="index"
                                                        :value="option"
                                                    >{{ option }}</base-radio>
                                                </div>
                                            </div>
                                            <div v-if="template.feedback == 'multi-select'">
                                                <div
                                                    :name="template._id"
                                                    v-for="(option, index) in template.options"
                                                    :key="index"
                                                >
                                                    <base-checkbox
                                                        class="mb-3"
                                                        :id="index"
                                                        v-model="filledindata[template.title]"
                                                        :name="index"
                                                        :value="option"
                                                    >{{ option }}</base-checkbox>
                                                </div>
                                            </div>
                                            <div v-if="template.feedback == 'prompt'">
                                                <textarea
                                                    :name="template._id"
                                                    v-model="filledindata[template.title]"
                                                    rows="2"
                                                    class="form-control"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="clientInfo != false">
                                    <h5 class="modal-title">You are almost there, just a few more details about you.</h5>
                                    <div v-if="templatedata.length"></div><br>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-box-2"></i></span>
                                            </div>
                                            <input
                                                type="text"
                                                name="clientName"
                                                v-model="filledindata['clientName']"
                                                class="form-control"
                                                placeholder="Your name"
                                            >
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                            </div>
                                            <input
                                                type="email"
                                                name="clientEmail"
                                                v-model="filledindata['clientEmail']"
                                                class="form-control"
                                                placeholder="Your email address, e.g. someone@example.com"
                                            >
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-phone"></i></span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="clientPhone"
                                                v-model="filledindata['clientPhone']"
                                                class="form-control"
                                                placeholder="+254 7 ....."
                                            >
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-map-marker"></i></span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="clientLocation"
                                                v-model="filledindata['clientLocation']"
                                                class="form-control"
                                                placeholder="City / Town"
                                            >
                                        </div>
                                    </div>
                                </div>

                                <!-- no template defined -->
                                <div
                                    v-if="!template.length"
                                    id="message"
                                >
                                    <RotateSquare5
                                        class="text-center align-items-center"
                                        style="width: 100px; height: 100px;"
                                        label="Loading.."
                                    > Loading</RotateSquare5>
                                </div>
                                <!-- </template> -->

                                <div slot="footer">
                                    <div v-if="clientInfo == false">
                                        <div v-if="notemplate == true"></div>
                                        <span v-if="notemplate == false">
                                            <button
                                                class="btn btn-default"
                                                v-if="templateIndex >= 1"
                                                @click="loadPreviousTemplate(templateIndex)"
                                            >Previous</button>
                                            <button
                                                class="btn btn-dark"
                                                v-if="templateIndex !== templatedata.length - 1"
                                                @click="loadNextTemplate(templateIndex)"
                                            >Next</button>
                                            <button
                                                class="btn btn-success"
                                                v-if="templateIndex === templatedata.length - 1"
                                                @click="requestClientDetails"
                                            >Continue</button>
                                        </span>
                                    </div>
                                    <div
                                        v-if="clientInfo != false"
                                        id="message2"
                                    >
                                        <button
                                            class="btn btn-default"
                                            v-if="templateIndex >= 1"
                                            @click="loadPreviousTemplate(templateIndex)"
                                        >Previous</button>
                                        <button
                                            class="btn btn-success"
                                            @click="submitClientInformation"
                                        >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </modal>
                    </section>
                    <section
                        v-if="!category.length"
                        class="d-flex justify-content-center align-items-center"
                    >
                        <RotateSquare5 style="width: 300px; height: 300px;"></RotateSquare5>

                    </section>

                    <!-- job template modal -->

                </div>
                <!-- <div class="col-lg-6 mb-lg-auto"></div> -->
            </div>
        </div>
        <!-- <router-view></router-view> -->
    </section>
</template>
<script>
import Modal from "@/views/components/Common/Modal.vue";
import BaseRadio from "@/views/components/Common/BaseRadio.vue";
import BaseCheckbox from "@/views/components/Common/BaseCheckbox.vue";
import BaseProgress from "@/views/components/Common/BaseProgress.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    components: {
        Modal,
        BaseRadio,
        BaseCheckbox,
        RotateSquare5
    },
    props: {
        slug: String
    },
    data() {
        return {
            category: [],
            templateModal: false,
            notemplate: true,
            jobtype: null,
            templateIndex: 1,
            templatedata: {},
            template: {},
            progress: 0,
            filledindata: {},
            clientInfo: false,
            userIndustry: null
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
        hideJobDetails() {
            this.$el.querySelector("#modal1").hidden = true;
            this.$el.querySelector("#modal2").hidden = true;
            this.$el.querySelector("#modal3").hidden = true;
            this.$el.querySelector("#card-details").hidden = true;
        },
        fetchCategoryJobTypes() {
            Axios.get("/api/data/jobtype-grouped/" + this.slug).then(res => {
                this.notemplate = true;
                return (this.category = res.data);
            });
        },
        /**
         * Load templates from database for specified job type.
         *
         * Returns an array of template questions.
         */
        async loadJobTemplates(jobtype) {
            Object.keys(this.filledindata).forEach(
                entry => delete this.filledindata[entry]
            );
            this.clientInfo = false;
            this.templateModal = true;
            this.jobtype = jobtype;
            this.progress = 0;
            this.templatedata = [];
            // do async loading of job templates
            const jobTemplate = await Axios.get(
                "/api/data/templates/" + jobtype.slug
            ).then(res => res.data);
            this.templatedata = jobTemplate.length
                ? jobTemplate[0].templates
                : [];
            this.templateIndex = 0;
            this.template = this.templatedata[0];
            this.notemplate = false;
            this.$nextTick(function() {
                this.$el.querySelector("#message").innerHTML = "";
            });
        },
        /**
         * Loads previous template question given the current index
         *
         */
        loadPreviousTemplate(index) {
            if (this.templateIndex === 0) {
                this.templateIndex = 0;
                this.template = this.templatedata[this.templateIndex];
            } else {
                this.templateIndex -= 1;
                this.template = this.templatedata[this.templateIndex];
            }
            this.populateTemplateFeedback();
        },
        /**
         * Loads next template question given the current index
         *
         */
        loadNextTemplate(index) {
            if (this.templateIndex == this.templatedata.length - 1) {
                this.templateIndex = this.templatedata.length - 1;
                this.template = this.templatedata[this.templateIndex];
            } else {
                this.templateIndex += 1;
                this.template = this.templatedata[this.templateIndex];
            }
            this.populateTemplateFeedback();
        },
        /**
         * Will populate template entry from selected options.
         *
         * Called for every next or previous button click when filling in job templates.
         * Previously set object keys values are reset to the new selected option.
         */
        populateTemplateFeedback(end) {
            var elem = this.$el.querySelector(".templateModal");
            var title = elem.querySelector(".title").innerText;
            var inputs = Array.from(elem.querySelectorAll("input"));
            var label = "";
            var self = this;
            inputs.forEach(function(input) {
                if (input.checked) {
                    label = elem.querySelector(
                        'label[for="' + input.getAttribute("id") + '"]'
                    ).innerText;
                    if (self.filledindata[title] != undefined)
                        self.filledindata[title] = label;
                }
            });

            var index = end
                ? 1
                : Number(this.templateIndex) / Number(this.templatedata.length);

            this.progress = Math.ceil(index * 100);
        },
        /**
         * Submit template after client fills in.
         *
         * Created object will be sent after sanitization to remove unwanted characters.
         */
        requestClientDetails() {
            this.clientInfo = true;
            this.populateTemplateFeedback(true);
        },
        async submitClientInformation() {
            //show loader
            this.notemplate = true;
            this.$el.querySelector("#message2").innerHTML = "";
            this.$el.querySelector("#message").innerHTML = `<div
                    >
                        <p
                            class="text-default"
                        >SENDING...</p>
                    </div>`;
            //fetch data
            const res = await Axios.post(
                `/api/data/${this.slug}/client-templates`,
                this.filledindata
            ).then(res => res.data);
            const mefail = `<div class="modal-content bg-gradient-error text-white" id="modal3">
                        <div class="modal-header bg-gradient-error">
                            <h6 class="modal-title" id="modal-title-notification">Your request was not submitted</h6>
                            <button type="button" class="close" @click="hideJobDetails()" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="py-3 text-center">
                            <i class="ni ni-fat-remove text-error ni-3x"></i>
                            <h4 class="heading mt-4 text-error">ERROR!</h4>
                            <p class="text-default">There was an error sending you the confirmation email. Please try again.</p>
                            </div>

                        </div>

                        <div class="modal-footer text-centered">
                            <button type="button" @click="hideJobDetails()" class="btn btn-white">Retry</button>
                        </div>

                        </div>`;
            const messuccess = `<div class="modal-content bg-gradient-success text-white" id="modal2">
                        <div class="modal-header bg-gradient-success">
                            <h6 class="modal-title" id="modal-title-notification">Your request has been submitted</h6>
                            <button type="button" class="close" @click="hideJobDetails()" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="py-3 text-center">
                            <i class="ni ni-check-bold text-success ni-3x"></i>
                            <h4 class="heading mt-4 text-default">Success!</h4>
                            <p class="text-default">We have sent you an email with further instructions.</p>
                            </div>

                        </div>

                        <div class="modal-footer text-centered">
                            <button type="button" @click="hideJobDetails()" class="btn btn-white">Ok, Got it</button>
                        </div>

                        </div>`;
            const meresend = `<div class="modal-content bg-gradient-error text-white" id="modal">
                    <div class="modal-header bg-gradient-error">
                        <h6 class="modal-title" id="modal-title-notification">Your request was not submitted</h6>
                        <button type="button" class="close" @click="hideJobDetails()" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="py-3 text-center">
                            <i class="ni ni-fat-remove text-error ni-3x"></i>
                            <h4 class="heading mt-4 text-error">Sorry!</h4>
                            <p class="text-default">This request has already been submitted</p>
                        </div>
                    </div>
                    <div class="modal-footer text-centered">
                        <button type="button" @click="hideJobDetails()" class="btn btn-white">Retry</button>
                    </div>
                
                    </div>`;

            //success response
            if (res.message == "success") {
                this.$el.querySelector("#card-details").innerHTML = messuccess;
            } else if (res.message == "failed") {
                this.$el.querySelector("#card-details").innerHTML = mefail;
            } else {
                this.$el.querySelector("#card-details").innerHTML = meresend;
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