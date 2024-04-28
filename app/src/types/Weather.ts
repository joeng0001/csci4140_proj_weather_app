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



export interface CloudMappedData {
    "year": string, 
    'month':string , 
    'day':string , 
    'value': string, 
    'completeness': string
}
export interface CloudData {
    "年/Year"?: string, 
    '月/Month'?:string , 
    '日/Day'?:string , 
    '數值/Value'?: string, 
    '數據完整性/data Completeness'?: string
}

export interface Cloud extends Array<CloudMappedData> {}

export interface UVRayMappedData{
    "year":string, 
    'value':string, 
    'month': string, 
    'day': string, 
    'completeness': string
}
export interface UVRayData{
    "Year"?:string, 
    'Value'?:string, 
    'Month'?: string, 
    'Day'?: string, 
    'Completeness'?: string
}
export interface UVRay extends Array<UVRayMappedData> {}