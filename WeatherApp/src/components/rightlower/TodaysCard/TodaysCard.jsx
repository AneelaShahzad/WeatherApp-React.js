import { Droplet } from "lucide-react";
import { Wind } from "lucide-react";
import { Sunset } from "lucide-react";

function TodaysCard(props)
{
    return <div class='bg-neutral-600 h-2/3 w-1/3 rounded-2xl my-3 flex flex-col justify-center items-center'>
        <div class='text-gray-300'><props.icon/></div>
        <p class='text-gray-300'>{props.property}</p>
        <p class='text-white text-1.8xl'>{props.propertyVal}</p>
    </div>
}
export default TodaysCard