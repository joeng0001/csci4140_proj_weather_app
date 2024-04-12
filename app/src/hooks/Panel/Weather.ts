import WeatherOption from '@/components/Panel/Options/Weather.vue'
import { watch, shallowReactive } from 'vue'


export default function useWeatherOptionCollapses(defaultOptions:Array<string>){
    const WeatherOptionCollapses = shallowReactive(
        { title: "Weather", content: WeatherOption, options: defaultOptions },
    )
    watch(() => WeatherOptionCollapses.options, (newV) => {
        console.log("from index", newV)
    })
    return {WeatherOptionCollapses}
}


