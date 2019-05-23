<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <SlideYDownTransition>
        <router-view/>
      </SlideYDownTransition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
document.title = 'Onesha - Connecting businesses to top creative services';

import { SlideYDownTransition } from "vue2-transitions";

export default {
  components: {
    SlideYDownTransition
  },
  metaInfo: {
      title: 'Onesha', // set a title
      titleTemplate: '%s  - Connecting businesses to top creative services', // title is now "My Example App - Yay!"
      htmlAttrs: {
        lang: 'en',
        amp: undefined // "amp" has no value
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:"keywords", content:"Briglobe, Onesha, Showcase, Digital, Online, Creative, Africa, Community, Visual, Portfolio, Professional" },
        { name:"author", content:"onesha.co.ke"},
        { name:"description", content:"Onesha enables businesses access top creative services from our wide pool of vetted creatives. Hire from top talent and get high quality company profiles."},
        { name:"http-equiv=X-UA-Compatible", content:"IE=edge"},
        { name:"viewport", content:"width=device-width,initial-scale=1"}
      ],
      link: [
        { rel: 'base', href: 'https://onesha.co.ke/' },
        { rel: 'favicon', href: '/assets/img/brand/favicon.png' }
      ],
      script: [
        { src: '//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js', async: true, defer: false }
      ]
  },
  created() {
    this.loadScripts()
  },
  methods: {
      loadScripts: function() {
          // start Google Analytics 
          (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date(); a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
              })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

              ga('create', 'UA- 106922338 -1', 'auto');
              ga('send', 'pageview');
              // gtag('config', 'AW-942723254');


          // start mixpanel Analytics 
          // const mixpanel1 = document.createElement('script')
          // mixpanel1.src = '//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js';
          // mixpanel1.async = true;
          // const page = document.querySelectorAll('script')[0];
          // page.parentNode.insertBefore(mixpanel1, page)
          (function (c, a) {
                      if (!a.__SV) {
                          var b = window; try { var d, m, j, k = b.location, f = k.hash; d = function (a, b) { return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null }; f && d(f, "state") && (j = JSON.parse(decodeURIComponent(d(f, "state"))), "mpeditor" === j.action && (b.sessionStorage.setItem("_mpcehash", f), history.replaceState(j.desiredHash || "", c.title, k.pathname + k.search))) } catch (n) { } var l, h; window.mixpanel = a; a._i = []; a.init = function (b, d, g) {
                              function c(b, i) {
                                  var a = i.split("."); 2 == a.length && (b = b[a[0]], i = a[1]); b[i] = function () {
                                      b.push([i].concat(Array.prototype.slice.call(arguments,
                                          0)))
                                  }
                              } var e = a; "undefined" !== typeof g ? e = a[g] = [] : g = "mixpanel"; e.people = e.people || []; e.toString = function (b) { var a = "mixpanel"; "mixpanel" !== g && (a += "." + g); b || (a += " (stub)"); return a }; e.people.toString = function () { return e.toString(1) + ".people (stub)" }; l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                              for (h = 0; h < l.length; h++)c(e, l[h]); var f = "set set_once union unset remove delete".split(" "); e.get_group = function () { function a(c) { b[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); e.push([d, call2]) } } for (var b = {}, d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++)a(f[c]); return b }; a._i.push([b, d, g])
                          }; a.__SV = 1.2; b = c.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
                              MIXPANEL_CUSTOM_LIB_URL : "file:" === c.location.protocol && "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"; d = c.getElementsByTagName("script")[0]; d.parentNode.insertBefore(b, d)
                      }
                  })(document, window.mixpanel || []);
                  mixpanel.init("86392d5bff1641208a82727142d08a91");

          //twitter conversion tracking
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','o1dc6');
          twq('track','PageView');
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','o1dc6');
          twq('track','PageView');
      }
  }
};
</script>
