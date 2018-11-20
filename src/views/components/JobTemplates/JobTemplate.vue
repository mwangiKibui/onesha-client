<template>
    <!-- Modals -->
    <div class="row row-grid mt-5">
        <div class="col-lg-4">
            <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Social Media</h5>
            <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p><br>
            <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                        type="info"
                        icon="fa fa-cloud-download" @click="modals.modal1 = true">
                Request A Service 
            </base-button> 
            <modal :show.sync="modals.modal1">
                <h6 slot="header" class="modal-title" id="modal-title-default">Social Media</h6>

                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences
                    fly into your mouth.</p>

                <template slot="footer">
                    <base-button type="primary">Save changes</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-lg-4">
            <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Graphic Design</h5>
            <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p><br>
            <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                        type="info"
                        icon="fa fa-cloud-download" @click="modals.modal2 = true">
                Request A Service 
            </base-button>
            <modal :show.sync="modals.modal2">
                <h6 slot="header" class="modal-title" id="modal-title-default">Graphic Design</h6>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences
                    fly into your mouth.</p>

                <template slot="footer">
                    <base-button type="primary">Save changes</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.modal2 = false">Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-lg-4">
            <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Video and Motion Graphics</h5>
            <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p><br>
            <base-button class="btn btn-md btn-success btn-icon mb-3 mb-sm-0"
                        type="info"
                        icon="fa fa-cloud-download" @click="modals.modal3 = true">
                Request A Service 
            </base-button> 
            <modal :show.sync="modals.modal3">
                <div slot="header" class="modal-title" id="modal-title-default" style="width: 100%">
                  <h6>Motion Graphics Video</h6>
                  <ProgressSection :progressval="progressvalu"></ProgressSection>
                </div>
                
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences
                    fly into your mouth.</p>

                <template slot="footer">
                    <base-button type="primary" @click="moveToNext()">Proceed</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.modal3 = false">Close
                    </base-button>
                </template>
                
            </modal>
        </div>
    </div>
</template>
<script>
import Modal from "@/components/Common/Modal.vue";
import ProgressSection from "./JobTemplate1.vue";
export default {
  components: {
    Modal,
    ProgressSection
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false
      },
      progressvalu: 0,
      name: 'mee'
    };
  },
  methods: {
    moveToNext: function(){
      this.progressvalu += 10
      alert('Hello ' + this.progressvalu + '!')
      // console.log(progressvalu)
    }
  }
};
</script>
<style>
</style>
