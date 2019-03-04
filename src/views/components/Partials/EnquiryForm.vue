<template>
    <div class="row justify-content-center mt-2 pb-lg-2">
        <div
            class="col-lg-8"
            id="carddetails2"
        >
            <card
                gradient="secondary"
                shadow
                body-classes="p-lg-5"
            >
                {{this.enquiryType}}
                <p class="mt-0" v-if="this.enquiryType == 'quote'">Get a quote for the service you need done.</p>
                <p class="mt-0" v-if="this.enquiryType == 'enquire'">Your project is very important to us. Describe what you want done.</p>
                <base-input
                    class="mt-5"
                    alternative
                    placeholder="Your name"
                    name="name"
                    v-model="filledindata['name']"
                    addon-left-icon="ni ni-user-run"
                >
                </base-input>
                <base-input
                    alternative
                    placeholder="Email address"
                    name="email"
                    v-model="filledindata['email']"
                    addon-left-icon="ni ni-email-83"
                >
                </base-input>
                <base-input
                    alternative
                    placeholder="Location"
                    name="location"
                    v-model="filledindata['location']"
                    addon-left-icon="ni ni-pin-3"
                >
                </base-input>
                <base-input class="mb-4">
                    <textarea
                        class="form-control form-control-alternative"
                        name="message"
                        v-model="filledindata['message']"
                        rows="4"
                        cols="80"
                        placeholder="What do you need done?..."
                    ></textarea>
                </base-input>
                <span id="message2">
                    <base-button
                        type="default"
                        round
                        block
                        size="lg"
                        @click="submitClientRequest()"
                    >
                        Send Request
                    </base-button>
                </span>
            </card>
        </div>
    </div>
</template>
<script>
import Axios from "axios";
export default {
    name: "enquiry-form",
    props: ["type"],
    data() {
        return {
            filledindata: {},
            enquiryType: this.type
        };
    },
    methods: {
        async submitClientRequest() {
            //show loader
            this.$el.querySelector("#message2").innerHTML = `<div
											                    >
											                        <p
											                            class="text-default"
											                        >SENDING...</p>
											                    </div>`;
            //fetch data
            const res = await Axios.post(
                `/api/data/leave-us-message`,
                this.filledindata
            ).then(res => res.data);

            this.$emit("response", res.message);
        }
    }

};
</script>