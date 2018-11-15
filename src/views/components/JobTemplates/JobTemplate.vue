<template>
  <div :class="[ isShown ? 'seen' : 'hidden' ]">
    <h1>{{ msg }}</h1>
    <br>
    <div>
        The best job description appears here and is shown
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShown: Boolean
  },
  data() {
      return {
        msg: "Job Title"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hidden {
    display: none;
  }
  .seen {
    display: inline;
  }
</style>