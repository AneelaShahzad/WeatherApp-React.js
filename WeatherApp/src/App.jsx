import { useContext, useEffect } from "react";
import LeftUpper from "./components/leftupper/LeftUpper";
import RightLower from "./components/rightlower/RightLower";
import { WeatherData } from "./Contexts/weatherAPIContext";
import StartingUI from "./components/StartingUI";

function App()
{
  const [data,setdata] = useContext(WeatherData)
  console.log(data.city)
  console.log('aneela');

  if(data.city==='')
  {
    return <StartingUI/>
  }
   else return <>
    <div className='bg-neutral-900 h-screen py-4 px-4 lg:p-10 flex flex-col lg:flex-row'>
      <LeftUpper />
      <RightLower />
    </div>
  
  </>
}
export default App;