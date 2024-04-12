import DateTime from "@/components/Panel/Options/DateTime.vue"
import {watch,shallowReactive} from 'vue'
export default function useDateTime(date:Date){
    const DateTimeOptionObj=shallowReactive({
        title: 'Date',
        content: DateTime,
        date
    })
    watch(() => DateTimeOptionObj.date, (newV:Date) => {
        console.log("date change", newV)
    })
    return {DateTimeOptionObj}
}