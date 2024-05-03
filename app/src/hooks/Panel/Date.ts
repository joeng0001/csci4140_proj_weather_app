import Date from "@/components/Panel/Options/Date.vue"
import {watch,shallowReactive} from 'vue'
import emitter from "@/helper/emitter"
import { useDateStore } from "@/store/date"

export default function useDateTime(date:Date){
    const DateStore=useDateStore()

    const DateTimeOptionObj=shallowReactive({
        title: 'Date',
        content: Date,
        date
    })
    watch(() => DateTimeOptionObj.date, (newV:Date) => {
        DateStore.setDate({year: newV.getFullYear(), month:newV.getMonth()+1, day: newV.getDate()})
        emitter.emit('panel:date',{year: newV.getFullYear(), month:newV.getMonth()+1, day: newV.getDate()})
    })
    return {DateTimeOptionObj}
}