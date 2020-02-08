import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from '../components/Login';
import Registration from '../components/Registration';

const GradientGenerator = resolve => {
    require.ensure(['../components/GradientGenerator.vue'], () => {
        resolve(require('../components/GradientGenerator.vue'))
    });
}

const routes = [{
    path: '/',
    name: 'login',
    component: Login
},
{
    path: '/registration',
    name: 'registration',
    component: Registration     
},
{
    path: '/generator',
    name: 'generator',
    component: GradientGenerator
}];


const router = new VueRouter({
    routes,
    mode: 'history'
})
router.push({ name: "login"});
export default router;
