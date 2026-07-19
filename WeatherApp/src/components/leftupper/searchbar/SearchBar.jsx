import { Search } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { WeatherData } from "../../../Contexts/weatherAPIContext";
import { unitCon } from "../../../Contexts/UnitContext";

function SearchBar()
{
    const [weatherapidata,setWeatherapidata] = useContext(WeatherData)

    const [unitstate,setUnit] = useContext(unitCon);
    console.log(setUnit);



    const[cityEntered,setCityEntered]=useState('');

    const apiInACtion=async(cityName)=> {
        console.log(cityEntered);


    let firstResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
    let firstResponseData = await firstResponse.json()
    // console.log(firstResponseData);

    if (!firstResponseData.results || firstResponseData.results.length === 0) {
      console.log("City not found");
      return;
    }

    let { latitude, longitude, name, country } = firstResponseData.results[0];
    console.log(latitude,longitude,name,country);

    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&daily=sunset,sunrise,temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`)
    let apiData= await response.json();
    console.log(apiData)
    



    // console.log(weatherapidata);
    // console.log('aaj ka sunset ',apiData.current.weather_code,'khatam')
    // const copyOfAPI = {apiData[0]}
    // const { newcity, newcountry, newtemp, newfeel, mewhumidity, newwind, newsunset, newday1Temp, newday2Temp, newday3Temp, newday4Temp, newday5Temp}= weatherapidata;
    setWeatherapidata((prev)=>({
        city: cityEntered,
        country: country,
        temp: apiData.current.temperature_2m,
        feel: 'sochti hun',
        feelliketemp: apiData.current.apparent_temperature,
        wind: apiData.current.wind_speed_10m,
        sunset: apiData.daily.sunset[0].split("T")[1],
        weatherCode:apiData.current.weather_code,
        day1:new Date(apiData.daily.time[1]).toLocaleDateString("en", { weekday: "short" }),
        day1Temp: apiData.daily.temperature_2m_max[1],
        day2:new Date(apiData.daily.time[2]).toLocaleDateString("en", { weekday: "short" }),
        day2Temp: apiData.daily.temperature_2m_max[2],
        day3:new Date(apiData.daily.time[3]).toLocaleDateString("en", { weekday: "short" }),
        day3Temp: apiData.daily.temperature_2m_max[3],
        day4:new Date(apiData.daily.time[4]).toLocaleDateString("en", { weekday: "short" }),
        day4Temp: apiData.daily.temperature_2m_max[4],
        day5:new Date(apiData.daily.time[5]).toLocaleDateString("en", { weekday: "short" }),
        day5Temp: apiData.daily.temperature_2m_max[5],

        
    }))



  }

    return<>

    <div class="flex w-full px-0 h-10 gap-1">

        {/* --------search type------- */}

        <div class='w-3/4 h-full'>
            <input 
            onChange={(e)=>{setCityEntered(e.target.value) }}
            placeholder="Enter a City" 
            class="bg-neutral-600 h-full w-full rounded-md text-gray-100 text-lg
            font-medium placeholder:text-gray-50 px-3 py-2"/>
        </div>

         {/* -------------search icon--------- */}
        <button
        onClick={()=>{apiInACtion(cityEntered)}}
         class="w-17 h-full border border-gray-200 bg-neutral-600 rounded-md py-1
        text-gray-100 text-lg
        font-medium flex items-center justify-center">
            <Search/>
        </button>

    </div>
        </>
    
}
export default SearchBar;