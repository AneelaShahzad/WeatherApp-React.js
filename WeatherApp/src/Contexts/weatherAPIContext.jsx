import { createContext } from "react";
import { useState } from "react";

export const WeatherData = createContext();

function WeatherContext(props)
{
    const obj={
        city:'heeh',
        country:'hehe',
        temp:'hehe',
        feelliketemp:'hehe',
        feel:'hehe',
        wind:'hehe',
        sunset:'hehe',
        weatherCode:'weathercode',
        day1:'hehe',
        day1Temp:'hehe',
        day2:'hehe',
        day2Temp:'hehe',
        day3:'hehe',
        day3Temp:'hehe',
        day4:'hehe',
        day4Temp:'hehe',
        day5:'hehe',
        day5Temp:'hehe',
    };
    const[data,setdata]=useState(obj)


    return  <WeatherData.Provider value= {[data,setdata]}>
        {props.children}
    </WeatherData.Provider>
    

}
export default WeatherContext;