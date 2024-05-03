import {defineStore} from 'pinia'
import { type HumidityData,type HumidityObj,type Humidity,type HumidityMappedData} from '@/types/Weather'
import { type RainfallData,type RainfallObj,type Rainfall,type RainfallMappedData } from '@/types/Weather'
import { type Cloud, type CloudData, type CloudMappedData } from '@/types/Weather'
import { type Wind, type WindObj, type WindData,type WindMappedData } from '@/types/Weather'
import { type UVRay,type UVRayData,type UVRayMappedData } from '@/types/Weather'

export const useWeatherStore = defineStore('weather',{
    actions:{
        setHumidity(arr:Humidity){
            arr.map((placeData:HumidityObj)=>{
                placeData.data.map((obj:any)=>{ 
                    return humidity_Rainfall_Wind_Cloud_Map(obj)
                })
                return placeData
            })
            this.$state.Humidity=arr
        },
        setRainfall(arr:Rainfall){
            arr.map((placeData:RainfallObj)=>{
                placeData.data.map((obj:any)=>{ 
                   return humidity_Rainfall_Wind_Cloud_Map(obj)
                })
                return placeData
            })
            this.$state.Rainfall=<never>arr
        },
        setWind(arr:Wind){
            arr.map((placeData:WindObj)=>{
                placeData.data.map((obj:any)=>{ 
                   return humidity_Rainfall_Wind_Cloud_Map(obj)
                })
                return placeData
            })
            this.$state.Wind=<never>arr
        },
        setCloud(arr:Cloud){
            arr.map((placeData:any)=>{
                return humidity_Rainfall_Wind_Cloud_Map(placeData)
            })
            this.$state.Cloud=<never>arr
        },
        setUVRay(arr:UVRay){
            arr.map((obj:any)=>{
                return UVRayMap(obj)
            })
            this.$state.UVRay=<never>arr
        },
    },
    state(){
        return {
            Humidity:<Humidity>[],
            Rainfall:<Rainfall>[],
            UVRay:<UVRay>[],
            Wind:<Wind>[],
            Cloud:<Cloud>[],
        }
    },
    getters:{
        getHumidity(state):Array<Object>{
            return state.Humidity
        },
        getRainfall(state):Array<Object>{
            return state.Rainfall
        },
        getUVRay(state):Array<Object>{
            return state.UVRay
        },
        getWind(state):Array<Object>{
            return state.Wind
        },
        getCloud(state):Array<Object>{
            return state.Cloud
        },
    }
})



function humidity_Rainfall_Wind_Cloud_Map(obj:HumidityData|RainfallData|WindData|CloudData){
    delete Object.assign(obj, {['year']: obj["年/Year"] })["年/Year"];
    delete Object.assign(obj, {['month']: obj["月/Month"] })["月/Month"];
    delete Object.assign(obj, {['day']: obj["日/Day"] })["日/Day"];
    delete Object.assign(obj, {['value']: obj["數值/Value"] })["數值/Value"];
    delete Object.assign(obj, {['completeness']: obj["數據完整性/data Completeness"] })["數據完整性/data Completeness"];
    return <HumidityMappedData|RainfallMappedData|WindMappedData|CloudMappedData>obj
}

function UVRayMap(obj:UVRayData){
    delete Object.assign(obj, {['year']: obj["Year"] })["Year"];
    delete Object.assign(obj, {['month']: obj["Month"] })["Month"];
    delete Object.assign(obj, {['day']: obj["Day"] })["Day"];
    delete Object.assign(obj, {['value']: obj["Value"] })["Value"];
    delete Object.assign(obj, {['completeness']: obj["Completeness"] })["Completeness"];
    return <UVRayMappedData>obj
}