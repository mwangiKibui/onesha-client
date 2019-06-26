<template>
    <section>

        <div class="position-relative">
            <!-- shape Hero -->
            <!-- <div class="blurred-image"></div> -->
            <section class="mt--300 d-lg-none"></section>
            <!-- <section class="section home-content section-lg section-hero">
                <div class="container shape-container py-md">
                    <div class="col px-0">
                        <div class="my-0 py-1 d-sm-nones"></div>
                        <div class="mt--300 d-lg-nones"></div>
                        <div class="justify-content-between align-items-center">
                            <div class="col-lg-11">
                                <h2
                                    class="display-3 text-left text-white"
                                    style="display: inline-block; float: center"
                                >Grow your sales pipeline with a professional company profile
                                </h2>
                                <p class="justify-content-between text-white text-left pt-2">
                                    <span class="lead">Get <span
                                            class="next"
                                            data-period="2000"
                                            data-type='[ "a new company profile", "a redesign of your profile", "industry content research" ]'
                                        >your corporate company profile</span> <span class="d-lg-nones"><br></span>done at a reasonable cost!

                                        <span
                                            class="description d-sm-nones"
                                            style="font-size: 1rem"
                                        ><br>Want an attractive profile that will enable you get introductions, meetings and close sales even faster?</span></span>
                                    <span class="text-left d-sm-nones">
                                        <ul
                                            class="py-1 px-3"
                                            style="list-style: tick"
                                        >
                                            <li>Get quicker business connections</li>
                                            <li>Increase your pool of potential clients</li>
                                            <li>Showcase the capability of your company</li>
                                        </ul>
                                    </span>
                                </p>

                                <div class="btn-wrapper justify-content-center">
                                    <a
                                        href="#request"
                                        data-toggle="scroll"
                                    >
                                        <base-button
                                            class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                                            type="info"
                                        >
                                            Request Profile
                                        </base-button>
                                    </a><span stye="color: transparent">.</span>
                                    <a
                                        href="#expect"
                                        data-toggle="scroll"
                                        class="btn btn-md btn-white btn-icon mb-3 mb-sm-0"
                                    >
                                        <span class="btn-inner--icon"><i class="ni ni-eye"></i></span>
                                        <span class="btn-inner--text">View Sample</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="row btn-wrapper justify-content-center floating">
                    <a
                        href="#about"
                        data-toggle="scroll"
                        class="btn-inner--icon text-white"><i class="ni ni-bold-down"></i>
                    </a>
                </div>
            </section> -->
        </div>
        <section
            class="section section-lg my-4 mb-2 bg-secondary"
            style="margin-top: -10px !important"
            id="about"
        >
            <div class="container mb-4">
                <div class="row btn-wrapper justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h2 class="display-3 text-primary">Build your sales pipeline faster</h2>
                        <p class="lead text-default">According to research, a company profile can shape the decision of a potential client. Here is what else a proper company profile can do for you.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5 text-center">
                    <div class="col-lg-4">
                        <div class="card card-lift--hover shadow border-0">
                            <a href="/learn-more" title="Learn More">
                            <img src="@/assets/img/theme/meetings.jpeg" class="card-img">
                            </a>
                        </div>
                        <h5 class="text-default mt-3">Secure More Meetings</h5>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-lift--hover shadow border-0">
                            <a href="/learn-more" title="Learn More">
                            <img src="@/assets/img/theme/social-audit.jpg" class="card-img">
                            </a>
                        </div>
                        <h5 class="text-default mt-3">Establish Credibility</h5>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-lift--hover shadow border-0">
                            <a href="/learn-more" title="Learn More">
                            <img src="@/assets/img/theme/localbi.jpeg" class="card-img">
                            </a>
                        </div>
                        <h5 class="text-default mt-3">Use Local Business Intelligence</h5>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="mt-5  col-md-12">
                        <p class=""><a
                                href="/learn-more"
                                    class="btn btn-success  text-white"
                                >LEARN MORE</a></p>
                    </div>
                </div>
            </div>
            <div class="container mt-3 text-center"><a href="/learn-more#who">Find out who needs a company profile</a></div>
        </section>

        
        <section class="section section-shaped my-4 mb-5">
            <div class="container " id="samp">
                <div class="row btn-wrapper justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h2 class="display-3 text-primary">Get Your Company Profile Done Here</h2>
                        <p class="lead text-default">We offer company profile design services to fit your business. Choose a service below or  <a @click="showSampleModal()" class="btn text-primary">view a sample</a></p>
                    </div>
                </div><br>
                <offers></offers>
            </div>            
        </section>

        <section class="section section-lg mt-4 bg-gradient-primary" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i class="ni ni-building text-primary"></i>
                                </div>
                            </div>
                            <div class="pl-4 text-white">
                                <h4 class="display-3 text-white">Why Choose Us?</h4>
                                <p class="">Here is why we are your best choice for this service </p>
                            </div>
                        </div>
                        <div class="card shadow shadow-lg--hover mt-3">
                            <div class="card-body crd">
                                <div class="d-flex px-3 mt-3">
                                    <div>
                                        <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i class="ni ni-delivery-fast"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <h5 class="title text-success">Speed of Delivery</h5>
                                        <p>With our wide pool of high quality, experienced creatives, we assure you of a quick turn around time that will meet your requirements.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="card-body crd">
                                <div class="d-flex px-3 mt-0">
                                    <div>
                                        <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i class="ni ni-chat-round"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <h5 class="title text-success">Request changes before accepting</h5>
                                        <p>Receive first draft of work, review upto 3 times. We ensure you get the quality you are looking for.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="card-body crd">
                                <div class="d-flex px-3">
                                    <div>
                                        <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i class="ni ni-album-2"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <h5 class="title text-success">Local stock photos and business intelligence</h5>
                                        <p>We will provide stock photography and use our research to keep your content accurate and relevant to your industry to help you reach your objectives.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="card-body crd">
                                <div class="d-flex px-3">
                                    <div>
                                        <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i class="ni ni-check-bold"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <h5 class="title text-success">We manage the process</h5>
                                        <p>Save time taken to compare creative professionals as we choose the right one for the job.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-5 col-sm-6 order-lg-2 ml-lg-auto" id="expect">
                        <div class="mt-2 pl-md-5 pt-5 text-white">
                            <img
                                src="/assets/img/ill/ill-2.svg"
                                class="img-center img-fluid"
                            />
                            <br>
                            <hr><br>
                            <p>Get a professional looking company profile that will enable you get introductions, meetings and close sales even faster. Delivered when you want it.</p>
                            <a
                                @click="showSampleModal()"
                                class="btn btn-success"
                            >Send Me A Sample</a>
                        </div>
                    </div>
                </div>
            </div>
            <modal
                :show.sync="showModal"
                style="padding: 0"
            >
                <component
                    :is="component"
                    @response="childComponentResponse"
                ></component>
            </modal>

        </section>

        <section
            class="section section-sm bg-secondary mt-200  bg-secondary"
            id="process"
        >
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="mt-5 mb-lg-3 col-md-12">
                        <h2 class="text-primary">Our Process</h2>
                        <p class="lead mt-4">We follow this process to ensure you quality. 
                            <a href="learn-more#process">Check out our process here</a>.</p>
                        <h2 class=""><a
                                        href="/support"
                                        class="btn btn-primary"
                                    >REVIEW OUR GUIDELINES</a></h2>
                    </div>
                    
                </div>
                <hr style="border:white">
            </div>
        </section>

        <section class="section section-lg  mt-100 bg-gradient-info">  
            <div class="container">
                <div class="row text-center justify-content-center" id="request">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Begin your request</h2>
                        <p class="lead text-white">Your journey starts here. Revamp your existing company profile, or get a new one.</p>
                    </div>
                </div>
                <!-- <JobCategories :categories="categories"></JobCategories> -->
                <categories></categories>
                <div class="row justify-content-center text-center">
                            <div class="mt-5 mb-lg-3 col-md-12 text-white">
                                <p>Need another service? We also offer graphic design, posters for social media and web design.</p>
                                <h2 class=""><a
                                        @click="gtag_report_conversion()"
                                        href="/job/new-creative-service"
                                        class="btn btn-white text-default"
                                    >REQUEST ANOTHER CREATIVE SERVICE</a></h2>
                            </div>
                        </div>
            </div>
        </section>

        <section
            id="clients"
            class="section section-lg pt-lg-2 bg-secondary mb-0 "
        >
            <div class="container">
                <div class="row justify-content-center mt-4">
                    <div class="mt-5">
                        <h2 class="text-primary font-weight-light">We have worked with</h2>
                    </div>
                </div>
                <div
                    class="row row-grid mt-5"
                    style="width:120%"
                >
                    <div class="col-lg-1 col-xs-4"><img alt="Rounded image" 
                            class="img-fluid rounded shadow" 
                            data-src="@/assets/img/clients/pangea.jpg" 
                            src="@/assets/img/clients/pangea.jpg" lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/eo.jpg" 
                            src="@/assets/img/clients/eo.jpg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/weston.png" 
                            src="@/assets/img/clients/weston.png"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/bdo.png" 
                            src="@/assets/img/clients/bdo.png"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow hover"
                            data-src="@/assets/img/clients/flexpay.jpeg" 
                            src="@/assets/img/clients/flexpay.jpeg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/uber.jpg" 
                            src="@/assets/img/clients/uber.jpg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/dafabet.jpg" 
                            src="@/assets/img/clients/dafabet.jpg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-2"><img
                            class="img-fluid rounded shadow"
                            data-src="@/assets/img/clients/taraji.jpg" 
                            src="@/assets/img/clients/taraji.jpg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow-lg "
                            data-src="@/assets/img/clients/gig.jpeg" 
                            src="@/assets/img/clients/gig.jpeg"  lazy="loaded"></div>
                    <div class="col-lg-1 col-xs-4"><img
                            class="img-fluid rounded shadow-lg"
                            data-src="@/assets/img/clients/og+a.jpg" 
                            src="@/assets/img/clients/og+a.jpg"  lazy="loaded"></div>
                </div>
            </div>
        </section>

        <section class="section section-lg pt-lg-2 mt-100 bg-gradient-default section-contact-us">
            <div class="container pt-5 text-white">
                <div class="pb-lg-4">
                    <h4 class="mb-1 text-center text-white">Want to work with us?</h4>                    
                </div>
                <div class="row justify-content-center enq"><br>
                    <a
                        @click="showEnquirySec('quote')"
                        class="btn btn-white text-primary"
                    >Request A Quote</a>
                    <a
                        @click="showEnquirySec('enquire')"
                        class="btn btn-white text-primary"
                    >Make an Enquiry</a>
               
                </div>
                <div v-if="this.showEnquiry">
                    <component
                        :is="component2"
                        @response="enquiryResponse"
                        :type="this.enquiry"
                    ></component>
                </div>
            </div>

        </section>
    </section>

</template>

<script>
import Modal from "@/components/Common/Modal.vue";
import JobCategories from "./components/Categories/Category";
import Categories from "./components/Landing/AllCategories";
import Offers from "@/views/components/Landing/Offers.vue";
import RequestSample from "@/views/components/Partials/SampleRequest.vue";
import RequestSuccess from "@/views/components/Partials/RequestSuccess.vue";
import RequestFailed from "@/views/components/Partials/RequestFailed.vue";
import EnquiryForm from "@/views/components/Partials/EnquiryForm.vue";
import EnquirySuccess from "@/views/components/Partials/EnquirySuccess.vue";
import EnquiryFailed from "@/views/components/Partials/EnquiryFailed.vue";
import EnquirySection from "@/views/components/Partials/EnquirySection.vue";
import Axios from "axios";

let show = true;

export default {
    name: "home",
    components: {
        Categories,
        JobCategories,
        Modal,
        Offers,
        RequestSample,
        RequestFailed,
        RequestSuccess,
        EnquiryForm,
        EnquirySuccess,
        EnquiryFailed,
        EnquirySection
    },
    metaInfo: {
        title: "Onesha - Home",
        // override the parent template and just use the above title only
        titleTemplate: null
    },
    data() {
        return {
            selectedAnimationIn: "",
            selectedAnimationOut: "",
            enquiry: "",
            showModal: false,
            showEnquiry: false,
            show: true,
            request: true,
            get: true,
            view: true,
            learn: true,
            categories: null,
            businessprofiles: null,
            filledindata: {},
            notemplate: true,
            clientInfo: false,
            component: "request-sample",
            component2: "enquiry-form",
            component3: "enquiry-section"
        };
    },

    methods: {
        pressed: function() {
            show = !show;
            // var area = document.getElementById("actions");
            // area.innerHTML = Categories;
        },
        enter: function(el) {
            el.classList.add("animated");
            el.classList.add(this.selectedAnimationIn);
        },
        leave: function(area) {
            el.classList.add("animated");
            el.classList.add(this.selectedAnimationOut);
        },
        /**
         * Load available categories from server
         */
        loadCategories() {
            try {
                //display loader
                var progressloader = document.getElementsByClassName(
                    "progressloader"
                );
                progressloader.innerHTML = "<h3>Fetching data</h3>";
                Axios.get("/api/data/categories").then(res => {
                    //hide loader
                    progressloader.innerHTML = "";
                    return (this.categories = res.data);
                });
            } catch (err) {
                console.log(err);
            }
        },
        async loadBusinessProfiles() {
            try {
                return await Axios.get("/api/data/business-profiles").then(
                    res => res.data
                );
            } catch (err) {
                // console.log(err)
            }
        },
        hideJobDetails() {
            this.$el
                .querySelector("#carddetails2")
                .parentNode.removeChild(
                    this.$el.querySelector("#carddetails2")
                );
        },
        showSampleModal() {
            this.showModal = true;
        },
        childComponentResponse(response) {
            if (response == "success") {
                this.component = "request-success";
            }
            if (response == "failed") {
                this.component = "request-failed";
            }
            if (response == "closemodal") {
                this.showModal = false;
                this.component = "request-sample";
            }
        },
        hideEnquirySec() {
            this.$el.querySelector(".enq").innerHTML = '';
        },
        showEnquirySec(val) {
            this.showEnquiry = false    ;
            console.log(val);
            this.hideEnquirySec();
            this.showEnquiry = true;
            this.enquiry  = val;
        },
        enquiryResponse(response) {
            console.log(response)
            if (response == "success") {
                this.component2 = "enquiry-success";
            }
            if (response == "failed") {
                this.component2 = "enquiry-failed";
                this.component2 = "enquiry-section";
                this.showEnquiry = true;
            }
            if (response == "closemodal") {
                this.showEnquiry = false;
                this.component2 = "enquiry-section";
                this.showEnquiry = true;
            }
            else if (response !== "success" && response !== "failed" && response !== "closemodal"){
                this.showEnquiry = false;
                this.component2 = "enquiry-section";
                this.showEnquiry = true;
            }
        }
        
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadCategories();
            next();
        });
    }
};

var TxtType = function(els, toRotate, period) {
    this.toRotate = toRotate;
    this.el = els;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName("next");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".next { border-right: .05em solid rgb(102, 88, 61)}";
    document.body.appendChild(css);
};
</script>
<style>
    .display-3 span {
        display: inline-flex !important;
    }
    .position-relative {
        position: relative;
        /* background-image: none; */
        /* background-image: url("../assets/img/social-bg.jpg") !important; */
        /* background-size: cover; */
        /* background-position: right; */
        /* background-repeat: no-repeat; */
        background: linear-gradient(114.59deg, #FF5E62 38.33%, #FF9966 91.76%) !important;
        /* height: 100vh !important; */
        min-height: 80vh !important;
    }
    .home-content {
        /* background-color: rgba(0, 0, 34, 0.7); */
        z-index: 9;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .next {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.05em solid rgb(102, 88, 61); /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        margin-right: 2px;
        color: #22cdef;
        letter-spacing: 0.02em; /*Adjust as needed*/
        animation: 
                                                                        /* typing 1.5s steps(40, end),
                                                                        blink-caret .2s step-end infinite; */ typing
                1s steps(40) 1s 1 normal both,
            blink-caret 0.55s steps(50) infinite;
    }
    .img-back {
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: contain !important;
        width: 100% !important;
        height: 300%;
        border: 0px solid;
        border-color: transparent;
        margin: 0%;
        border-radius: 0%;
    }
    .col-sm-1 {
        width: 130px !important;
    }
    .crd {
        padding: 0.8rem !important;
        padding-top: 200px;
    }

    @media screen and (max-width: 579px) {
        .d-sm-nones {
            display: none !important;
        }
    }

    @media screen and (min-width: 579px) {
        .d-sm-nones {
            display: block !important;
        }
        .d-lg-nones {
            display: none !important;
        }
    }

    /* The typing effect */
    @keyframes typing {
        from {
            width: 0;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        30% {
            border-color: orange;
        }
    }
</style>

