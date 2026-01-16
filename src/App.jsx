import Header from "./Header"
import React from "react"
import CurrentWeather from "./currentweather";
import Input from "./Input";
import FiveDay from "./fiveDay";

export default function App() {
  
  const [toggle,setToggle] = React.useState(false)
  const [city,setCity] = React.useState(null)
  const [weather,setWeather] = React.useState(null)
  const [fahrenheit,setFahrenheit] = React.useState(false)
  const [loading,setLoading] = React.useState(false)
  const [fiveDay,setfiveDay] = React.useState([])
  

  function handleSubmit(Event){
    Event.preventDefault()
    const formel = new FormData(Event.target)
    const citi = formel.get("city")
    console.log(citi)
    setCity(citi)
  }

  function handleClick(){
    setFahrenheit(prev => !prev)
  }

React.useEffect(() => {
  if (!city) return;

  async function getWeather() {
    const key = import.meta.env.VITE_API_KEY;
    const urlone = import.meta.env.VITE_API_URL;
    const urltwo = import.meta.env.VITE_API_FIVE;
    setLoading(true)
    const endpointone =fahrenheit? `${urlone}?q=${city}&appid=${key}&units=imperial`: `${urlone}?q=${city}&appid=${key}&units=metric`;
    const endpointtwo = fahrenheit? `${urltwo}?q=${city}&appid=${key}&units=imperial`: `${urltwo}?q=${city}&appid=${key}&units=metric`;
    const response = await fetch(endpointone);
    const data = await response.json();
    const responseFiveDay = await fetch(endpointtwo);
    const dataFiveDay = await responseFiveDay.json();
    setLoading(false)
    setWeather(data)
    if (dataFiveDay.list){
        setfiveDay(dataFiveDay.list.slice(0,5))
    }
    else
    {
      setfiveDay([])
    }
  }

  getWeather();
}, [city,fahrenheit]);

const dayName =
  fiveDay && fiveDay.length > 0
    ? ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][
        new Date(fiveDay[0].dt_txt).getDay()
      ]
    : ""




    return (
    <div style={{backgroundColor: toggle && "#0B1220"}}className="App">
      <Header toggle={toggle} setToggle={setToggle} />
      <Input toggle={toggle} handleSubmit={handleSubmit} />
    <div className={`current-weather ${toggle ? "dark" : ""}`}>
      {loading?<h2 style={{color:"gray"}}>Loading....</h2>: !weather?null:weather.cod === 200? <CurrentWeather weather={weather} handleClick={handleClick} fahrenheit={fahrenheit} city={city} />:<h2 style={{color:"gray"}}>{weather.message}</h2>}
    </div>
    
    {fiveDay.length ===0 ? null: <FiveDay fiveDay={fiveDay} dayName={dayName} toggle={toggle} />}

    </div>
  
    )
}


