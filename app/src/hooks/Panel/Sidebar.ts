import { location } from "@/constant";
import emitter from "@/helper/emitter";
import {reactive} from 'vue'
import { useWeatherStore } from "@/store/weather";
interface newP{
    x:number,
    y:number,
    z:number
}
interface newD{
    year:string,
    month:string,
    day:string
}

export default function useSidebar(){
    const WeatherStore=useWeatherStore()

    const data=reactive(
        {
            location:"深水埗",
            position:{
                x:0,z:0
            },
            date:{
                year:'2023',
                month:'1',
                day:'1'
            },
            weather:{
                cloud:'0' ,
                humidity:'0',
                rainfall:'0',
                wind:'0',
                uvRay:'0'
            }
        }
    )


    update_cloud()
    update_humidity()
    update_rainfall()
    update_wind()
    update_uvRay()
    // update location,x,y,z
    emitter.on('move',(newP:newP|any)=>{
        let min_dis=999,min_loc=""
        Object.keys(location).forEach((loc_key:Array<Number>|any)=>{
            const dis=Math.sqrt((location[loc_key][0] - newP.x) ** 2 + (location[loc_key][1] - newP.z)**2)
            if(dis<min_dis){
                min_dis=dis
                min_loc=loc_key
            }
        })
        data.location=min_loc
        data.position.x=newP.x.toFixed(2)
        data.position.z=newP.z.toFixed(2)
        update_humidity()
        update_rainfall()
        update_wind()
    })

    emitter.on('panel:date',(newD:newD | any)=>{
        data.date={...newD}

        const target_cloud_data = WeatherStore.Cloud.find(obj => obj.year == newD.year && obj.month == newD.month && obj.day == newD.day)
        data.weather.cloud=target_cloud_data?target_cloud_data.value:'0'

        update_cloud()
        update_humidity()
        update_rainfall()
        update_wind()
        update_uvRay()
    })


    return data

    function update_cloud(){
        const target_cloud_data = WeatherStore.Cloud.find(obj => obj.year == data.date.year && obj.month == data.date.month && obj.day == data.date.day)
        data.weather.cloud=target_cloud_data?target_cloud_data.value:'no data'
    }

    function update_humidity(){
        const target_humidity= WeatherStore.Humidity.find((humidity)=>{
            return humidity.place== data.location
        })
        const target_humidity_data=target_humidity?.data.find(obj => obj.year == data.date.year && obj.month == data.date.month && obj.day == data.date.day)
        data.weather.humidity=target_humidity_data?target_humidity_data.value:'no data'
    }

    function update_rainfall(){
        const target_rainfall= WeatherStore.Rainfall.find((rainfall)=>{
            return rainfall.place== data.location
        })
        const target_rainfall_data=target_rainfall?.data.find(obj => obj.year == data.date.year && obj.month == data.date.month && obj.day == data.date.day)
        data.weather.rainfall=target_rainfall_data?.value?target_rainfall_data.value:"no data"
    }

    function update_wind(){
        const target_wind= WeatherStore.Wind.find((wind)=>{
            return wind.place== data.location
        })
        const target_wind_data=target_wind?.data.find(obj => obj.year == data.date.year && obj.month == data.date.month && obj.day == data.date.day)
        data.weather.wind=target_wind_data?.value?target_wind_data.value:"no data"
    }
    function update_uvRay(){
        const target_uvRay_data=WeatherStore.UVRay.find(obj => obj.year == data.date.year && obj.month == data.date.month && obj.day == data.date.day)
        data.weather.uvRay=target_uvRay_data?.value?target_uvRay_data.value:"no data"
    }
}

