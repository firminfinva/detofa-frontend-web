import { CiSearch } from "react-icons/ci";
import Logo from "./../../assets/logo.png"
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TopNav(){
    const navigator = useNavigate()
    const [input, setInput] = useState("")
    function goToHome(){
        navigator("/")
    }
    function goToLogin(){
        navigator("/login")
    }
    function goToRegistration(){
        navigator("/registration")
    }
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <div className="top-nav">
                    <img onClick={goToHome} className="logo" src={Logo} />
                    <form>
                        <input value={input} onChange={handleChange} type="text" />
                        <Button onClick={handleSubmit} type="submit" icon={<CiSearch size="90%"/>}/>
                    </form>
                    <div className="connexion-btns">
                       <Button onClick={goToLogin} text="Login"/>
                       <Button onClick={goToRegistration} text="Registration"/>
                    </div>
                    
                </div>
    )
}