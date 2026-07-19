import CurrentDisplay from "./CurrentDisplay";
import SearchBar from "./SearchBar";

function LeftUpper()
{
    return <div className="w-full lg:w-1/2  h-full">
        <SearchBar />
        <CurrentDisplay />
    </div>
}
export default LeftUpper;