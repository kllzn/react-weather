import axios from "axios";

const API_KEY = "05e413d14cc84f689b3130624230108";
const API_URL = "http://api.weatherapi.com/v1/current.json?key=";

export async function getData(city: string) {
  const responce = await axios.get(`${API_URL}${API_KEY}&q=${city}&aqi=no`);
  return responce.data;
}
