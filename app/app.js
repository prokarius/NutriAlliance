import Vue from 'nativescript-vue';

import NutriAlliance from './components/NutriAlliance';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(NutriAlliance)])

}).$start();
