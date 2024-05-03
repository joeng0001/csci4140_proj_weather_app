import {defineStore} from 'pinia'

interface dateType{
    year:number|string,
    month:number|string,
    day:number|string
}

export const useDateStore = defineStore('date',{
    actions:{
        setDate(date:dateType|any){
            this.$state.date=date
        },
    },
    state(){
        return {
            date:{year:2023,month:1,day:1},
        }
    },
    getters:{
        getDate(state):dateType{
            return state.date
        },

    }
})


