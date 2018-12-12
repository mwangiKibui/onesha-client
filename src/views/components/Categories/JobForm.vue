<template>
    <form role="form">        
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
    </form> 

     <!-- <v-content>

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
                                    
                <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                  
                  <v-text-field label="Street" v-model="registration.street" required></v-text-field>
                  <v-text-field label="City" v-model="registration.city" required></v-text-field>
                  <v-text-field label="State" v-model="registration.state" required></v-text-field>

                <v-btn flat @click.native="step = 1">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 3">Continue</v-btn>
                
              </v-stepper-content>
              <v-stepper-content step="3">
                
                <v-text-field label="Number of Tickets" type="number"
                              v-model="registration.numtickets" required></v-text-field>
                <v-select label="Shirt Size" v-model="registration.shirtsize" 
                          :items="sizes" required></v-select>
                
                <v-btn flat @click.native="step = 2">Previous</v-btn>
                <v-btn color="primary" @click.prevent="submit">Save</v-btn>
                
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>         
              
        </v-container>    
    
    </v-content> -->
</template>
<script src="https://unpkg.com/vuetify/dist/vuetify.min.js" type="text/javascript"></script>
<script>
import ProgressSection from "../JobTemplates/JobProgress";
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