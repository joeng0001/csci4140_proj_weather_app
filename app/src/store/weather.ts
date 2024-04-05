import {defineStore} from 'pinia'
import { type HumidityData,type HumidityObj,type Humidity,type HumidityMappedData } from '@/types/Weather'
import { type RainfallData,type RainfallObj,type Rainfall,type RainfallMappedData } from '@/types/Weather'
import { type SunTime,type SunTimeData,type SunTimeMappedData } from '@/types/Weather'
import { type UVRay,type UVRayData,type UVRayMappedData } from '@/types/Weather'

export const useWeatherStore = defineStore('weather',{
    actions:{
        setHumidity(arr:Humidity){
            arr.map((placeData:HumidityObj)=>{
                placeData.data.map((data:HumidityData)=>{ 
                    return humidityAndRainfallMap(data)
                })
                return placeData
            })
            this.$state.Humidity=arr
        },
        setRainfall(arr:Rainfall){
            arr.map((placeData:RainfallObj)=>{
                placeData.data.map((obj:RainfallData)=>{ 
                   return humidityAndRainfallMap(obj)
                })
                return placeData
            })
            this.$state.Rainfall=<never>arr
        },
        setSunTime(arr:SunTime){
            arr.map((obj:SunTimeData)=>{
                return sunTimeMap(obj)
            })
            this.$state.SunTime=<never>arr
        },
        setUVRay(arr:UVRay){
            arr.map((obj:UVRayData)=>{
                return UVRayMap(obj)
            })
            this.$state.UVRay=<never>arr
        },
    },
    state(){
        return {
            Humidity:<Humidity>[],
            Rainfall:<Rainfall>[],
            SunTime:<SunTime>[],
            UVRay:<UVRay>[]
        }
    },
    getters:{
        getHumidity(state):Array<Object>{
            return state.Humidity
        },
        getRainfall(state):Array<Object>{
            return state.Rainfall
        },
        getSunTime(state):Array<Object>{
            return state.SunTime
        },
        getUVRay(state):Array<Object>{
            return state.UVRay
        },
    }
})



function humidityAndRainfallMap(obj:HumidityData|RainfallData){
    delete Object.assign(obj, {['year']: obj["﻿年/Year"] })["﻿年/Year"];
    delete Object.assign(obj, {['month']: obj["月/Month"] })["月/Month"];
    delete Object.assign(obj, {['day']: obj["日/Day"] })["日/Day"];
    delete Object.assign(obj, {['value']: obj["數值/Value"] })["數值/Value"];
    delete Object.assign(obj, {['completeness']: obj["數據完整性/data Completeness"] })["數據完整性/data Completeness"];
    return <HumidityMappedData|RainfallMappedData>obj
}

function sunTimeMap(obj:any){
    delete Object.assign(obj, {['date']: obj["﻿YYYY-MM-DD"] })["﻿YYYY-MM-DD"];
    delete Object.assign(obj, {['rise']: obj["RISE"] })["RISE"];
    delete Object.assign(obj, {['tran']: obj["TRAN."] })["TRAN."];
    delete Object.assign(obj, {['set']: obj["SET"] })["SET"];
    return <SunTimeMappedData>obj
}

function UVRayMap(obj:any){
    delete Object.assign(obj, {['year']: obj["﻿Year"] })["﻿Year"];
    delete Object.assign(obj, {['month']: obj["Month"] })["Month"];
    delete Object.assign(obj, {['day']: obj["Day"] })["Day"];
    delete Object.assign(obj, {['value']: obj["Value"] })["Value"];
    delete Object.assign(obj, {['completeness']: obj["Completeness"] })["Completeness"];
    return <UVRayMappedData>obj
}