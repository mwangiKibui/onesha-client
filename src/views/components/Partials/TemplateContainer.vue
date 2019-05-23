<template>
    <form
        class="my-5"
        v-if="templated"
    >
        <div class="title">{{ templated.title }}</div><br>
        <div v-if="templated.feedback == 'single-select'">
            <div
                :name="templated._id"
                v-for="(option, index) in templated.options"
                :key="index"
            >
                <base-radio
                    class="mb-3"
                    :id="index"
                    v-model="filledindata[templated.title]"
                    :name="index"
                    :value="option"
                >{{ option }}</base-radio>
            </div>
        </div>
        <div v-if="templated.feedback == 'multi-select'">
            <div
                :name="templated._id"
                v-for="(option, index) in templated.options"
                :key="index"
            >  
                <base-checkbox
                    class="mb-3"
                    v-model="checkedItems[option]"
                    :value="option"
                    :id="option"
                >{{ option }}</base-checkbox>
            </div> 
        </div>
        <div v-if="templated.feedback == 'prompt'">
            <textarea
                :name="templated._id"
                v-model="filledindata[templated.title]"
                rows="2"
                class="form-control"
                required
            ></textarea>
        </div>
    </form>
</template>
<!-- -->
<script>
import BaseRadio from "@/views/components/Common/BaseRadio.vue";
import BaseCheckbox from "@/views/components/Common/BaseCheckbox.vue";
export default {
    name: "template-container",
    props: ["templated", "filledindata","jslug"],
    components: {
        BaseRadio,
        BaseCheckbox
    },
    data() {
        return {
            value: "",
            checkedItems: {}
        };
    },
    methods: {
        check: function(i) {
            let item = i;
            this.checkedItems[i] = i;
            if(this.jslug == 'new-creative-service'){
                this.filledindata['Please select the services you want'] = this.checkedItems;
            }else{
                this.filledindata['Tick all sections to include in your profile'] = this.checkedItems;
            }
        }
    },
    watch: {
        checkedItems: function (newVal, oldVal) {
            // console.log(this.checkedItems)
            if(this.jslug == 'new-creative-service'){
                this.filledindata['Please select the services you want'] = this.checkedItems;
            }else{
                this.filledindata['Tick all sections to include in your profile'] = this.checkedItems;
            }
            // console.log(this.filledindata)
        }
    }
};
</script>
