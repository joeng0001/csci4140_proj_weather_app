import axios from "axios";

export async function fetchHumidity() {
  return await axios
    .get(
      "https://data.weather.gov.hk/weatherAPI/cis/csvfile/SHA/ALL/daily_SHA_RH_ALL.csv"
    )
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      console.error("fail to fetch humidity");
    });
}
