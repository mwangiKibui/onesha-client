<template>
	<div
	 class="modal-body bg-gradient-success text-white"
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
			 aria-label="Close"
			 @click="closeModal"
			>
				<span aria-hidden="true">×</span>
			</button>
		</div>
		<div class="modal-body">

			<div class="py-3 text-center">
				<i class="ni ni-check-bold text-success ni-3x"></i>
				<h4 class="heading mt-4 text-success">Success!</h4>
				<p class="text-default">We have sent the sample profile to your email.</p>
			</div>

		</div>

		<div class="modal-footer text-centered">
			<button
			 type="button"
			 class="btn btn-white"
			 @click="closeModal"
			>Ok, Got it</button>
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
