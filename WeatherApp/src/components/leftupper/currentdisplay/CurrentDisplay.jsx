import { Sun } from "lucide-react";

function CurrentDisplay()
{

   return <>
   <div class='flex flex-col justify-center items-center h-full'>

    <div className="location" class='text-base text-gray-300 py-2'>Lahore, Pakistan</div>

    <div class='text-blue-400 py-2'><Sun size={60}/></div>

    <div class='text-white text-6xl font-medium py-2'>39°</div>

    <div class='text-base text-gray-300 py-2'>Sunny,feels like sunny</div>

    <div class='py-1 px-1 bg-neutral-600 w-1/4 rounded-2xl flex  gap-1'>
        <button class='text-blue-400 bg-blue-950 h-full w-1/2 rounded-l-2xl'>°C</button>
        <button class='text-gray-300 h-full w-1/2 rounded-r-2xl'>°F</button>
    </div>
   </div>
   
   </>
}
export default CurrentDisplay;