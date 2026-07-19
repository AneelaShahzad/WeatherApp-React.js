// import ForecastPortion from "./forecastportion/ForecastPortion"
// import ForecastPortion from "./ForecastPortion.jsx"
import ForecastPortion from "./ForecastPortion"
import TodayPortion from "./TodayPortion"

function RightLower()
{
    return <>
    <div className='w-full lg:w-1/2 h-full'>
    <TodayPortion/>
    <ForecastPortion/>
    {/* <ForecastPortion /> */}
    </div>
    </>
}
export default RightLower