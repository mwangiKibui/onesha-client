<template>
    <card id="card-details">
        
        <button
            type="button"
            class="close"
            @click="closeModal"
            aria-label="Close"
        >
            <span>x</span>
        </button><br>
    
        <!-- <form @submit.prevent="submitClientInformation"> -->
        <div v-if="clientInfo == false">
            <div >
                
                <base-progress
                    v-if="templatedata && templatedata.length"
                    type="success"
                    :value="progress"
                    :label="jobname"
                ></base-progress>
                <h5
                    v-if="!templatedata.length && notemplate == false"
                    class="modal-title"
                    id="templateModalTitle"
                >
                    <RotateSquare5
                        class="text-center align-items-center"
                        style="width: 100px; height: 100px;"
                        label="Loading.."
                    > Loading</RotateSquare5>
                </h5>
            </div>
        </div>   

        <div v-if="templatedata && !templatedata.length"></div>
        <div>
            <!-- Show the template questions -->
            <keep-alive>
                <template-container
                    :templated="template"
                    :filledindata="this.filledindata"
                    v-if="templatedata && templatedata.length && clientInfo == false"
                    class="templateModal"
                ></template-container>
            </keep-alive>
        </div>
        

        <!-- Request the client details -->
        <div v-if="clientInfo == true">
            <order-client
                :templatedata="this.template"
                :filledindata="this.filledindata"
            ></order-client>
        </div>

        <!-- no template defined -->
        <div
            v-if="!templatedata"
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
                    role="button"
                    v-if="templatedata.length && templateIndex >= 1"
                    @click="loadPreviousTemplate(templateIndex)"
                >Previous</button>
                <button
                    class="btn btn-dark"
                    role="button"
                    v-if="templatedata.length && templateIndex !== templatedata.length - 1"
                    @click="loadNextTemplate(templateIndex)"
                >Next</button>
                <button
                    class="btn btn-success"
                    role="button"
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
        <!-- </form> -->
    </card>
</template>

<script>
import BaseProgress from "@/views/components/Common/BaseProgress.vue";
import OrderClient from "@/views/components/Partials/OrderClient.vue";
import TemplateContainer from "./TemplateContainer.vue";
import Axios from "axios";
import { RotateSquare5 } from "vue-loading-spinner";

export default {
    name: "order-template",
    props: ["jslug", "jdata","category"],
    components: {
        BaseProgress,
        TemplateContainer,
        OrderClient,
        RotateSquare5
    },
    data() {
        return {
            filledindata: {},
            clientInfo: false,
            notemplate: true,
            templateIndex: 1,
            jobtype: this.jslug,
            jobname: this.jdata.title,
            templatedata: {},
            template: {},
            progress: 0
        };
    },
    watch: {
        jslug: function(val1, val2) {
            this.jobtype = val1;
            this.loadJobTemplates(this.jobtype);
        },
        jdata: function(val1, val2) {
            this.jdata = val1;
        },
        templateIndex: function(val1, val2) {
            this.templateIndex = val1;
            this.template = this.templatedata[this.templateIndex];
        }
    },
    /**
     * On template mount, execute defined action below.
     *
     * Fetch all job templates, from given jobtype from database, and populate returned data as templatedata.
     */
    mounted() {
        this.loadJobTemplates(this.jobtype);
        //console.log(this.jobtype);
    },
    computed: {
        updateJobTemplates(jslug) {
            // do async loading of job templates
            this.loadJobTemplates(jslug);
            console.log("done");
        }
    },
    methods: {
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
            this.jobtype = jslug;
            this.clientInfo = false;
            this.templateModal = true;
            this.progress = 0;
            this.templatedata = [];
            // do async loading of job templates
            const jobTemplate = await Axios.get(
                "/api/data/templates/" + this.jobtype
            ).then(res => res.data);
            this.templatedata = jobTemplate.length
                ? jobTemplate[0].templates
                : [];
            this.templateIndex = 0;
            this.template = this.templatedata[0];
            this.notemplate = false;
            if (this.template) {
                this.$nextTick(function() {
                    //this.$el.querySelector("#message").innerHTML = "";
                });
            }

            //console.log(this.template);
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
            
            console.log(self.filledindata)            
            console.log(self.filledindata)
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
            this.$el.querySelector("#message2").innerHTML = `<div
                    >
                        <p
                            class="text-default"
                        >SENDING...</p>
                    </div>`;

            this.filledindata["industry"] = this.category;
            this.filledindata["jobtype"] = this.jobtype;

            if (Object.keys(this.filledindata).length < 10) {
                //show empty fields detected
                this.$emit("response", "empty");
            } //else give responses
            else {
                //fetch data
                const res = await Axios.post(
                    `/api/data/${this.jobtype}/client-templates`,
                    this.filledindata
                ).then(res => res.data);
                const mefail = ``;
                const messuccess = ``;
                const meresend = ``;

                //give response
                this.$emit("response", res.message);
            }
        },
        closeModal() {
            this.$emit("response", "closemodal");
        }
    }
};
</script>
