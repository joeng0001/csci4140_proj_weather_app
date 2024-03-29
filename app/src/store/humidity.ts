import {defineStore} from 'pinia'

export const useHumidityStore = defineStore('humidity',{
    actions:{
        addLevel(n:any){
            this.$state.level+=n
        }
    },
    state(){
        return {
            level:1
        }
    }
})