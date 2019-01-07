<template>
    <section>

        <div class="position-relative">
            <!-- shape Hero -->
            <!-- <div class="blurred-image"></div> -->
            <section class="mt--300 d-lg-none"></section>
            <section class="section home-content section-lg section-hero">
                
                <div class="container shape-container py-md">
                    <div class="col px-0">
                        <div class="my-1 py-4 d-sm-nones"></div>
                        <div class="mt--300 d-lg-none"></div>
                        <div class="justify-content-between align-items-center">
                            <div class="col-lg-11">
                                <h2 class="display-2 text-center text-white" style="display: block; float: center">Grow your business with African creatives 
                                    <!-- <span style="font-size: 0.5em">Your creative tasks sorted</span> -->
                                </h2>
                                <p class="justify-content-between big-show text-white text-center pt-2">
                                    <span class="lead">Get <span class="next text-info" data-period="2000" data-type='[ " Creative", "Social Media", "Graphic Design", "Video Production", "Animation" ]'> Creative</span> services <span class="d-lg-nones"><br></span>at your budget and with your schedule!</span><br>
                                    <span class="lead d-sm-nones"> Choose a category, fill a simple job template, get your task done!</span>
                                    <!-- <span class="d-lg-nones">Choose a category, fill a simple job template, get your task done!</span> -->
                                </p>
                                <div class="row justify-content-between big-show text-white text-center">   
                                    <span class="lead text-center d-sm-nones col-md-3" style="color: rgba(0,0,0,0)">.</span>
                                    <span class="lead text-center d-sm-nones col-md-9">
                                        <ul class="px-3 text-left" style="list-style: tick">
                                            <li>Receive quality work, review upto 3 times</li>
                                            <li>Save time taken to compare creative professionals</li>
                                            <li>Get Project Management to reduce the hassle</li>
                                        </ul>
                                    </span>
                                </div>
                                
                                <div class="btn-wrapper text-center"><br>
                                    <a href="#request" data-toggle="scroll">
                                        <base-button class="btn btn-lg btn-info btn-icon mb-3 mb-sm-0"
                                                    type="success"
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
                    <div class="col-sm-12 mt-2 mt-5">
                        <h2 class="text-white font-weight-light">We have worked with</h2>
                        <div class="row row-grid mt-5">
                            <div class="col-sm-2">
                                <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                            <div class="col-sm-2">
                                <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                            <div class="col-sm-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                            <div class="col-sm-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                            <div class="col-sm-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                            <div class="col-sm-2">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <p class="text-white mt-3">Client Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section></section>
        <section class="section section-lg pt-lg-0 mt-200" id="process">    
            <div class="container">
                <div class="row justify-content-center">
                    <div class="mb-5 mb-lg-0 col-md-12">
                        <h2 class="text-default font-weight-light">Our Process</h2>
                        <p class="lead text-default mt-4">We follow this process to ensure you quality.</p>
                        
                    </div>
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Request a Service</h6>
                                    <p class="description mt-3">Onesha helps you flesh out your request using easy to use job templates that make filling forms a simple process.</p>
                                   
                                    <base-button tag="a"  href="#request" data-toggle="scroll" type="success" class="mt-4">
                                        BEGIN REQUEST
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Brief Processing</h6>
                                    <p class="description mt-3">Onesha processes your request into a job brief that we present to vetted creatives for quotation.<br><br> You view the selected quotations then approve the quote.</p>
                                    <br>
                                    <!-- <base-button tag="a"  href="#request" data-toggle="scroll" type="primary" class="mt-4">
                                        START HERE
                                    </base-button> -->
                                </card>
                            </div>
                            <div class="col-lg-3">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-settings" type="primary" rounded class="mb-4">
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
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
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
        <section class="section section-lg pt-lg-0 mt-200 bg-gradient-default" id="request">    
            <div class="container pt-lg">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Begin your request</h2>
                        <p class="lead text-white">Revamp your existing business profile, or get a new one. See how all these happens.</p>
                    </div>
                </div>
                <JobCategories :categories="categories"></JobCategories>
            </div>
        </section>

        <section class="section bg-secondary mb-100">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'assets/img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                    class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design Flow</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="info" shadow rounded></icon>

                            <h3>Our Creatives</h3>
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
        
        <section class="section section-sm pt-lg-4 mt-400 section-contact-us">
            <div class="container">
                <div class="row justify-content-center ">
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
                                            cols="80" placeholder="What do you need done?..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        
    </section>
        
</template>

<script>
import Categories from "./components/Landing/Categories";
import formAlert from "./components/Landing/DefaultPage";
import JobCategories from "./components/JobTemplates/JobCategory";
import Axios from "axios";

let show = true;

export default {
  name: 'home',
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
      businessprofiles: null,
    };
  },

  methods: {
    pressed: function() {
      show = !show;
      // let area = document.getElementById("actions");
      // area.innerHTML = Categories;
    },
    enter: function(el) {
      el.classList.add('animated');
      el.classList.add(this.selectedAnimationIn);
    },
    leave: function(area) {
      el.classList.add('animated');
      el.classList.add(this.selectedAnimationOut);
    },
    /**
     * Load available categories from server
     */
    loadCategories() {
      try {
        Axios.get('/api/data/categories').then(res => this.categories = res.data);
      } catch (err) {
        // console.error(err);
      }
    },
    async loadBusinessProfiles(){
        try{
            return await Axios.get('/api/data/business-profiles').then(res => res.data)
        }catch(err){
            // console.log(err)
        }
    }
  },
  async mounted() {
    this.loadCategories();
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
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt;

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(() =>{
    that.tick();
  }, delta);
};

window.onload = function() {
  let elements = document.getElementsByClassName('next');
  for (let i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.next { border-right: .05em solid rgb(102, 88, 61)}';
  document.body.appendChild(css);
};</script>
<style>
    /* .big-show span{
    display: inline-flex !important;
    } */
    .position-relative{
        position: relative;
        background-image:  none;     
        background-image: url('/assets/img/social-audit.jpg');
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
    letter-spacing: .02em; /*Adjust as needed*/
    animation: 
        /* typing 1.5s steps(40, end),
        blink-caret .2s step-end infinite; */
        typing 1s steps(40) 1s 1 normal both,
        blink-caret 0.55s steps(50) infinite
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
    from { width: 0 }  
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    30% { border-color: orange; }
    }
</style>

