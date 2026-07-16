import CurrentDisplay from "./currentdisplay/CurrentDisplay";
import SearchBar from "./searchbar/SearchBar";

function LeftUpper()
{
    return <div className="w-1/2  h-full">
        <SearchBar />
        <CurrentDisplay />
    </div>
}
export default LeftUpper;