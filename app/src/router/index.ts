import {createRouter, createWebHistory} from 'vue-router'
// import Humidity from '@/components/Canvas/Humidity.vue'
import App from '@/App.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        // {
        //     path:'/humidity/:level?', //optional param
        //     component: Humidity,
        //     //props:true // props from params => defineProps([])
        //     props(route){
        //         return {...route.params}
        //     }
        // },
        {
            path:'/',
            component:App
        }
    ]
})

export default router