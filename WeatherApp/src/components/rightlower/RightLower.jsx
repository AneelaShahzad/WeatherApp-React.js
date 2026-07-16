import ForecastPortion from "./forecastportion/ForecastPortion"
import TodayPortion from "./todayportion/TodayPortion"
import TodaysCard from "./TodaysCard/TodaysCard"

function RightLower()
{
    return <>
    <div class='w-1/2 h-full'>

    <TodayPortion/>

    <ForecastPortion />


    </div>
    </>
}
export default RightLower