<template>
    <card id="card-details">
        <template slot="header">
            <h5
                        class="modal-title"
                        id="templateModalTitle"
                    >Enter your details to receive a sample corporate company profile</h5>
            <button
            type="button"
            class="close"
            @click="closeModal"
            aria-label="Close"
        >
            <span aria-hidden="true">×</span>
        </button>
        </template>
        <div class="modal-body">
            <form @submit.prevent="requestSample">
                <div class="my-2">
                    <div class="form-group">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-box-2"></i></span>
                            </div>
                            <input
                                type="text"
                                name="clientName"
                                v-model="filledindata['clientName']"
                                class="form-control"
                                placeholder="Your name"
                                required
                            >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                            </div>
                            <input
                                type="email"
                                name="clientEmail"
                                v-model="filledindata['clientEmail']"
                                class="form-control"
                                placeholder="Email address e.g. someone@example.com"
                                required
                            >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-building"></i></span>
                            </div>
                            <select class="select form-control" aria-placeholder="Select Ind" name="industry" required>
                            <option disabled selected>Select Industry</option>
                            <option value="fashion">Fashion &amp; Design</option>
                            <option value="media">Media, Photography and Film</option>
                            <option value="ict">ICT products and services</option>
                            <option value="business services">Professional Consultancy Services</option>
                            <option value="accounting">Hotel and Hospitality</option>
                            <option value="manufacturing">Manufacturing and Transport</option>
                            <option value="procurement">Supplies and Procurement</option>
                            <option value="real estate">Real Estate &amp; Construction</option>
                            <option value="other">Other</option>
                            </select>
                            <!-- <input class="form-control" placeholder="Industry" type="text"> -->
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <span id="message">
                        <button
                            class="btn btn-success"
                            type="submit"
                        >Submit</button>
                    </span>
                </div>
            </form>
        </div>
    </card>
</template>

<script>
import Axios from "axios";
export default {
    name: "request-sample",
    data() {
        return {
            filledindata: {}
        };
    },
    methods: {
        async requestSample() {
            //show loader
            this.$el.querySelector(
                "#message"
            ).innerHTML = `<div><p class="text-default">SENDING...</p></div>`;
            //fetch data
            const res = await Axios.post(
                `/api/data/sample-profile`,
                this.filledindata
            ).then(res => res.data);

            this.$emit("response", res.message);
        },
        closeModal() {
            this.$emit("response", "closemodal");
        }
    }
};
</script>
