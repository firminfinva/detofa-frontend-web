import { useNavigate } from "react-router-dom"
import "./../../css/button.css"


export default function Button({icon, text, onClick, type}){
    const navigate = useNavigate()
    if(!onClick){
        onClick = function goTothePage(){
            navigate("/"+text)
        }
    }
    
    return(<button type={type} onClick={onClick} >{icon}{text}</button>)
}