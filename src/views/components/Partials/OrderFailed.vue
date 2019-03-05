<template>
    <div
        class="modal-content bg-white text-danger"
        id="modal3"
    >
        <div class="modal-header bg-danger">
            <h6
                class="modal-title"
                id="modal-title-notification"
            >Your request was not submitted</h6>
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
                <i class="ni ni-fat-remove text-danger ni-3x"></i>
                <h4 class="heading mt-4 text-danger">ERROR!</h4>
                <p class="text-default">There was an error sending your order. Please check your details again.</p>
            </div>

        </div>

        <div class="modal-footer text-centered">
            <button
                type="button"
                @click="closeModal"
                class="btn btn-white"
            >Retry</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "order-failed",
    methods: {
        closeModal() {
            this.$emit("response", "closemodal");
        }
    }
};
</script>
