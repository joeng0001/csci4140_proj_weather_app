import { watch, ref,defineEmits } from 'vue'


export default function useWeatherOption(){

    const options = ["Humidity ", "Rain Fall", "Sun Light", "UV Ray   ", "Wind     "]
    const emit = defineEmits(['update'])

    const model = ref([])
    watch(model, (newV) => {
        console.log("from Option", newV)
    })
    return {options,emit,model}
}