<template>
    <div class="col-lg-12" id="request">
        <br><br>
        <div>
            <div class="row row-grid">
                <div class="col-lg-4">
                    <card
                        class="border-0 text-center"
                        shadow
                        body-classes="py-5"
                    >
                        <!-- <icon
                            name="ni ni-istanbul"
                            type="primary"
                            rounded
                            class="mb-4"
                        >
                        </icon> -->
                        <div class="card-header bg-transparent pt-0 px-0 mb-0">
                            <h6 class="text-uppercase text-primary">New Design Only</h6>
                        </div>
                        <p class="description mt-3">Get your profile done with the content you provided.</p><br>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-ruler-pencil"></i>
                                        </div>
                                    </div>
                                    <span class="description mb-0">Specify your theme or let our designers choose for you</span>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-satisfied"></i>
                                        </div>
                                    </div>
                                    <p class="description mb-0">Request changes as needed (upto 3 times)</p>
                                </div>
                            </li>
                        </ul>
                        <!-- <span>Starting from <strong>$50 <br>(Ksh. 5000)</strong></span><br> -->
                        <base-button
                            tag="a"
                            @click="gtag_report_conversion()"
                            href="/job/new-design-only#jobFormArea"
                            data-toggle="scroll"
                            type="success"
                            class="mt-4 text-white"
                        >
                            Get this service
                        </base-button>
                    </card>
                </div>
                <div class="col-lg-4">
                    <card
                        class="border-0 text-center"
                        shadow
                        body-classes="py-5"
                    >
                        <!-- <icon
                            name="ni ni-ruler-pencil"
                            type="primary"
                            rounded
                            class="mb-4"
                        >
                        </icon> -->
                        <div class="card-header bg-transparent pt-0 px-0 mb-0">
                            <h6 class="text-uppercase text-primary">New Design Plus Content</h6>
                        </div>
                        <p class="description mt-3">Get your profile designed with new content and structure.</p><br>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-ruler-pencil"></i>
                                        </div>
                                    </div>
                                    <p class="description mb-0">Choose from various profile content sections</p>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-satisfied"></i>
                                        </div>
                                    </div>
                                    <p class="description mb-0">Content research for your business</p>
                                </div>
                            </li>
                        </ul>
                        <!-- <span>Starting from <strong>$70 <br>(Ksh. 7000)</strong></span><br> -->
                        <base-button
                            tag="a"
                            @click="gtag_report_conversion()"
                            href="/job/new-design-&-structure#jobFormArea"
                            data-toggle="scroll"
                            type="success"
                            class="mt-4"
                        >
                            Get this service
                        </base-button>
                    </card>
                </div>
                <div class="col-lg-4">
                    <card
                        class="border-0 text-center"
                        shadow
                        body-classes="py-5"
                    >
                        <!-- <icon
                            name="ni ni-ruler-pencil"
                            type="primary"
                            rounded
                            class="mb-4"
                        >
                        </icon> -->
                        <div class="card-header bg-transparent pt-0 px-0 mb-0">
                            <h6 class="text-uppercase text-primary">Content Research Only</h6>
                        </div>
                        <p class="description mt-3">Get new content information your profile.</p><br>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-ruler-pencil"></i>
                                        </div>
                                    </div>
                                    <p class="description mb-0">Choose from various profile content sections</p>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-sm mr-3 icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                                        <i class="ni ni-satisfied"></i>
                                        </div>
                                    </div>
                                    <p class="description mb-0">Content research for your business</p>
                                </div>
                            </li>
                        </ul>
                        <!-- <span>Starting from <strong>$70 <br>(Ksh. 7000)</strong></span><br> -->
                        <base-button
                            tag="a"
                            @click="gtag_report_conversion()"
                            href="/job/content-research-only#jobFormArea"
                            data-toggle="scroll"
                            type="success"
                            class="mt-4"
                        >
                            Get this service
                        </base-button>
                    </card>
                </div>
            </div>
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
    color: #33e;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), white); */
    background: #11cdef;
}
</style>