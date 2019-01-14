    <template>
    <div class="mb-lg-auto">
        <div class="rounded shadow-lg overflow-hidden ">
            <b-carousel id="carousel1"
                        controls
                        indicators>
                <!-- Text slides with image -->
                <b-carousel-slide img-blank img-alt="" style="max-height: 450px; ">
                    
                    <div class="row mt--100 py-0">
                        <div class="col-sm-5 order-md-1" style="width: 100%; height: 300px; background: url('assets/img/theme/img-2-1200x1000.jpg'); background-size:cover">
                        </div>
                        <div class="col-sm-7 order-md-2">
                            <h3 style="color: #00f">Social Media</h3>
                            <div class="pr-lg-5 text-default px-2">
                                <p>The kit comes with three pre-built pages.<br><br>
                                <ul class="list-unstyled text-left">
                                    <li class="py-1">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                            <h6 class="mb-0">Carefully crafted components</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                            <h6 class="mb-0">Super friendly support team</h6>
                                        </div>
                                    </li>
                                </ul></p> 
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
                </b-carousel-slide>
                <b-carousel-slide img-blank img-alt="" style="max-height: 450px; ">
                    
                    <div class="row mt--100 py-0">
                        <div class="col-sm-5 order-md-1" style="width: 100%; height: 300px; background: url('assets/img/theme/img-2-1200x1000.jpg'); background-size:cover">
                        </div>
                        <div class="col-sm-7 order-md-2">
                            <h3 style="color: #00f">Graphic Design</h3>
                            <div class="pr-lg-5 text-default px-2">
                                <p>The kit comes with three pre-built pages.<br><br>
                                <ul class="list-unstyled text-left">
                                    <li class="py-1">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                            <h6 class="mb-0">Carefully crafted components</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                            <h6 class="mb-0">Super friendly support team</h6>
                                        </div>
                                    </li>
                                </ul></p> 
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
                </b-carousel-slide>
                <b-carousel-slide img-blank img-alt="" style="max-height: 450px; ">
                    
                    <div class="row mt--100 py-0">
                        <div class="col-sm-5 order-md-1" style="width: 100%; height: 300px; background: url('assets/img/theme/img-2-1200x1000.jpg'); background-size:cover">
                        </div>
                        <div class="col-sm-7 order-md-2">
                            <h3 style="color: #00f">Motion Graphics</h3>
                            <div class="pr-lg-5 text-default px-2">
                                <p>The kit comes with three pre-built pages.<br><br>
                                <ul class="list-unstyled text-left">
                                    <li class="py-1">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                            <h6 class="mb-0">Carefully crafted components</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                            <h6 class="mb-0">Super friendly support team</h6>
                                        </div>
                                    </li>
                                </ul></p> 
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
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
    .carousel-caption {
        background: white;
    }
    .carousel-caption h3 {
        color: #33e;             ;
    }
</style>