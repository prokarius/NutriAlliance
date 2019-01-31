import Vue from "nativescript-vue";

import VHome from "./components/VHome";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({
  render: h => h("frame", [h(VHome)])
}).$start();
