<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <SlideYDownTransition>
        <router-view/>
      </SlideYDownTransition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";

export default {
  components: {
    SlideYDownTransition
  }
};
</script>
