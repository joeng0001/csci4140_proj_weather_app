import LocationOption from '@/components/Panel/Options/Location.vue'
import { watch, shallowReactive } from 'vue'


export default function useLocationOptionCollapses(){
    const LocationOptionCollapses = shallowReactive(
        { title: "Location", content: LocationOption, location: "" },
    )
    watch(() => LocationOptionCollapses.location, (newV) => {
        console.log("location change", newV)
    })
    return {LocationOptionCollapses}
}


