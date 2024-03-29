import {createRouter, createWebHistory} from 'vue-router'
import Humidity from '@/components/Canvas/Humidity.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/humidity/:level?', //optional param
            component: Humidity,
            //props:true // props from params => defineProps([])
            props(route){
                return {...route.params}
            }
        },
    ]
})

export default router