export interface HumidityMappedData {
    "year": string, 
    'month':string , 
    'day':string , 
    'value': string, 
    'completeness': string
}
export interface HumidityData {
    "年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}
export interface HumidityObj {
    place:string,
    data: HumidityMappedData[]
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
    "年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}
export interface RainfallObj {
    place:string,
    data: RainfallMappedData[]
}
export interface Rainfall extends Array<RainfallObj> {}

export interface WindMappedData {
    "year": string, 
    'month':string , 
    'day':string , 
    'value': string, 
    'completeness': string
}
export interface WindData {
    "年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}
export interface WindObj {
    place:string,
    data: WindMappedData[]
}
export interface Wind extends Array<WindObj> {}



export interface SunTimeMappedData{
    "date":string, 
    'rise':string, 
    'tran': string, 
    'set': string, 
}
export interface SunTimeData{
    "YYYY-MM-DD"?:string, 
    'RISE'?: string, 
    'TRAN.'?: string, 
    'SET'?: string
}
export interface SunTime extends Array<SunTimeData> {}



export interface UVRayMappedData{
    "year":string, 
    'value':string, 
    'month': string, 
    'day.': string, 
    'completeness': string
}
export interface UVRayData{
    "Year"?:string, 
    'Value'?:string, 
    'Month'?: string, 
    'Day.'?: string, 
    'Completeness'?: string
}
export interface UVRay extends Array<UVRayData> {}