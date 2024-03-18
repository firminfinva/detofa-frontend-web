import { CiSearch } from "react-icons/ci";
import Logo from "./../../assets/logo.png"
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdCart } from "react-icons/io";



export default function TopNav(){
    const {authTokens, logoutUser} = useContext(AuthContext)
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
    let icanSize = 0
    if(window.innerWidth>920){
        icanSize = 20
    }else{
        icanSize = 15
    }
   
    const theBtn = [
        {img: <MdOutlineManageAccounts size={icanSize}/>,text: "Compte"},
        {img: <IoMdCart size={icanSize}/>,text: "Panier"},
        // {img: <></>,text: "Deconnecter"},
    ]
    return(
        <div className="top-nav">
            <img onClick={goToHome} className="logo" src={Logo} />
            <form>
                <input value={input} onChange={handleChange} type="text" />
                <Button onClick={handleSubmit} type="submit" icon={<CiSearch size="90%"/>}/>
            </form>
            <div className="connexion-btns">
                {!authTokens ?<>
                <Button onClick={goToLogin} text="Login"/>
                <Button onClick={goToRegistration} text="Registration"/>
                </>:
                <>
                    {theBtn.map((btn)=>
                        <Link to={btn.text} className="connected-btns">
                            <div>{btn.img}</div>
                            <Button  key={btn.text}  text={btn.text} />
                        </Link>
                    )}
                    <div className="deconnected-btns">
                        <div><></></div>
                        <button className="logout" onClick={()=> logoutUser()}>Deconnexion</button>
                    </div>
                </>
                }
                       
             </div>
                    
        </div>
    )
}