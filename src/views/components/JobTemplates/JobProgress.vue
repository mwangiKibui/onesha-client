<template>
    <div
        class=""
        style="width: 100%"
    >
        <base-progress
            type="warning"
            :value="this.progressval"
            v-model="progressval"
            label="Completion"
            :striped=false
            :animated=true
        ></base-progress>
    </div>
</template>
<script>
export default {
    props: ["progressval"]
};
console.log();
</script>
<style>
</style>
