    
    import { useWeatherStore } from '@/store/weather'
    import { get_rainfall, get_humidity,  get_uv_ray, get_wind, get_cloud } from "@/helper/http"

export default async function useWeather(){
    console.log("fetch weather data")
    const WeatherStore = useWeatherStore()

    const weatherData = await Promise.all([get_rainfall(), get_humidity(), get_uv_ray(), get_wind(),get_cloud()])
    WeatherStore.setRainfall(weatherData[0])
    WeatherStore.setHumidity(weatherData[1])
    WeatherStore.setUVRay(weatherData[2])
    WeatherStore.setWind(weatherData[3])
    WeatherStore.setCloud(weatherData[4])

    return true

}