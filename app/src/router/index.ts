import {createRouter, createWebHistory} from 'vue-router'
import Humidity from '@/components/Canvas/Humidity.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/humidity',
            component: Humidity
        },
    ]
})

export default router