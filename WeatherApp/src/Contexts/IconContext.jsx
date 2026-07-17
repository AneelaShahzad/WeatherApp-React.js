import { createContext, useContext } from "react"
import { Sun, Cloud, CloudRain, CloudSnow, CloudFog, CloudLightning } from "lucide-react";


export const iconData = createContext();

function IconContext(props)
{
    const iconMap = {
    0: Sun,
    1: Sun,
    2: Cloud,
    3: Cloud,
    45: CloudFog,
    48: CloudFog,
    51: CloudRain,
    53: CloudRain,
    55: CloudRain,
    61: CloudRain,
    63: CloudRain,
    65: CloudRain,
    71: CloudSnow,
    73: CloudSnow,
    75: CloudSnow,
    80: CloudRain,
    81: CloudRain,
    82: CloudLightning,
    95: CloudLightning,
    96: CloudLightning,
    99: CloudLightning,
};

    return <iconData.Provider value={iconMap}>
        {props.children}
    </iconData.Provider>
}
export default IconContext