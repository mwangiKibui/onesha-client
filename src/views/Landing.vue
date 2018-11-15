<template>
    <section>

        <div class="position-relative">
            <!-- shape Hero -->
            <!-- <div class="blurred-image"></div> -->
            <section class="mt--300 d-lg-none"></section>
            <section class="section home-content section-lg section-hero">
                
                <div class="container shape-container py-md">
                    <div class="col px-0">
                        <div class="my-1 py-4 d-sm-none"></div>
                        <div class="mt--300 d-lg-none"></div>
                        <div class="justify-content-between align-items-center">
                            <div class="col-lg-10">
                                <h2 class="display-3 text-left text-white" style="display: inline-block"><span class="next" data-period="2000" data-type='[ "Get Creative", "Social Media", "Graphic Design", "Video Production", "Animation" ]'></span> services at your budget!
                                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                                </h2>
                                <p class="justify-content-between text-white text-left pt-2">
                                    <span class="lead">Get services from vetted creatives with quick delivery to fit your schedule.<br> Choose a category, fill a simple job template, get your task done!</span>
                                    <span class="text-left">
                                        <ul class="py-1 px-3" style="list-style: circle">
                                            <li>Receive quality work, review upto 3 times</li>
                                            <li>Save time taken to compare creative professionals</li>
                                            <li>Get Project Management to reduce the hassle</li>
                                        </ul>
                                    </span>
                                </p>
                                
                                <div class="btn-wrapper text-left">
                                    <a href="#request" data-toggle="scroll">
                                        <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                                                    type="info"
                                                    icon="fa fa-cloud-download">
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
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-shaped my-0 mb-2 " style="background: white; color: black">
            <div class="container">
                <div class="justify-content-between align-items-center">
                    <div class="mb-5 mb-lg-0 col-md-12">
                        <h2 class="text-default font-weight-light">All Categories</h2>
                        <p class="lead text-default mt-4">We bring you services from these categories.</p>
                        
                    </div>
                    <transition name="component-fade" mode="out-in">
                        <div id="actions" class="">
                            <categories></categories>
                        </div>
                    </transition>  
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt-200 bg-default mb-5 ">    
            <div class="container">
                <div class="row justify-content-center mt-200">
                    <div class="col-sm-12 mt-2">
                        <h4 class="lead text-white mt-4">We have worked with</h4>
                        <div class="row row-grid mt-5">
                            <div class="col-sm-2">
                                <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                            <div class="col-xs-2">
                                <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                            <div class="col-xs-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                            <div class="col-xs-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                            <div class="col-xs-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                            <div class="col-xs-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-3">Client Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt-200">    
            <div class="container">
                <div class="row justify-content-center">
                    <div class="mb-5 mb-lg-0 col-md-12">
                        <h2 class="text-default font-weight-light">Our Process</h2>
                        <p class="lead text-default mt-4">We bring you services from these categories.</p>
                        
                    </div>
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Find Services</h6>
                                    <p class="description mt-3">Onesha helps you find services offered by our creative professionals ranging from several categories.</p>
                                    <div>
                                        <badge type="primary" rounded>Design</badge>
                                        <badge type="primary" rounded>Social Media</badge>
                                        <badge type="primary" rounded>Film</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        START HERE
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Request a Service</h6>
                                    <p class="description mt-3">Onesha helps you flesh out your request using easy to use job templates that make filling forms a breeze</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        BEGIN REQUEST
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">View Creatives</h6>
                                    <p class="description mt-3">Just want to look around? Feel free! Onesha has a ton of impressive portfolios from jobs done by our vetted creatives.</p>
                                    <div>
                                        <badge type="primary" rounded>marketing</badge>
                                        <badge type="primary" rounded>product</badge>
                                        <badge type="primary" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        VIEW MORE
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section section-lg mt--100">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Awesome features</h3>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Carefully crafted components</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Amazing page examples</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">Super friendly support team</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="info" shadow rounded></icon>

                            <h3>Our customers</h3>
                            <p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
                                Just make sure you enable them first via JavaScript.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <a href="#" class="font-weight-bold text-info mt-5">A beautiful UI Kit for impactful
                                websites</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-info shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Modern Interface</h4>
                                <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                                    thaws every summer, and that process will continue whatever happens.</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Awesome Support</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-success">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="info" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-info">Modular Components</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-info">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">The amazing Team</h2>
                        <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Ryan Tompson</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Romina Hadid</span>
                                    <small class="h6 text-muted">Marketing Strategist</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Alexander Smith</span>
                                    <small class="h6 text-muted">UI/UX Designer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">John Doe</span>
                                    <small class="h6 text-muted">Founder and CEO</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="info"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">We made website building easier for you.</h3>
                                <p class="lead text-white mt-3">I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I understand culture.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                             type="white" block size="lg">
                                    Download Vue
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Build something</h2>
                        <p class="lead text-white">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                            tihs year down to low ice.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Building tools</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Grow your market</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Launch time</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Want to work with us?</h4>
                            <p class="mt-0">Your project is very important to us.</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Do you love this awesome
                            <span class="text-success">Design System for Bootstrap 4?</span>
                        </h2>
                        <p class="lead">Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                            Creative Tim where you can find the Design System in HTML. Start a new project or give an
                            old Bootstrap project a new look!</p>
                        <div class="btn-wrapper">
                            <a href="https://www.creative-tim.com/product/vue-argon-design-system"
                               class="btn btn-primary mb-3 mb-sm-0">Download Vue</a>
                        </div>
                        <div class="text-center">
                            <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4">
                                    <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Bootstrap 4 - Most popular front-end component library">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.sketchapp.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Sketch - Digital design toolkit">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.adobe.com/products/photoshop.html" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg'"
                                             class="img-fluid  opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Vue.js - The progressive javascript framework">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://angularjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://reactjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script>
import Categories from "./components/Landing/Categories";
import formAlert from "./components/Landing/DefaultPage";
var show = true;

export default {
    name: "home",
    components: {
        Categories,
        formAlert
    },
    data() {
    return {
        selectedAnimationIn: '',
        selectedAnimationOut: '',
        show: true,
        request: true,
        get: true,
        view: true,
        learn: true,
        }
    },

    methods: {
        pressed: function() 
        {   show = !show;
            // var area = document.getElementById("actions");
            // area.innerHTML = Categories;
        },
        enter: function(el)
        {
            el.classList.add('animated');
            el.classList.add(this.selectedAnimationIn);
        },
        leave: function(area)
        {
            el.classList.add('animated');
            el.classList.add(this.selectedAnimationOut);
        }
    }
};
var TxtType = function(els, toRotate, period) {
        this.toRotate = toRotate;
        this.el = els;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
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

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
                console.log('rotating');
        var elements = document.getElementsByClassName('next');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
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
    .display-3 span{
    display: inline-flex !important;
    }
    .position-relative{
        position: relative;
        background-image:  none;     
        background-image: url('/img/theme/home.jpg');
        background-size: cover; 
        background-position: right;
        background-repeat: no-repeat;
        height: 100vh !important;          
    }
    .home-content{
        background-color: rgba(0, 0, 34, .7);
        z-index: 9;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .next{
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .05em solid rgb(102, 88, 61); /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    margin-right: 2px;
    color:#22cdef;
    letter-spacing: .02em; /*Adjust as needed*/
    animation: 
        /* typing 1.5s steps(40, end),
        blink-caret .2s step-end infinite; */
        typing 1.2s steps(44) 1s 1 normal both,
        blink-caret 0.55s steps(50) infinite
    }

    @media screen and (max-width: 580px) {
        .d-sm-none {
            display: none;
        }
    }

    /* The typing effect */
    @keyframes typing {
    from { width: 0 }  
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    30% { border-color: orange; }
    }
</style>

