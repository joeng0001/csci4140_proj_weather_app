import Date from "@/components/Panel/Options/Date.vue"
import {watch,shallowReactive} from 'vue'
import emitter from "@/helper/emitter"
export default function useDateTime(date:Date){
    const DateTimeOptionObj=shallowReactive({
        title: 'Date',
        content: Date,
        date
    })
    watch(() => DateTimeOptionObj.date, (newV:Date) => {
        emitter.emit('panel:date',{year: newV.getFullYear(), month:newV.getMonth()+1, day: newV.getDate()})
    })
    return {DateTimeOptionObj}
}