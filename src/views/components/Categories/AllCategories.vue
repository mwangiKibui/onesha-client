<template>
    <div class="col-lg-12">
        <br><br>
        <div>
            <div class="row row-grid">
                <div class="col-lg-4">
                    <card
                        class="border-0 text-center"
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
                        <h6 class="text-success text-uppercase">New Design Only</h6>
                        <p class="description mt-3">Get your profile done using a unique look and design.</p>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="success"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-ruler-pencil"
                                    ></badge>
                                    <h6 class="mb-0">Choose from design samples given</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="success"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-satisfied"
                                    ></badge>
                                    <h6 class="mb-0">Request changes as needed</h6>
                                </div>
                            </li>
                        </ul>

                        <base-button
                            tag="a"
                            href="/job/new-design-only"
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
                        <icon
                            name="ni ni-ruler-pencil"
                            type="primary"
                            rounded
                            class="mb-4"
                        >
                        </icon>
                        <h6 class="text-primary text-uppercase">New Design plus content</h6>
                        <p class="description mt-3">Get your profile designed with new content and structure.</p>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="primary"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-ruler-pencil"
                                    ></badge>
                                    <h6 class="mb-0">Carefully crafted design components</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="primary"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-satisfied"
                                    ></badge>
                                    <h6 class="mb-0">Business intelligence for your content</h6>
                                </div>
                            </li>
                        </ul>

                        <base-button
                            tag="a"
                            href="/job/new-design-&-structure"
                            data-toggle="scroll"
                            type="primary"
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
                        <icon
                            name="ni ni-istanbul"
                            type="info"
                            rounded
                            class="mb-4"
                        >
                        </icon>
                        <h6 class="text-info text-uppercase">Redesign existing profile</h6>
                        <p class="description mt-3">Give your profile a new look with the content provided.</p>
                        <ul class="list-unstyled text-left d-sm-nones description">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="info"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-ruler-pencil"
                                    ></badge>
                                    <h6 class="mb-0">Choose from design samples given</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge
                                        type="info"
                                        circle
                                        class="mr-3"
                                        icon="ni ni-satisfied"
                                    ></badge>
                                    <h6 class="mb-0">Request changes as needed</h6>
                                </div>
                            </li>
                        </ul>

                        <base-button
                            tag="a"
                            href="/job/redesign-existing-profile"
                            data-toggle="scroll"
                            type="info"
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