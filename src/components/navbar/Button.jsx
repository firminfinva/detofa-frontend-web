import "./../../css/button.css"


export default function Button({icon, text, onClick, type}){
    return(<button type={type} onClick={onClick} >{icon}{text}</button>)
}