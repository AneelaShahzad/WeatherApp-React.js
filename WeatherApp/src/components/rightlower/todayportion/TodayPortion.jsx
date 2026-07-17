import TodaysCard from "../TodaysCard/TodaysCard";
import { Thermometer } from "lucide-react";
import { Wind } from "lucide-react";
import { Sunset } from "lucide-react";
import { useContext } from "react";
import { WeatherData } from "../../../Contexts/weatherAPIContext";



function TodayPortion()
{
    let [properties,setproperties] = useContext(WeatherData)
    // console.log('card wale portionmain hun main',properties.humidity)
    const todayArr=[
        {
            icon:Thermometer,
            property:'Feels like',
            propertyVal:properties.feelliketemp
        },
        {
            icon:Wind,
            property:'Wind',
            propertyVal:`${properties.wind} km/h`
        },
        {
            icon:Sunset,
            property:'Sunset',
            propertyVal:properties.sunset
        }
    ]
    return <div class=' h-1/2 '>
        <p class='text-gray-300 text-sm'>Today's Details</p>
        <div class='h-full flex gap-1'>
            {todayArr.map((e,idx)=>{
                return <TodaysCard key ={idx} icon={e.icon} property={e.property} propertyVal={e.propertyVal}/>
            })}
        </div>
    </div>
}
export default TodayPortion;