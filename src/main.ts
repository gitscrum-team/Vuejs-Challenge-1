import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import vueKanban from 'vue-kanban';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(vueKanban);

new Vue({
    router,
    store,
    render: (h) => h(App),
    data: {
        // put some init const data in here
        version: 1
    },
    created: function() {
        const a = this.$store;
        // tslint:disable-next-line: no-console
        console.log(a);
        // tslint:disable-next-line: no-console
        console.log('Boot');
    }
}).$mount('#app');
