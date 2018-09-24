<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="#/landing">
                <img src="img/brand/white.png">
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#/landing">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">CREATIVES</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="/register"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to </p>
                            </div>
                        </a>
                        <a href="/login"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Portfolio</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Onesha to create your figital portfolio.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">SERVICES</span>
                    </a>
                    <router-link to="landing" class="dropdown-item">Landing</router-link>
                    <router-link to="profile" class="dropdown-item">Profile</router-link>
                    <router-link to="login" class="dropdown-item">Login</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <router-link to="login" class="nav-link nav-link-icon">
                        <i class="fa fa-user margin-r-5"></i>  
                        <span class="nav-link-inner--text "> LOGIN</span>
                    </router-link>
                </li>
                <li class="nav-item d-lg-none">
                    <router-link to="/register" class="nav-link nav-link-icon" style="text-align: left; border: 1px solid #eee; padding-left: 5px">
                        <i class="fa fa-user-plus margin-r-5"></i>  
                        <span class="nav-link-inner--text "><strong> BECOME A CREATIVE</strong></span>
                    </router-link>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link to="/register"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-user-plus mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Become a Creative</span>
                    </router-link>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

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
