<template>
	<div class="modal-body bg-gradient-success text-white" id="modal2">
											                        <div class="modal-header bg-gradient-success">
											                            <h6 class="modal-title" id="modal-title-notification">Your message has been submitted</h6>
											                            <button type="button" class="close" @click="hideJobDetails()" aria-label="Close">
											                            <span aria-hidden="true">×</span>
											                            </button>
											                        </div>
											                        <div class="modal-body">

											                            <div class="py-3 text-center">
											                            <i class="ni ni-check-bold text-success ni-3x"></i>
											                            <h4 class="heading mt-4 text-success">Success!</h4>
											                            <p class="text-default">We have received your message.</p>
											                            </div>

											                        </div>

											                        <div class="modal-footer text-centered">
											                            <button type="button" @click="hideJobDetails()" class="btn btn-white">Ok, Got it</button>
											                        </div>

											                        </div>
</template>

<script>
	export default {
		name: "request-success",
		methods: {
			closeModal() {
				this.$emit("response", "closemodal");
			}
		}
	};
</script>
