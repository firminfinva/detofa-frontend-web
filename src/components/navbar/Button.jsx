import "./../../css/button.css"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Button({icon, text, onClick, type}){
    const navigate = useNavigate()
    if(!onClick){
        onClick = function goTothePage(){
            navigate("/"+text)
        }
    }
    
    return(<button type={type} onClick={onClick} >{icon}{text}</button>)
}