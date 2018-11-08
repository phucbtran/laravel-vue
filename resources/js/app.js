import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './components/App'
import Example from './components/ExampleComponent'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/example',
            name: 'example',
            component: Example
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});