import http from "@/http"
async function fetch_humidity(){
    return await http.get("https://data.weather.gov.hk/weatherAPI/cis/csvfile/SHA/ALL/daily_SHA_RH_ALL.csv")
    .then(res=>{
        console.log(res)
        return res
    }).catch(e=>{
        console.error(e)
    })
}

export {fetch_humidity}