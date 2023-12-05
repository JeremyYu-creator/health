import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // redirect: {
        //     name: 'Mode',
        //     params: {
        //         mode: 'personal',
        //     },
        // },
    },
    // {
    //     path: '/',
    //     name: 'Home',
    //     alias: '/index.html',
    //     component: Home,
    //     redirect: {
    //         name: 'Mode',
    //         params: {
    //             mode: 'personal',
    //         },
    //     },
    // },   
    // {
    //     // 登录页
    //     name: 'Login',
    //     alias: '/login.html',
    //     path: '/login',
    //     component: Login,
    // },

    // {
    //     path: '/404',
    //     name: 'NotFound',
    //     component: () => import('@/views/NotFound.vue'),
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404',
    // },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
},)
router.beforeEach(async (to,) => {
    NProgress.start()
    if (to.name === 'Login') return true
    try {
        // 校验版本兼容信息
        // await getVersionInfo()
        NProgress.set(0.5,)
        // 校验登录信息
        // await userValid()
        return true
    } catch (error: any) {
        if (error.message === 'cancel') return false
        return '/login'
    }
},)

router.afterEach(() => {
    // 进度条结束
    NProgress.done()
},)

export default router