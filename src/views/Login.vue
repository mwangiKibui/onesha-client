<template>
  <section>
    <div class="position-relative showcase">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="display-2 colorSchemeHeading text-white">Welcome Back</h1>
                <p
                  class="lead text-white col-lg-10"
                  style="margin-left: -10px"
                >Login with your details to continue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section section-skew">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <card
              type="secondary"
              shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-5 py-lg-5"
              class="border-0 card-profile mt--300"
            >
              <template>
                <div class="text-center text-muted mb-4">
                  <small>Sign in with your credentials</small>
                  <br>
                  <span id="err-msg"></span>
                </div>
                <form role="form">
                  <base-input
                    alternative
                    v-model="filledindata['email']"
                    class="mb-3"
                    placeholder="Email"
                    required
                    addon-left-icon="ni ni-email-83"
                  ></base-input>
                  <base-input
                    alternative
                    v-model="filledindata['password']"
                    type="password"
                    placeholder="Password"
                    required
                    addon-left-icon="ni ni-lock-circle-open"
                  ></base-input>
                  <base-checkbox>Remember me</base-checkbox>
                  <div>
                    <span id="progressloader"></span>
                  </div>
                  <div class="text-center">
                    <base-button
                      type="primary"
                      nativeType="submit"
                      @click="submitDetails"
                      class="my-4"
                    >Sign In</base-button>
                  </div>
                </form>
              </template>
            </card>
            <!-- <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                        </div>
            </div>-->
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      filledindata: {}
    };
  },
  methods: {
    /**
     * Submit login details
     */
    async submitDetails() {
      //check if details are correct
      //display loader
      var progressloader = this.$el.querySelector("#progressloader");
      progressloader.innerHTML = "<br><p>Authenticating...</p>";
      try {
        await Axios.post("/api/auth/signin", this.filledindata).then(res => {
          //hide loader
          progressloader.innerHTML = "";
          res = res.data;
          var errormsg = this.$el.querySelector("#err-msg");

          if (res.message == "success") {
            //redirect to /home if valid
            errormsg.innerHTML =
              '<p class="text-success">' + res.message + "</p>";
            window.location.href = "/dashboard";
          } else {
            errormsg.innerHTML =
              '<p class="text-danger">' + res.message + "</p>";
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
.section-shaped .shape-style-1 .shape-default {
  background: url("../assets/img/ill/Vectorbg.svg") no-repeat;
}
</style>
