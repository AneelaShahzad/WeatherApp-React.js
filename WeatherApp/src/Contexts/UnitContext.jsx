import { createContext, useState } from "react"
export const unitCon = createContext();
function UnitContext(props)
{
    const [unitState,setUnit]=useState('C');
    const [tempStatesUnit,setTempUnit]=useState('x')

    return <unitCon.Provider value={[unitState,setUnit,tempStatesUnit,setTempUnit]}>
        {props.children}
    </unitCon.Provider>
}
export default UnitContext