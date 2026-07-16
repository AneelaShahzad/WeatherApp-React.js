import TodaysCard from "../TodaysCard/TodaysCard";

function TodayPortion()
{
    return <div class=' h-1/2 '>
        <p class='text-gray-300 text-sm'>Today's Details</p>
        <div class='h-full flex gap-1'>
            <TodaysCard/>
            <TodaysCard/>
            <TodaysCard/>
            <TodaysCard/>
        </div>
    </div>
}
export default TodayPortion;