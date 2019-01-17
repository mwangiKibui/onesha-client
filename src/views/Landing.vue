<template>
    <section>

        <div class="position-relative">
            <!-- shape Hero -->
            <!-- <div class="blurred-image"></div> -->
            <section class="mt--300 d-lg-none"></section>
            <section class="section home-content section-lg section-hero">

                <div class="container shape-container py-md">
                    <div class="col px-0">
                        <div class="my-0 py-1 d-sm-nones"></div>
                        <div class="mt--300 d-lg-nones"></div>
                        <div class="justify-content-between align-items-center">
                            <div class="col-lg-11">
                                <h2
                                    class="display-3 text-left text-white"
                                    style="display: inline-block; float: center"
                                >Grow your business with African creatives
                                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                                </h2>
                                <p class="justify-content-between text-white text-left pt-2">
                                    <span class="lead"><span
                                            class="next"
                                            data-period="2000"
                                            data-type='[ "Get Creative", "Social Media", "Graphic Design", "Video Production", "Animation" ]'
                                        >Get Creative</span> <span class="d-lg-nones"><br></span>services at your budget!
                                        <span class=" d-sm-nones">Get services from vetted creatives with quick delivery to fit your schedule.<br> Choose a category, fill a simple job template, get your task done!</span></span>
                                    <span class="text-left d-sm-nones">
                                        <ul
                                            class="py-1 px-3"
                                            style="list-style: circle"
                                        >
                                            <li>Receive quality work, review upto 3 times</li>
                                            <li>Save time taken to compare creative professionals</li>
                                            <li>Get Project Management to reduce the hassle</li>
                                        </ul>
                                    </span>
                                </p>

                                <div class="btn-wrapper text-left">
                                    <a
                                        href="#request"
                                        data-toggle="scroll"
                                    >
                                        <base-button
                                            class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                                            type="info"
                                            icon="fa fa-cloud-download"
                                        >
                                            Request A Service
                                        </base-button>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div class="">
                            <p><br></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        <section
            class="section section-shaped my-0 mb-2 "
            style="background: white; color: black"
        >
            <div class="container">
                <div class="justify-content-between align-items-center">
                    <div class="mb-5 mb-lg-0 col-md-12">
                        <h2 class="text-default font-weight-light">All Services</h2>
                        <p class="lead text-default mt-4">We bring you services from the following.</p>

                    </div>
                    <transition
                        name="component-fade"
                        mode="out-in"
                    >
                        <div
                            id="actions"
                            class=""
                        >
                            <categories></categories>
                        </div>
                    </transition>
                </div>
            </div>
        </section>

        <section></section>

        <section
            class="section section-lg pt-lg-2 mt-200 bg-gradient-info"
            id="request"
        >
            <div class="container pt-lg">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Begin your request</h2>
                        <p class="lead text-white">Your journey starts here. Revamp your existing business profile, or get a new one.</p>
                    </div>
                </div>
                <JobCategories :categories="categories"></JobCategories>
            </div>
        </section>
        <section class="section section-lg pt-lg-2 mt-100 section-contact-us">
            <div class="container pt-lg">
                <div class="pb-lg-4">
                    <h4 class="mb-1 text-center">Want to work with us?</h4>
                </div>
                <div class="row justify-content-center pb-lg-4">
                    <div class="col-lg-8">
                        <card
                            gradient="secondary"
                            shadow
                            body-classes="p-lg-5"
                        >

                            <p class="mt-0">Your project is very important to us. Describe what you want done.</p>
                            <base-input
                                class="mt-5"
                                alternative
                                placeholder="Your name"
                                addon-left-icon="ni ni-user-run"
                            >
                            </base-input>
                            <base-input
                                alternative
                                placeholder="Email address"
                                addon-left-icon="ni ni-email-83"
                            >
                            </base-input>
                            <base-input
                                alternative
                                placeholder="Location"
                                addon-left-icon="ni ni-pin-3"
                            >
                            </base-input>
                            <base-input class="mb-4">
                                <textarea
                                    class="form-control form-control-alternative"
                                    name="name"
                                    rows="4"
                                    cols="80"
                                    placeholder="What do you need done?..."
                                ></textarea>
                            </base-input>
                            <base-button
                                type="default"
                                round
                                block
                                size="lg"
                            >
                                Send Request
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>

        </section>
        <section
            class="section section-sm bg-secondary mt-200  bg-gradient-info"
            id="process"
        >
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="mt-5 mb-lg-3 col-md-12">
                        <h2 class="text-white ">Our Process</h2>
                        <p class="lead text-white mt-4">We follow this process to ensure you quality.</p>

                    </div>
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-3">
                                <card
                                    class="border-0"
                                    hover
                                    shadow
                                    body-classes="py-5"
                                >
                                    <icon
                                        name="ni ni-istanbul"
                                        type="success"
                                        rounded
                                        class="mb-4"
                                    >
                                    </icon>
                                    <h6 class="text-success text-uppercase">Request a Service</h6>
                                    <p class="description mt-3">Onesha helps you flesh out your request using easy to use job templates that make filling forms a simple process.</p>

                                    <base-button
                                        tag="a"
                                        href="#request"
                                        data-toggle="scroll"
                                        type="success"
                                        class="mt-4"
                                    >
                                        BEGIN REQUEST
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card
                                    class="border-0"
                                    hover
                                    shadow
                                    body-classes="py-5"
                                >
                                    <icon
                                        name="ni ni-planet"
                                        type="primary"
                                        rounded
                                        class="mb-4"
                                    >
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Brief Processing</h6>
                                    <p class="description mt-3">Onesha processes your request into a job brief that we present to vetted creatives for quotation.<br><br> You then selected and approve the quote.</p>
                                    <br>
                                    <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="primary" class="mt-4">
                                        START HERE
                                    </base-button> -->
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card
                                    class="border-0"
                                    hover
                                    shadow
                                    body-classes="py-5"
                                >
                                    <icon
                                        name="ni ni-settings"
                                        type="primary"
                                        rounded
                                        class="mb-4"
                                    >
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Job Execution</h6>
                                    <p class="description mt-3">We start working on your job according to the brief. We send you samples for your approval.<br><br> You will then make a deposit to continue.</p>
                                    <br>
                                    <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="primary" class="mt-4">
                                        VIEW MORE
                                    </base-button> -->
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card
                                    class="border-0"
                                    hover
                                    shadow
                                    body-classes="py-5"
                                >
                                    <icon
                                        name="ni ni-check-bold"
                                        type="primary"
                                        rounded
                                        class="mb-4"
                                    >
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Job Delivery</h6>
                                    <p class="description mt-3">You receive the final samples and complete the payment upon being satisfied with the result.<br><br> You can choose your mode of delivery.</p>
                                    <br>
                                    <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="primary" class="mt-4">
                                        VIEW MORE
                                    </base-button> -->
                                </card>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section
            class="section section-lg bg-secondary"
            id="creatives"
        >
            <div class="container">
                <div class="row row-grid align-items-center">
                    <hr>
                </div>
                <div class="row">
                    <div class="col-lg-7 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i class="ni ni-building text-primary"></i>
                                </div>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3">What will you get?</h4>
                                <p class="s">With our wide pool of high quality, experienced creatives, we assure you of a satisfactory service that will meet and exceed your expectations. </p>
                            </div>
                        </div>
                        <div class="card shadow shadow-lg--hover mt-5">
                            <div class="card-body">
                                <div class="d-flex px-3">
                                    <div>
                                        <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i class="ni ni-satisfied"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <h5 class="title text-success">Customer Satisfaction is key</h5>
                                        <p>Get a professional looking business profile that will enable you get introductions, meetings and close sales even faster. We can guarantee you this..</p>
                                        <a
                                            href="#request"
                                            class="btn btn-success"
                                        >REQUEST NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 order-lg-2 ml-lg-auto">
                        <div class="mt-2 pl-md-5 pt-5">
                            <img
                                src="https://socialmedia.onesha.co.ke/assets/img/ill/ill-2.svg"
                                class="img-center img-fluid"
                            >
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section
            class="section section-lg pt-lg-0 mt-200 bg-gradient-info mb-5 "
            id="clients"
        >
            <div class="container">
                <div class="row justify-content-center mt-200">
                    <div class="col-sm-12 mt-2 mt-5">
                        <h2 class="text-white font-weight-light">We have worked with</h2>
                        <div class="row row-grid mt-5">
                            <div class="col-sm-2">
                                <img class="img-fluid img-back" style="background: url('assets/img/clients/pangea.jpg') "></img>
                                <p class="text-white mt-3">Pangea Accelerator</p>
                            </div>
                            <div class="col-sm-2">
                                <img src="assets/img/icons/eo.jpg" class="rounded-square img-back img-fluid">
                                <p class="text-white mt-3">EO Kenya</p>
                            </div>
                            <div class="col-sm-2">
                                <img class="img-fluid rounded-square img-back" style="background: url('assets/img/clients/weston.jpg');"/>
                                <p class="text-white mt-3">Weston Hotel</p>
                            </div>
                            <div class="col-sm-2">
                                <img class="img-fluid img-back" style="background: url('assets/img/clients/bdo.jpg'); "></img>
                                <p class="text-white mt-3">BDO Kenya</p>
                            </div>
                            <div class="col-sm-2">
                                <img class="img-fluid img-back" style="background: url('assets/img/clients/uber.jpg');"></img>
                                <p class="text-white mt-3">Uber Kenya</p>
                            </div>
                            <div class="col-sm-2">
                                <img class="img-fluid img-back" style="background: url('assets/img/clients/flexpay.jpg') "></img>
                                <p class="text-white mt-3">Flexpay Limited</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>

</template>

<script>
import Categories from "./components/Categories/AllCategories";
import JobCategories from "./components/Categories/Category";
import formAlert from "./components/Landing/DefaultPage";
import Axios from "axios";

let show = true;

export default {
    name: "home",
    components: {
        Categories,
        formAlert,
        JobCategories
    },
    data() {
        return {
            selectedAnimationIn: "",
            selectedAnimationOut: "",
            show: true,
            request: true,
            get: true,
            view: true,
            learn: true,
            categories: null,
            businessprofiles: null
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
    background-image: none;
    background-image: url("/assets/img/social-audit.jpg");
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 100vh !important;
}
.home-content {
    background-color: rgba(0, 0, 34, 0.7);
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
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;  width: 120px; height: 80px;  
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

