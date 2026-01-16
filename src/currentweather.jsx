import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiCelsiusFill } from "react-icons/ri";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { RiFahrenheitFill } from "react-icons/ri";
import { FiWind } from "react-icons/fi";
import { WiBarometer } from "react-icons/wi";
import { WiDegrees } from "react-icons/wi";





export default function CurrentWeather (props){

    return (
 <>
    <div className="icon-section">
        <h1 className="main-heading">Current weather</h1>
        <p>{props.city}</p>
        <div className="iconandweather">
        <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="" />
        <span className="main-temp">{props.weather.main.temp} <WiDegrees /></span>
        </div>
        <h2 className="weather-status">{props.weather.weather[0].main}</h2>
        
      </div>
      <div className="weather-description">
        <div className="fahrenheit-toggle" onClick={props.handleClick}>
          <RiCelsiusFill />
          {props.fahrenheit? <MdToggleOn className="toggleOn" /> : <MdToggleOff className="toggleOff" />}
          <RiFahrenheitFill /> 
        </div >
        <p className="feels-like">Feels like <span>{props.weather.main.feels_like}<WiDegrees /></span></p>
        <div className="highandlow">
        <span className="max-temp"> 
        <FaArrowUp />
        <span> {props.weather.main.temp_max}<WiDegrees /> </span>
        </span>
        <span className="min-temp">
        <FaArrowDown />
        <span> {props.weather.main.temp_min}<WiDegrees /></span>
        </span>
        </div>
        <div className="humidity">
          <div className="humid-icon">
          <WiHumidity className="humidity-icon" />
          <span>Humidity</span>
          </div>
          <span className="humid-info">{props.weather.main.humidity}%</span>
        </div>
        <div className="wind-section">
          <div className="wind-icon">
            <FiWind className="windy-icon" />
            <span>Wind</span>
          </div>
          <span className="wind-info">{props.weather.wind.speed}kph</span>
        </div>
        <div className="pressure-section">
          <div className="pressure-icon">
            <WiBarometer className="baro"/>
            <span>Pressure</span>
          </div>
          <span className="pressure-info">{props.weather.main.pressure}hPa</span>
        </div>

    </div>
</>
    )
}