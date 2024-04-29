import LocationOption from '@/components/Panel/Options/Location.vue'
import { watch, shallowReactive } from 'vue'
import emitter from '@/helper/emitter'

export default function useLocationOptionCollapses(){
    const LocationOptionCollapses = shallowReactive(
        { title: "Location", content: LocationOption, location: "" },
    )
    watch(() => LocationOptionCollapses.location, (newL) => {
        emitter.emit('panel:location', newL)
    })
    return {LocationOptionCollapses}
}


