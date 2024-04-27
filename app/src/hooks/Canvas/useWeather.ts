    
    import { useWeatherStore } from '@/store/weather'
    import { get_rainfall, get_humidity, get_sun_time, get_uv_ray, get_wind } from "@/helper/http"

export default async function useWeather(){
    console.log("fetch weather data")
    const WeatherStore = useWeatherStore()

    const weatherData = await Promise.all([get_rainfall(), get_humidity(), get_sun_time(), get_uv_ray(), get_wind()])
    console.log(weatherData)
    WeatherStore.setRainfall(weatherData[0])
    WeatherStore.setHumidity(weatherData[1])
    WeatherStore.setSunTime(weatherData[2])
    WeatherStore.setUVRay(weatherData[3])
    WeatherStore.setWind(weatherData[4])

    return true

}