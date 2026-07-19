
import { useContext, useEffect } from "react";
import LeftUpper from "./components/leftupper/LeftUpper";
import RightLower from "./components/rightlower/RightLower";
import { WeatherData } from "./Contexts/weatherAPIContext";
// import {[data,setData]} from "./Contexts/weatherAPIContext";

import StartingUI from "./components/StartingUI";

function App()
{

  const [data,setdata] = useContext(WeatherData)
  console.log(data.city)
  console.log('aneela');
  // useEffect(()=>{
  //   console.log('main hun use effect')
  // })


  
  //  const getDataFromAPI=async(cityName)=> {
  //   let firstResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
  //   let firstResponseData = await firstResponse.json()
  //   // console.log(firstResponseData);

  //   if (!firstResponseData.results || firstResponseData.results.length === 0) {
  //     // console.log("City not found");
  //     return;
  //   }

  //   let { latitude, longitude, name, country } = firstResponseData.results[0];
  //   // console.log(latitude,longitude,name,country);

  //   let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&daily=sunset,sunrise,temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`)
  //   let apiData= await response.json();
  //   // console.log(apiData)
    
  // }
  // getDataFromAPI('heheue736');




  if(data.city==='')
  {
    return <StartingUI/>
  }
   else return <>
  <div class='bg-neutral-900 h-screen p-10 flex flex-row'>
    <LeftUpper />
    <RightLower />
  </div>
  
  </>
}
export default App;