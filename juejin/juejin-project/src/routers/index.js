import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from '../pages/Main.vue'
import Recommend from '../pages/Recommend.vue'
import Afterend from '../pages/Afterend.vue'
import Leadingend from '../pages/Leadingend.vue'
import Android from '../pages/Android.vue'
import Ios from '../pages/Ios.vue'
import Artificial from '../pages/Artificial.vue'
import Devtool from '../pages/Devtool.vue'
import Codelife from '../pages/Codelife.vue'
import Read from '../pages/Read.vue'
import Detail from '../pages/Detail.vue'
import Hot from '../pages/Hot.vue'
import Topic from '../pages/Topic.vue'
const routes = [

    {
        path: '/main',
        name: '/main',
        component: Main,
        children: [{
            path: 'recommend',
            name: 'recommend',
            component: Recommend
        },
        {
            path: 'afterend',
            name: 'afterend',
            component: Afterend
        },
        {
            path: 'leadingend',
            name: 'leadingend',
            component: Leadingend
        },
        {
            path: 'android',
            name: 'android',
            component: Android
        },
        {
            path: 'ios',
            name: 'ios',
            component: Ios
        },
        {
            path: 'artificial',
            name: 'artificial',
            component: Artificial
        },
        {
            path: 'devtool',
            name: 'devtool',
            component: Devtool
        },
        {
            path: 'codelife',
            name: 'codelife',
            component: Codelife
        },
        {
            path: 'read',
            name: 'read',
            component: Read
        },]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/hot',
        name: 'hot',
        component: Hot
    },
    {
        path: '/topic',
        name: 'topic',
        component: Topic
    },
    //重定向，如果过匹配到/就跳转到/recommend路由下
    { path: '/', redirect: '/main/recommend' }
]

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;