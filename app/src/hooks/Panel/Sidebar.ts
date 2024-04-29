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
            }
        }
    )

    // update location,x,y,z
    emitter.on('move',(newP:newP|any)=>{
        let min_dis=999,min_loc="",x,z
        Object.keys(location).forEach((loc_key:Array<Number>|any)=>{
            const dis=Math.sqrt((location[loc_key][0] - newP.x) ** 2 + (location[loc_key][1] - newP.z)**2)
            if(dis<min_dis){
                min_dis=dis
                min_loc=loc_key
            }
        })
        data.location=min_loc
        data.position.x=newP.x
        data.position.z=newP.z
        console.log(data) 
    })

    emitter.on('panel:date',(newD:newD | any)=>{
        data.date={...newD}
        const target_cloud_data = WeatherStore.Cloud.find(obj => obj.year == newD.year && obj.month == newD.month && obj.day == newD.day)
        data.weather.cloud=target_cloud_data?target_cloud_data.value:'0'
    })


    return data

}

