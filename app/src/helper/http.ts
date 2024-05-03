import axios from 'axios'
const Http = axios.create({
  baseURL: "http://127.0.0.1:8088", 
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 1000000, 
});

async function get(path:string){
  return Http.get(path).then(res=>{
      return res.data
    })
}

export async function get_humidity(){
    return get("/data/humidity")
}

export async function get_rainfall(){
    return get("/data/rainfall")
}

export async function get_cloud(){
    return get("/data/cloud")
}

export async function get_uv_ray(){
    return get("/data/uvRay")
}

export async function get_wind(){
    return get("/data/wind")
}