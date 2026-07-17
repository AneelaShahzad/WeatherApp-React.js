import { Sun, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning } from "lucide-react";


import {useContext, useState} from 'react';
import { WeatherData } from "../../../Contexts/weatherAPIContext";
import { iconData } from "../../../Contexts/IconContext";
import { unitCon } from "../../../Contexts/UnitContext";



function CurrentDisplay()
{
    const[CbtnBG,setCbtnBG]=useState('bg-blue-950')
    const[FbtnBG,setFbtnBG]=useState('bg-neutral-600')
    const[CBtnTxtClr,setCBtnTxtClr]=useState('text-blue-400')
    const[FBtnTxtClr,setFBtnTxtClr]=useState('text-gray-300')

    const  icontouse = useContext(iconData)

    const [data,setdata]= useContext(WeatherData)
    // console.log(data.weatherCode,'weather code is here')
    // console.log(icontouse[data.weatherCode],'main icon hun')
    let I=icontouse[data.weatherCode] || Sun;


    const [unitState,setUnit]=useContext(unitCon)


   return <>
   <div class='flex flex-col justify-center items-center h-full gap-3'>

    <div className="location" class='text-base text-gray-300 py-2'>{data.city}, {data.country}</div>

    <div class='text-blue-400 py-2'><I size={60}/></div>

    <div class='text-white text-6xl font-medium py-2'>{data.temp}°</div>

    {/* <div class='text-base text-gray-300 py-2'>{data.feel}</div> */}

    <div class='py-1 px-1 bg-neutral-600 w-1/4 rounded-2xl flex  gap-1'>

        <button 
        onClick={()=>{
            setUnit('°C')
            setCBtnTxtClr('text-blue-400')
            setCbtnBG('bg-blue-950')
            setFBtnTxtClr('text-gray-300')
            setFbtnBG('bg-neutral-600')

        }} className={` ${CBtnTxtClr} ${CbtnBG} h-full w-1/2 rounded-l-2xl`}>°C</button>

        <button 
        onClick={()=>{
            setUnit('°F')
            setCBtnTxtClr('text-gray-300')
            setCbtnBG('bg-neutral-600')
            setFBtnTxtClr('text-blue-400')
            setFbtnBG('bg-blue-950')
        }} 
        className={`${FBtnTxtClr} ${FbtnBG} h-full w-1/2 rounded-r-2xl`}>°F</button>
    </div>
   </div>
   
   </>
}
export default CurrentDisplay;