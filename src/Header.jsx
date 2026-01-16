import { CiDark } from "react-icons/ci";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Header(props){

    function handleMode() {
        
        props.setToggle(prev => !prev)

    }
    return(
     <header className="reactWeather">
            <h1 className="heading">ReactWeather</h1>
            <div style={{backgroundColor: props.toggle && "#0F172A"}} className="toggleMode" onClick={handleMode}>
                <MdOutlineLightMode className="lightmode"/>
                {props.toggle? (<MdToggleOn className="toggleOn" />) : (<MdToggleOff className="toggleOff" />)}
                <CiDark className="darkmode"/>
            </div>

        </header>
                )


}