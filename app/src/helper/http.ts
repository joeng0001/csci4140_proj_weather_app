import axios from 'axios'
const Http = axios.create({
  baseURL: "http://localhost:8088", 
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 1000000, 
});
export async function get_humidity(){
    return Http.get("/data/humidity")
}

export async function get_rainfall(){
    return Http.get("/data/rainfall")
}

export async function get_sun_time(){
    return Http.get("/data/sun")
}
export async function get_uv_ray(){
    return Http.get("/data/uvRay")
}