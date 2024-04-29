import WeatherOption from '@/components/Panel/Options/Weather.vue'
import { watch, shallowReactive } from 'vue'
import emitter from '@/helper/emitter'

export default function useWeatherOptionCollapses(defaultOptions:Array<string>){
    const WeatherOptionCollapses = shallowReactive(
        { title: "Weather", content: WeatherOption, options: defaultOptions },
    )
    watch(() => WeatherOptionCollapses.options, (newV) => {
        emitter.emit('panel:weather',newV)
    })
    return {WeatherOptionCollapses}
}


