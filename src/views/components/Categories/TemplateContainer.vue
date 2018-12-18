<template>
  <div class="my-5">
    <div>{{ template.title }}</div>
    <div class="py-3">
      <div v-if="template.feedback == 'single-select'">
        <div :name="template._id" v-for="(option, index) in template.options" :key="index">
          <input type="radio" :id="index" :name="template._id" :value="index">
          <label :for="index" class="mx-4">{{ option.option }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- -->
<script>
export default {
  props: {
    template: null
  },
  mounted() {
    console.log("Template mounted");
  }
};
</script>
