import Vue from 'vue'
import Router from 'vue-router'
import Example from '../components/ExampleComponent'

Vue.use(Router)

var routers = [
    {
        path: '/',
        name: 'example',
        component: Example,
    },
];

var router = new Router({
    mode: 'history',
    routes: routers,
});

router.beforeEach((to, from, next) => {

    next();
});

export default router;