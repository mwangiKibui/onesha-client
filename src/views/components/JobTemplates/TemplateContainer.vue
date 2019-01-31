<template>
    <div class="my-5">
        <div class="title">{{ template.title }}</div>
        <div v-if="template.feedback == 'single-select'">
            <div
                :name="template._id"
                v-for="(option, index) in template.options"
                :key="index"
            >
                <base-radio
                    class="mb-3"
                    :id="index"
                    v-model="filledindata[template.title]"
                    :name="index"
                    :value="option.option"
                >{{ option.option }}</base-radio>
            </div>
        </div>
        <div v-if="template.feedback == 'multi-select'">
            <div
                :name="template._id"
                v-for="(option, index) in template.options"
                :key="index"
            >
                <base-checkbox
                    class="mb-3"
                    :id="index"
                    v-model="filledindata[template.title]"
                    :name="index"
                    :value="option.option"
                >{{ option.option }}</base-checkbox>
            </div>
        </div>
        <div v-if="template.feedback == 'prompt'">
            <textarea
                :name="template._id"
                v-model="filledindata[template.title]"
                rows="2"
                class="form-control"
            ></textarea>
        </div>
    </div>
</template>
<!-- -->
<script>
export default {
    props: ["templated"],
    data() {
        return {
            filledintemplate: null,
            filledindata: {},
            template: this.templated
        };
    },

    watch: {
        $route(to, from) {
            // react to route changes...
            console.log(this.templated);
        }
    },
    methods: {
        pushTemplateData() {}
    }
};
</script>
