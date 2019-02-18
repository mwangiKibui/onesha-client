<template>
    <div class="title">
        <h5 class="modal-title">You are almost there, just a few more details about you.</h5>
        <div v-if="templatedata.length"></div><br>
        <div class="form-group">
            <div class="input-group input-group-alternative mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-box-2"></i></span>
                </div>
                <input
                    type="text"
                    name="clientName"
                    v-model="filledindata['clientName']"
                    class="form-control"
                    placeholder="Your name"
                >
            </div>
        </div>
        <div class="form-group">
            <div class="input-group input-group-alternative mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                </div>
                <input
                    type="email"
                    name="clientEmail"
                    v-model="filledindata['clientEmail']"
                    class="form-control"
                    placeholder="Your email address, e.g. someone@example.com"
                >
            </div>
        </div>
        <div class="form-group">
            <div class="input-group input-group-alternative mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-phone"></i></span>
                </div>
                <input
                    type="tel"
                    name="clientPhone"
                    v-model="filledindata['clientPhone']"
                    class="form-control"
                    placeholder="+254 7 ....."
                >
            </div>
        </div>
        <div class="form-group">
            <div class="input-group input-group-alternative mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-map-marker"></i></span>
                </div>
                <input
                    type="text"
                    name="clientLocation"
                    v-model="filledindata['clientLocation']"
                    class="form-control"
                    placeholder="City / Town"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order-client",
    props: ["templatedata", "filledindata"],
    data() {
        return {};
    },
    mounted() {
        var elems = Array.from(this.$el.querySelectorAll(".form-group"));
        elems.forEach(function(elem) {
            var title = elem.querySelector("input").getAttribute("name");
            var inputs = Array.from(elem.querySelectorAll("input"));
            var label = "";
            var self = this;
            inputs.forEach(function(input) {
                if (input.checked) {
                    label = self.getAttribute("name");
                    if (self.filledindata[title] != undefined)
                        self.filledindata[title] = label;
                }
            });
        });
    }
};
</script>