import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./../css/login.css"

export default function Login(){
    const navigate = useNavigate()
    let {loginUser, authTokens} = useContext(AuthContext) 
    if(authTokens){
        navigate("/")
    }
    return (
        <div className="login">
            <div className="main_login">
                <h1>Se connecter</h1>
                <form className="login-form" onSubmit={loginUser}>
                    <input type="text" name="phone" placeholder="Enter your phone number" />
                    <input type="password" name="password" placeholder="Enter Password" />
                             
                    <input type="submit"/>
                </form>
            </div>
        </div>    
    )
}