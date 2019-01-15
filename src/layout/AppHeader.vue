<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <a slot="brand" class="navbar-brand mr-lg-1" href="/">
        <img src="https://socialmedia.onesha.co.ke/assets/img/brand/white.png">
      </a>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="/">
            <img src="https://socialmedia.onesha.co.ke/assets/img/brand/blue.png">
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link to="/process#process" class="nav-link" replace>
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">HOW IT WORKS</span>
          </router-link>
        </li>
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">SERVICES</span>
          </a>
          <router-link to="/category/social-media" class="dropdown-item">New Design Only</router-link>
          <router-link to="/category/graphic-design" class="dropdown-item">New Design plus structure</router-link>
          <router-link to="/category/motion-graphics" class="dropdown-item">Redesign of existing</router-link>
        </base-dropdown>
        <!-- <li class="nav-item">
          <router-link to="/projects" class="nav-link" replace>
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">OUR PORTFOLIO</span>
          </router-link>
        </li> -->
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <!-- <li class="nav-item d-lg-none">
          <router-link
            to="/register"
            class="nav-link nav-link-icon"
            style="text-align: left; border: 1px solid #eee; padding-left: 5px"
          >
            <i class="fa fa-user-plus margin-r-5"></i>
            <span class="nav-link-inner--text">
              <strong>BECOME A CREATIVE</strong>
            </span>
          </router-link>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link to="/register" class="btn btn-neutral btn-icon">
            <span class="btn-inner--icon">
              <i class="fa fa-user-plus mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Become a Creative</span>
          </router-link>
        </li> -->
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/Common/BaseNav";
import BaseDropdown from "@/components/Common/BaseDropdown";
import CloseButton from "@/components/Common/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
