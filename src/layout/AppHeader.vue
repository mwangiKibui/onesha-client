<template>
    <header class="header-global">
        <base-nav
            class="navbar-main"
            transparent
            type
            effect="dark"
            expand
        >
            <a
                slot="brand"
                class="navbar-brand mr-lg-1"
                href="/"
            >
                <img src="/assets/img/brand/white.png">
            </a>

            <div
                class="row"
                slot="content-header"
                slot-scope="{closeMenu}"
            >
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="/assets/img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                    <router-link
                        to="/#process"
                        class="nav-link"
                        replace
                    >
                        <i class="ni ni-single-copy-04"></i>
                        <span class="nav-link-inner--text">HOW IT WORKS</span>
                    </router-link>
                </li>
                <base-dropdown
                    tag="li"
                    class="nav-item"
                >
                    <a
                        slot="title"
                        href="#"
                        class="nav-link"
                        data-toggle="dropdown"
                        role="button"
                    >
                        <i class="ni ni-bullet-list-67"></i>
                        <span class="nav-link-inner--text">SERVICES</span>
                    </a>
                    <router-link
                        to="/job/new-design-only"
                        class="dropdown-item"
                        tag="a"
                    >New Design Only</router-link>
                    <router-link
                        to="/job/new-design-&-structure"
                        class="dropdown-item"
                        tag="a"
                    >New Design plus structure</router-link>
                    <router-link
                        to="/job/redesign-existing-profile"
                        class="dropdown-item"
                        tag="a"
                    >Redesign of existing</router-link>
                    <router-link
                        to="/job/new-creative-service"
                        class="dropdown-item"
                        tag="a"
                    >Other Creative Services</router-link>
                </base-dropdown>
                <!-- <li class="nav-item">
                <router-link to="/projects" class="nav-link" replace>
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">OUR PORTFOLIO</span>
                </router-link>
                </li> -->
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a
                        href="/about"
                        class="nav-link"
                        replace
                    >
                        <i class="ni ni-single-02"></i>
                        <span class="nav-link-inner--text">
                            ABOUT US
                        </span>
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        href="https://blog.onesha.co.ke"
                        class="nav-link"
                        replace
                    >
                        <i class="ni ni-archive-2"></i>
                        <span class="nav-link-inner--text">
                            BLOG
                        </span>
                    </a>
                </li>
                <!-- 
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

// <!--Start of Tawk.to Script-->
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5bbb026bb033e9743d02b4e4/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();
//  <!--End of Tawk.to Script-->
</script>
<style>
</style>
