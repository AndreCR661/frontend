import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import IPage from '@/pages/InventarioPage.vue';
import CPage from '@/pages/ContabilidadPage.vue';
import AdminPage from '@/pages/AdminPage.vue';
import UserManagement from '@/pages/vistas/GestionUsuarios.vue';
import PPManagement from '@/pages/vistas/GestionP.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    {
        path: '/inventario',
        name: 'Inventario',
        component: IPage,
        meta: { requiresAuth: true, role: 'inventario' }
    },
    {
        path: '/contabilidad',
        name: 'Contabilidad',
        component: CPage,
        meta: { requiresAuth: true, role: 'contabilidad' }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
        meta: { requiresAuth: true, role: 'admin' }
    },
    {
        path: '/gestion-usuarios',
        name: 'UserManagement',
        component: UserManagement,
        meta: { requiresAuth: true, role: 'admin' } 
    },
    {
        path: '/gestion-proyectos-provedores',
        name: 'PPManagement',
        component: PPManagement,
        meta: { requiresAuth: true, role: 'admin' } 
    },
    { path: '*', redirect: '/' }
];

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiredRole = to.meta.role;

    if (requiresAuth && (!user || user.role !== requiredRole)) {
        next('/login'); 
    } else {
        next(); 
    }
});

export default router;
