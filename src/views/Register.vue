<template>
  <div>
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-default shape-skew alpha-4">
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
              <h1 class="display-2 colorSchemeHeading text-white">Hey there!</h1>
              <p
                class="lead text-white col-lg-10"
                style="margin-left: -10px"
              >Sign up, welcome aboard sailor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0 card-profile mt--300"
          >
            <!-- <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg">
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg">
                  Google
                </base-button>
              </div>
            </template>-->
            <template>
              <div class="text-center text-muted mb-2">
                <small>Sign up with credentials</small>
                <span id="errormsg"></span>
              </div>
              <form role="form">
                <base-input
                  alternative
                  v-model="filledindata['firstname']"
                  class="mb-3"
                  placeholder="Name"
                  addon-left-icon="ni ni-hat-3"
                ></base-input>
                <base-input
                  alternative
                  v-model="filledindata['email']"
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  required
                ></base-input>
                <base-input
                  alternative
                  v-model="filledindata['password']"
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  required
                ></base-input>
                <div class="text-muted font-italic">
                  <small>
                    password strength:
                    <span class="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <br>
                <base-checkbox>
                  <small>
                    I agree with the
                    <a href="terms">Terms</a> and
                    <a href="privacy">Privacy Policy</a>
                  </small>
                </base-checkbox>
                <div>
                  <span id="progressloader"></span>
                </div>
                <div class="text-center">
                  <base-button
                    type="primary"
                    nativeType="submit"
                    @click="submitDetails()"
                    class="my-4"
                  >Create account</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-2">
            <div class="col-12 text-center">
              <small class="text-light">Already a user?</small>&nbsp;
              <router-link to="/login">
                <small>Login to account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        await Axios.post("/api/auth/create-admin", this.filledindata).then(
          res => {
            //hide loader
            progressloader.innerHTML = "";
            var errormsg = this.$el.querySelector("#errormsg");
            res = res.data;

            if (res.message == "success") {
              //redirect to /login if valid
              errormsg.innerHTML =
                '<p class="text-success">' + res.message + "</p>";
              window.location.href = "/login";
            } else {
              errormsg.innerHTML =
                '<p class="text-danger">' + res.message + "</p>";
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style>
</style>
