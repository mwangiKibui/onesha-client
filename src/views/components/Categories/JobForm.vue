<template>
    <!-- <form role="form">        
        <div class="text-center text-muted mb-4">
            <small>Fill in your requirements</small>
        </div>
        <div class="text-right text-muted mb-1">
            <base-input alternative
                        class="mb-3"
                        placeholder="Name"
                        addon-left-icon="ni ni-hat-3">
            </base-input>
            <base-input alternative
                        class="mb-3"
                        placeholder="Email"
                        addon-left-icon="ni ni-email-83">
            </base-input>
            <base-input alternative
                        type="text"
                        placeholder="Location"
                        addon-left-icon="ni ni-map-marker">
            </base-input>
            <div class="text-muted font-italic text-left">
                <small>password strength:
                    <span class="text-success font-weight-700">strong</span>
                </small>
            </div>
            <base-button type="primary" class="my-4">Next</base-button>
        </div>
        <div class="text-center d-none">
            <template slot="footer">
                <base-progress type="primary" :value="progressvalue" v-model="progressvalue" label="Completion" :striped=true :animated=true></base-progress>
            </template>
            <base-button type="primary" class="my-4">Submit Request</base-button>
        </div>
    </form>  -->

    <!-- <v-app> -->
      <v-content data-app="v-content">
				<v-container>
          <v-stepper v-model="step" vertical>
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Your Information</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">Your Address</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Misc Info</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                  
                 <v-text-field label="Name" v-model="registration.name" required></v-text-field>
                 <v-text-field label="Email" v-model="registration.email" required></v-text-field>
                                    
                <base-button type="primary" class="my-4" @click.native="step = 2">Next</base-button>
              </v-stepper-content>
              <v-stepper-content step="2">
                  
                  <v-text-field label="Street" v-model="registration.street" required></v-text-field>
                  <v-text-field label="City" v-model="registration.city" required></v-text-field>
                  <v-text-field label="State" v-model="registration.state" required></v-text-field>

                <v-btn flat @click.native="step = 1">Previous</v-btn>
                <base-button type="primary" class="my-4" @click.native="step = 3">Next</base-button>
                
              </v-stepper-content>
              <v-stepper-content step="3">
                
                <v-text-field label="Number of Tickets" type="number"
                              v-model="registration.numtickets" required></v-text-field>
                <v-select label="Shirt Size" v-model="registration.shirtsize" 
                          :items="sizes" required></v-select>
                <div class="form-group focused">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-building"></i></span>
                    </div>
                    <select class="select form-control" aria-placeholder="Select Ind" name="industry" required="">
                      <option disabled="" selected="">Select Industry</option>
                      <option value="fashion">Fashion</option>
                      <option value="media">Media</option>
                      <option value="ict">ICT</option>
                      <option value="business services">Business Services</option>
                      <option value="accounting">Accounting</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="transport">Transport</option>
                      <option value="real estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                    <!-- <input class="form-control" placeholder="Industry" type="text"> -->
                  </div>
                </div>
                
                <v-btn flat @click.native="step = 2">Previous</v-btn>
                <base-button type="primary" class="my-4" @click.prevent="submit">Save</base-button>
                
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>         
              
        </v-container>    
      </v-content>
    <!-- </v-app>  -->
</template>
<script src="https://unpkg.com/vuetify/dist/vuetify.min.js" type="text/javascript"></script>
<script>
import ProgressSection from "../JobTemplates/JobProgress";
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
export default {
    data: () => ({
      step:1,
      registration:{
        name:null,
        email:null,
        street:null,
        city:null,
        state:null,
        numtickets:0,
        shirtsize:'XL'
      },
      sizes:['S','M','L','XL']
  }),
  components: {
    ProgressSection
  },
  methods:{
    submit() {
      alert('This is the post. Blah');
    }
  }
}

</script>