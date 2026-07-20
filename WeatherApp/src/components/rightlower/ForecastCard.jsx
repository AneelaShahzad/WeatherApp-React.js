import { useContext } from 'react';
import { unitCon } from '../../Contexts/UnitContext.jsx'

function ForecastCard(props)
{
    let [unitState]=useContext(unitCon)

    return <div class='h-2/3 w-1/5 rounded-2xl bg-neutral-600 my-3 flex
    flex-col justify-center items-center gap-3'>
        <p class='text-gray-300'>{props.fday}</p>
        <div class='text-blue-400'><props.ficon/></div>
        {/* <p class='text-gray-300'>{props.ftemp}°</p> */}
        <p class='text-gray-300'>{unitState==='C' ? (props.ftemp).toFixed(2):((props.ftemp * 9/5)+32).toFixed(2)}°</p>
    </div>
}
// unitState==='C' ? (props.ftemp) .toFixed(2) : ((props.ftemp * 9/5) + 32).toFixed(2) }
export default ForecastCard;