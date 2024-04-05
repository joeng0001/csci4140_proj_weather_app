export interface HumidityMappedData {
    "year": string, 
    'month':string , 
    'day':string , 
    'value': string, 
    'completeness': string
}
export interface HumidityData {
    "﻿年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}
export interface HumidityObj {
    place:String,
    data: HumidityData[]
}
export interface Humidity extends Array<HumidityObj> {}


export interface RainfallMappedData {
    "year": string, 
    'month':string , 
    'day':string , 
    'value': string, 
    'completeness': string
}
export interface RainfallData {
    "﻿年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}
export interface RainfallObj {
    place:String,
    data: RainfallData[]
}
export interface Rainfall extends Array<RainfallObj> {}




export interface SunTimeMappedData{
    "date":String, 
    'rise':String, 
    'tran': String, 
    'set': String, 
}
export interface SunTimeData{
    "﻿YYYY-MM-DD"?:String, 
    'RISE'?: String, 
    'TRAN.'?: String, 
    'SET'?: String
}
export interface SunTime extends Array<SunTimeData> {}



export interface UVRayMappedData{
    "year":String, 
    'value':String, 
    'month': String, 
    'day.': String, 
    'completeness': String
}
export interface UVRayData{
    "﻿Year"?:String, 
    'Value'?:String, 
    'Month'?: String, 
    'Day.'?: String, 
    'Completeness'?: String
}
export interface UVRay extends Array<UVRayData> {}