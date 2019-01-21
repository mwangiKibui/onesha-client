<template>
    <!-- Modals -->
    <div>

        <div class="mt-5 text-center justify-content-center">
            <p class="text-white">Select your occupation</p>
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
                <router-link
                    :to="`/categories/business-profiles`"
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
                </router-link>
            </div>

            <!-- <div
                class="col-lg-4 col-sm-6"
                v-for="(category, index) in categories"
                :key="index"
            >
                <router-link
                    :to="`/categories/${category.slug}`"
                    class="m-2"
                >
                    <div
                        class="category"
                        :style="`background-image: url(${category.avatar.file})`"
                    >
                        <div class="category-bg-faded">
                            <icon
                                :name="category.avatar.file"
                                gradient="white"
                                size="lg"
                                shadow
                                round
                                color="primary"
                            ></icon>
                            <h5 class="text-white mt-3">{{ category.title }}</h5>
                            <p class="text-white mt-3">{{ category.description }}</p>
                            <br />
                        </div>
                    </div>
                </router-link>
            </div> -->
        </div>
    </div>
</template>
<script>
import Axios from "axios";
export default {
    props: {
        categories: Array
    },
    data() {
        return {
            error: null,
            modalstater: false,
            showModal: false,
            jobtypes: null,
            usertypes: [
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Photographer"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Marketer"
                },
                {
                    avatar: {
                        file: "/assets/img/bg3.jpg"
                    },
                    title: "Fashion Designer"
                },
                {
                    avatar: {
                        file: "/assets/img/bg.jpg"
                    },
                    title: "Photographer"
                },
                {
                    avatar: {
                        file: "/assets/img/bg2.jpg"
                    },
                    title: "Marketer"
                },
                {
                    avatar: {
                        file: "/assets/img/bg3.jpg"
                    },
                    title: "Fashion Designer"
                }
            ]
        };
    },
    methods: {
        render: function(createElement) {
            return createElement(CategoryJobTypes);
        },
        popup: function(category, index) {
            this.modalstater = true;
            this.jobcategory = category;
            let el = this.$el.getElementsByClassName("sectionDisplay")[0];
            // el.scrollIntoView();
        },
        /**
         * Retrieve job types for the passed category
         *
         * @param {string} categorySlug - slug of the category clicked.
         */
        requestCategoryJobTypes(categorySlug) {
            // show progress indicator here
            Axios.get("/api/data/jobtype/" + categorySlug).then(
                res => (this.jobtypes = res.data)
            );
            this.modalstater = true;
        }
    }
};
</script>
<style>
.category {
    transition: 0.21s;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    max-height: 240px;
    overflow: hidden;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
}
.category:hover {
    /* border: 1px solid rgba(0, 0, 0, 0.3); */
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    box-shadow: 0px 2px 15px 2px rgba(250, 250, 250, 0.4);
    transform: translateY(-2px);
    webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
}
.category-bg-faded {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    padding: 15px 10px;
}
</style>
