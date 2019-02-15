<template>
    <div
        class="modal-content bg-gradient-success text-white"
        id="modal2"
    >
        <div class="modal-header bg-gradient-success">
            <h6
                class="modal-title"
                id="modal-title-notification"
            >Your request has been submitted</h6>
            <button
                type="button"
                class="close"
                @click="closeModal"
                aria-label="Close"
            >
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">

            <div class="py-3 text-center">
                <i class="ni ni-check-bold text-white ni-3x"></i>
                <h4 class="heading mt-4 text-default">Success!</h4>
                <p class="text-default">We have sent you an email with further instructions.</p>
            </div>

        </div>

        <div class="modal-footer text-centered">
            <button
                type="button"
                @click="closeModal"
                class="btn btn-white"
            >Ok, Got it</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "order-success",
    methods: {
        closeModal() {
            this.$emit("response", "closemodal");
        }
    }
};
</script>
