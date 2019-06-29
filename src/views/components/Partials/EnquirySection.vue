<template>
    <div>
        <div class="row justify-content-center enq">
            <a
                @click="showEnquirySec('quote')"
                class="btn colorSchemeBtn text-white mt-2"
            >Request A Quote</a>
            <a
                @click="showEnquirySec('enquire')"
                class="btn colorSchemeBtn text-white mt-2"
            >Make an Enquiry</a>
        </div>
        <div v-if="this.showEnquiry">
            <component
                :is="component2"
                @response="enquiryResponse"
                :type="this.enquiry"
            ></component>
        </div>

    </div>
</template>
<script>
import EnquiryForm from "@/views/components/Partials/EnquiryForm.vue";
import EnquirySuccess from "@/views/components/Partials/EnquirySuccess.vue";
import EnquiryFailed from "@/views/components/Partials/EnquiryFailed.vue";
export default {
    name: "enquiry-section",
    components: {
        EnquiryForm,
        EnquirySuccess,
        EnquiryFailed
    },
    data() {
        return {
            enquiry: "",
            showEnquiry: false,
            component2: "enquiry-form"
        };
    },
    methods: {
        hideEnquirySec() {
            this.$el.querySelector(".enq").innerHTML = "";
        },
        showEnquirySec(val) {
            this.showEnquiry = false;
            console.log(val);
            this.hideEnquirySec();
            this.showEnquiry = true;
            this.enquiry = val;
        },
        enquiryResponse(response) {
            console.log(response);
            if (response == "success") {
                this.component2 = "enquiry-success";
            }
            if (response == "failed") {
                this.component2 = "enquiry-failed";
            }
            if (response == "closemodal") {
                this.showEnquiry = false;
                this.component2 = "enquiry-section";
                this.showEnquiry = true;
            } else if (
                response !== "success" &&
                response !== "failed" &&
                response !== "closemodal"
            ) {
                this.showEnquiry = false;
                this.component2 = "enquiry-failed";
                this.showEnquiry = true;
            }
        }
    }
};
</script>