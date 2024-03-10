import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    let {loginUser, authTokens} = useContext(AuthContext) 
    if(authTokens){
        navigate("/")
    }
    return (
        <div className="main_login">
            <h1>Se connecter</h1>
            <form onSubmit={loginUser}>
                <div className="for-labels">
                    <label>Téléphone</label>
                    <input type="text" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="for-labels">
                    <label>Mot de passe</label>
                    <input type="password" name="password" placeholder="Enter Password" />
                </div>
                
                <input type="submit"/>
            </form>
        </div>
    )
}