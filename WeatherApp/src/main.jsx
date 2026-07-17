import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherContext from './Contexts/weatherAPIContext.jsx'
import { WeatherData } from './Contexts/weatherAPIContext.jsx'
import IconContext  from './Contexts/IconContext.jsx'
import UnitContext from './Contexts/UnitContext.jsx'

createRoot(document.getElementById('root')).render(
    <UnitContext>
    <IconContext>
    <WeatherContext >
    <App />
    </WeatherContext>
    </IconContext>
    </UnitContext>
)
