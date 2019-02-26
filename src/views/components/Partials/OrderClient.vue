<template>
    <form
        class="title"
        id="clientForm"
    >
        <h5 class="modal-title">You are almost there, just a few more details about you.</h5>
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
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
                    required
                />
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
                    required="true"
                />
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
                    required
                />
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
                    required
                />
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "order-client",
    props: ["templatedata", "filledindata"],
    data() {
        return { errors: [] };
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
    },
    methods: {
        checkForm: function(e) {
            if (this.name && this.age) {
                return true;
            }

            this.errors = [];

            if (!this.filledindata["clientName"]) {
                this.errors.push("Name required.");
            }
            if (!this.filledindata["clientEmail"]) {
                this.errors.push("Email required.");
            }
            if (!this.filledindata["clientPhone"]) {
                this.errors.push("phone Number required.");
            }
            if (!this.filledindata["clientLocation"]) {
                this.errors.push("Location required.");
            }

            e.preventDefault();
        }
    }
};
</script>