<template>
    <div>
        <section class="section section-lg section-shaped overflow-hidden my-0">
            <div class="shape shape-style-1 shape-warning">
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
                class="container py-0 pb-lg card"
                id="jobFormArea"
                v-if="job._id"
            >
                <div class="card-header text-primary">
                    <h5>{{ job.name + " from " + job.location + " runs " + String(job.description["Name of your business"]) }}</h5>
                </div>
                <div class="card-body text">
                    <div v-for="item in Object.keys(job.description)" class="description">
                      <span>{{ String(item)}} :</span><br>
                      <strong v-if="String(item) == 'Tick all sections to include in your profile' ">
                        <li v-if="typeof(job.description['Tick all sections to include in your profile']) === 'string'">{{ job.description['Tick all sections to include in your profile'] }} </li>
                        <li v-else v-for="key in Object.keys(job.description['Tick all sections to include in your profile'])">{{ key || job.description['Tick all sections to include in your profile'][key] }}</li>
                      </strong>
                      <strong v-if="String(item) == 'Please select the services you want'">
                        <li v-if="typeof(job.description['Please select the services you want']) == 'string'">{{ job.description['Please select the services you want'] }} </li>
                        <li v-else v-for="key in Object.keys(job.description['Please select the services you want'])">{{ key || job.description['Please select the services you want'][key] }}</li>
                      </strong>
                      <strong v-else>{{ String(job.description[item])}} </strong>
                    </div>
                    <div class="description">
                        <small>Created</small> :<br> {{ isDate(job.createdat) }}
                    </div>
                </div>

            </div>

            <section
                v-if="job._id == null"
                class="d-flex justify-content-center align-items-center"
                id="message"
            >

                <RotateSquare5 style="width: 300px; height: 300px;"></RotateSquare5>
            </section>
        </section>
    </div>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";
import JobForm from "./JobForm.vue";
import moment from 'moment';
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
            clientInfo: false,
            pricing: null,
            pricing1: '3 pages @ $35 (Ksh 3500) 7 pages @ $70 (Ksh 7000), 10+ pages @ $100 (Ksh 10000)',
            pricing2: '3 pages @ $25 (Ksh 2500), 7 pages @ $50 (Ksh 5000), 10+ pages @ $75 (Ksh 7500)'
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
        },
        job: function(val1, val2) {            
            this.job = val1;
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // vm.loadCategories();
            // next();
        });
    },
    created() {
        this.fetchJobDetails();
    },
    methods: {
        async fetchJobDetails() {
            Axios.get("/api/data/job-preview/" + this.slug).then(res => {
                this.notemplate = true;
                return (this.job = res.data.length ? res.data[0] : {});
                console.log(this.job)
                
            });
        },
        isDate(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a')
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
                var progressloader = this.$el.querySelector("#progressloader");
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