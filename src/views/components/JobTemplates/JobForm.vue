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
                    <div v-if="clientInfo == false">
                        <!-- <template slot="header"> -->
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
                        <!-- </template> -->

                        <base-progress
                            v-if="templatedata.length"
                            type="success"
                            :value="progress"
                            :label="jobs.title"
                        ></base-progress>

                        <div v-if="templatedata.length"></div>
                        <div
                            v-if="templatedata.length"
                            class="templateModal"
                        >
                            <!-- <template-container :templated="this.template"></template-container> -->
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

                    <!-- <template slot="footer"> -->
                    <div v-if="clientInfo == false">
                        <div v-if="notemplate == true">
                        </div>
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
                            class="btn btn-success"
                            @click="submitClientInformation"
                        >Submit</button>
                    </div>
                    <!-- </template> -->
                </div>
            </card>
        </div>
    </div>
    <!-- job template modal -->

</template>
<script>
import ProgressSection from "./JobProgress";
import TemplateContainer from "./TemplateContainer";
import JobCategories from "../Categories/UserCategory";
import BaseRadio from "@/views/components/Common/BaseRadio.vue";
import BaseCheckbox from "@/views/components/Common/BaseCheckbox.vue";
import BaseProgress from "@/views/components/Common/BaseProgress.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    props: {
        jobs: Object,
        toShows: Number
    },
    data() {
        return {
            templateIndex: 1,
            templatedata: {},
            template: {},
            progress: 0,
            filledindata: {},
            notemplate: true,
            clientInfo: false,
            userIndustry: null,
            jobslug: null,
            categories: null,
            businessprofiles: null,
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
            ]
        };
    },
    components: {
        ProgressSection,
        TemplateContainer,
        JobCategories,
        BaseRadio,
        BaseCheckbox,
        RotateSquare5
    },
    created() {
        this.notemplate = true;
        this.loadJobTemplates(this.jobs.slug);
    },
    watch: {
        $route(to, from) {
            // react to route changes...
            console.log(this.notemplate);
        }
    },
    methods: {
        hideCategories(category) {
            this.$el.querySelector("#usercategories").hidden = true;
            this.$el.querySelector("#jobDetails").hidden = false;
            this.filledindata["industry"] = category;
        },
        hideJobDetails() {
            this.$router.go();
            this.$el.querySelector("#usercategories").hidden = false;
            this.$el.querySelector("#jobDetails").hidden = true;
            window.location.reload(true);
        },
        /**
         * Load templates from database for specified job type.
         *
         * Returns an array of template questions.
         */
        async loadJobTemplates(jslug) {
            if (this.filledindata) {
                Object.keys(this.filledindata).forEach(
                    entry => delete this.filledindata[entry]
                );
            }
            this.jobslug = jslug;

            this.clientInfo = false;
            this.templateModal = true;
            this.progress = 0;
            this.templatedata = [];
            // do async loading of job templates
            const jobTemplate = await Axios.get(
                "/api/data/templates/" + this.jobslug
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

            this.$el.querySelector("#jobDetails").hidden = true;
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
            const mefail = `<div class="modal-body bg-gradient-error text-white" id="modal3">
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
            const messuccess = `<div class="modal-body bg-gradient-success text-white" id="modal2">
                        <div class="modal-header bg-gradient-success">
                            <h6 class="modal-title" id="modal-title-notification">Your request has been submitted</h6>
                            <button type="button" class="close" @click="hideJobDetails()" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="py-3 text-center">
                            <i class="ni ni-check-bold text-white ni-3x"></i>
                            <h4 class="heading mt-4 text-default">Success!</h4>
                            <p class="text-default">We have sent you an email with further instructions.</p>
                            </div>

                        </div>

                        <div class="modal-footer text-centered">
                            <button type="button" @click="hideJobDetails()" class="btn btn-white">Ok, Got it</button>
                        </div>

                        </div>`;
            const meresend = `<div class="modal-content bg-gradient-error text-white" id="modal3">
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
                window.location.reload(true);
            } else if (res.message == "failed") {
                this.$el.querySelector("#card-details").innerHTML = mefail;
                window.location.reload(true);
            } else {
                this.$el.querySelector("#card-details").innerHTML = meresend;
                window.location.reload(true);
            }
        }
    }
};
</script>