import {Search} from 'lucide-react'
import SearchBar from './leftupper/searchbar/SearchBar';
function StartingUI()
{

    return <div class='bg-neutral-900 h-screen px-16 py-5 flex flex-col items-center'>
        <SearchBar/>
        <div class='text-white flex flex-col justify-center items-center my-40 gap-10'>
            <Search size={85}/>
            <h3>Search for a City</h3>
            <p class='text-center'>Type a city name above <br/>to see its temperature</p>
        </div>
        
    </div>

}
export default StartingUI;