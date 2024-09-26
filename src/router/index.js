// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import IPage from '@/pages/InventarioPage.vue';
import CPage from '@/pages/ContabilidadPage.vue';
import AdminPage from '@/pages/AdminPage.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/i',
        name: 'Inventario',
        component: IPage
    },
    {
        path: '/c',
        name: 'Contabilidad',
        component: CPage
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '*',
        redirect: '/' // Redirige cualquier ruta no existente a la página de inicio
    }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
