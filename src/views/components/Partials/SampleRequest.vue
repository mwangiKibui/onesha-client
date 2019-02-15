<template>
    <card id="card-details">
        <template slot="header">
        </template>
        <div class="modal-body">
            <form @submit.prevent="requestSample">
                <div class="my-2">
                    <h5
                        class="modal-title"
                        id="templateModalTitle"
                    >Enter your details to receive a sample corporate company profile</h5>
                    <hr>
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
                                placeholder="Your email address, e.g. someone@example.com"
                                required
                            >
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
        }
    }
};
</script>
