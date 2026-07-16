import { Search } from "lucide-react";

function SearchBar()
{
    return<>

    <div class="flex w-full px-0 h-10 gap-1">

        {/* --------search type------- */}

        <div class='w-3/4 h-full'>
            <input placeholder="Enter a City" 
            class="bg-neutral-600 h-full w-full rounded-md text-gray-100 text-lg
            font-medium placeholder:text-gray-50 px-3 py-2"/>
        </div>

         {/* -------------search icon--------- */}
        <div class="w-17 h-full border border-gray-200 bg-neutral-600 rounded-md py-1
        text-gray-100 text-lg
        font-medium flex items-center justify-center">
            <Search/>
        </div>

    </div>
        </>
    
}
export default SearchBar;