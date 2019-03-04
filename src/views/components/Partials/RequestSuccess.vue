<template>
	<div
	 class="modal-body bg-gradient-success text-white"
	 id="modal3"
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
				<i class="ni ni-fat-remove text-success ni-3x"></i>
				<h4 class="heading mt-4 text-primary">SUCCESS!</h4>
				<p class="text-default">We have received your request and have sent you the confirmation email. Please check your email.</p>
			</div>

		</div>

		<div class="modal-footer text-centered">
			<button
			 type="button"
			 @click="closeModal()"
			 class="btn btn-white"
			>OK, Got it</button>
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
