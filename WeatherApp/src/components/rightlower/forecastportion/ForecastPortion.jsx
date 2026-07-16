import ForecastCard from "../ForecastCard/ForecastCard";

function ForecastPortion()
{
    return <div class=' h-1/2'>
    <p class='text-gray-300 text-sm'>5-day forecast</p>
    <div class='h-full flex flex-row gap-1.5'>
        <ForecastCard/>
        <ForecastCard/>
        <ForecastCard/>
        <ForecastCard/>
        <ForecastCard/>
    </div>
    </div>
}
export default ForecastPortion;