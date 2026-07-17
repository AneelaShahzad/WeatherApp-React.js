function ForecastCard(props)
{
    // console.log('main hun card heh',props)
    return <div class='h-2/3 w-1/5 rounded-2xl bg-neutral-600 my-3 flex
    flex-col justify-center items-center gap-3'>
        <p class='text-gray-300'>{props.fday}</p>
        <div class='text-blue-400'><props.ficon/></div>
        <p class='text-gray-300'>{props.ftemp}°</p>
    </div>

}
export default ForecastCard;