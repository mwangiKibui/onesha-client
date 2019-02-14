<template>
	<div
	 class="modal-content bg-gradient-error text-white"
	 id="modal3"
	>
		<div class="modal-header bg-gradient-error">
			<h6
			 class="modal-title"
			 id="modal-title-notification"
			>Your request was not submitted</h6>
			<button
			 type="button"
			 class="close"
			 @click="hideJobDetails()"
			 aria-label="Close"
			>
				<span aria-hidden="true">×</span>
			</button>
		</div>
		<div class="modal-body">
			<div class="py-3 text-center">
				<i class="ni ni-fat-remove text-error ni-3x"></i>
				<h4 class="heading mt-4 text-error">Sorry!</h4>
				<p class="text-default">We encountered a problem sending the sample.</p>
			</div>
		</div>
		<div class="modal-footer text-centered">
			<button
			 type="button"
			 @click="hideJobDetails()"
			 class="btn btn-white"
			>Retry</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: "resend-sample"
	};
</script>
