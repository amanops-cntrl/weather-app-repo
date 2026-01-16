import { CiSearch } from "react-icons/ci";


export default function Input(props){
     return (<form className={`input-text ${props.toggle ? "dark" : ""}`} onSubmit = {props.handleSubmit} >
          <CiSearch className="search" />
          <input type="text"style ={{backgroundColor: props.toggle? "#0F172A": "#ffffff", color: props.toggle?"white":"black", width:"100%"}} placeholder="city: e.g Edmonton" className="input" name="city"/>
      </form>)
}