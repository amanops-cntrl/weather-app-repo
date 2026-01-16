import { WiDegrees} from "react-icons/wi";

export default function FiveDay(props){


   return (<div className="extended-forecast-container">
          <div className={`five-day-forecast ${props.toggle?"dark":""}`}>
            <h1>Extended forecast</h1>
            <div className="forecast-row">
                {props.fiveDay.map(prev=> 
                <div className="day-forecast" key={prev.dt}>
                <h2>{props.dayName}</h2>
                <img src={`https://openweathermap.org/img/wn/${prev.weather[0].icon}@2x.png`} alt="" />
                <h2>{prev.weather[0].main}</h2>
                <p>{prev.main.temp_min}<WiDegrees className="degrees"/>/{prev.main.temp_max}<WiDegrees className="degrees" /></p>
                </div>)}
            </div>
            
    
    
          </div >
        </div>)

}