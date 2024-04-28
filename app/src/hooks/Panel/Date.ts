import Date from "@/components/Panel/Options/Date.vue"
import {watch,shallowReactive} from 'vue'
export default function useDateTime(date:Date){
    const DateTimeOptionObj=shallowReactive({
        title: 'Date',
        content: Date,
        date
    })
    watch(() => DateTimeOptionObj.date, (newV:Date) => {
        console.log("date change", newV)
    })
    return {DateTimeOptionObj}
}