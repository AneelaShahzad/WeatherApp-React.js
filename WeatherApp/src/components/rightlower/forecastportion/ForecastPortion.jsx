import { useContext } from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import { WeatherData } from "../../../Contexts/weatherAPIContext";
import { iconData } from "../../../Contexts/IconContext";

import { Sun, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning } from "lucide-react";

function ForecastPortion()
{
    const [weatherapidata] = useContext(WeatherData)
    
    // console.log(weatherapidata , 'forecast mein hun abhi');
    const  icontouse = useContext(iconData) 
    let I=icontouse[weatherapidata.weatherCode] || Sun;


    const forecastArr = [
        {
            fday:weatherapidata.day1,
            ficon:I,
            ftemp:weatherapidata.day1Temp
        },
        {
            fday:weatherapidata.day2,
            ficon:I,
            ftemp:weatherapidata.day2Temp
        },
        {
            fday:weatherapidata.day3,
            ficon:I,
            ftemp:weatherapidata.day3Temp
        },
        {
            fday:weatherapidata.day4,
            ficon:I,
            ftemp:weatherapidata.day4Temp
        },
        {
            fday:weatherapidata.day5,
            ficon:I,
            ftemp:weatherapidata.day5Temp
        }
    ]

    return <div class=' h-1/2'>
    <p class='text-gray-300 text-sm'>5-day forecast</p>
    <div class='h-full flex flex-row gap-1.5'>
        {forecastArr.map((e,idx)=>{
            return <ForecastCard key={idx} fday={e.fday} ficon={e.ficon} ftemp={e.ftemp}/>
        })}
    </div>
    </div>
}
export default ForecastPortion;