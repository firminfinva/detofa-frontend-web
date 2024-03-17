import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [loading, setLoading] = useState(true)
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [baseURL, setBaseURL] = useState("https://detofa-entreprise.onrender.com");
    // let [baseURL, setBaseURL] = useState("http://127.0.0.1:8000");

   
    // const navigate = useNavigate()

    let loginUser = async (e)=> {
        e.preventDefault()
        let response = await fetch(`${baseURL}/api/token/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'phone':e.target.phone.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            console.log("we here")
            return True
        }else{
            console.log("we not here")
            return False
        }
    }


    let registerUser = async (nom, email, phone, age, sexe, password, password2) => {
        let response = await fetch(`${baseURL}/api/register/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nom,
                email, 
                phone, 
                age, 
                sexe, 
                password, 
                password2
              })
        })
        console.log('this is the response', response.status)
        if (response.status === 200) {
            // navigate("/login");
        } else {
     
            alert("Something went wrong!");
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        // navigate('/login')
    }


    let contextData = {
        user:user,
        setUser:setUser,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        loginUser:loginUser,
        baseURL:baseURL,
        setBaseURL:setBaseURL,
        registerUser:registerUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(authTokens){
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false)


    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
} 