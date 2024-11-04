import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import IPage from '@/pages/InventarioPage.vue';
import CPage from '@/pages/ContabilidadPage.vue';
import AdminPage from '@/pages/AdminPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    {
        path: '/inventario',
        name: 'Inventario',
        component: IPage,
        meta: { requiresAuth: true, role: 'inventory' } // Protegido por rol
    },
    {
        path: '/contabilidad',
        name: 'Contabilidad',
        component: CPage,
        meta: { requiresAuth: true, role: 'accounting' } // Protegido por rol
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
        meta: { requiresAuth: true, role: 'admin' } // Protegido por rol
    },
    { path: '*', redirect: '/' }
];

const router = new Router({
  mode: 'history',
  routes
});

// Añadimos un guard para proteger las rutas
router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiredRole = to.meta.role;

    if (requiresAuth && (!user || user.role !== requiredRole)) {
        next('/login'); // Si no está autenticado o no tiene el rol correcto, redirige a login
    } else {
        next(); // Permite el acceso si tiene el rol adecuado o no necesita autenticación
    }
});

export default router;
