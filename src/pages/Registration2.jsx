import { useContext, useState } from "react";
import "./../css/login.css"
import AuthContext from "../context/AuthContext";
import Select from 'react-select'
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/globelComponents/ErrorMessage";
// import { Redirect } from 'react-router-dom';

export default function Registration(){

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [sexe, setSexe] = useState("");
    const [ville, setVille] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const {registerUser} = useContext(AuthContext)

    const options = [
        { value: 'Bukavu', label: 'Bukavu' },
        { value: 'Butembo', label: 'Butembo' },
        { value: 'Goma', label: 'Goma' },
        { value: 'Kinshasa', label: 'Kinshasa' },
        { value: 'Lumbumbashi', label: 'Lumbumbashi' }
      ]
  
    const handleSubmit2 = async e => {
      e.preventDefault();
      registerUser(nom, email, phone, age, sexe, ville, password, password2);
    };
    return(<div className="registration-page">
            <h1>Créer un compte</h1>
            <form className="registration-form" onSubmit={handleSubmit((data,event) => console.log("the data", data) )}>
               <input type="text" {...register("nom", {
                    required: "Ce champ est obligatoire",
                    minLength: {value: 3, message: "votre nom doit avoir au moins 3 caracteres"},
                    maxLength: {value: 25, message: "Votre nom doit avoir moins de 25 caracteres"}
                })} id="nom"  placeholder="Votre nom"  />
                <ErrorMessage message={errors.nom?.message} />
               <input type="email" {...register("email", {
                    required: "Ce champ est obligatoire",
                    pattern: {value: /(.+)@(.+){2,}\.([A-Za-z]){2,}/, message: "Votre phone n'est pas valide, voici l'exemple +243999999999"}
                    
                })} id="email"  placeholder="Votre email"  />
                <ErrorMessage message={errors.email?.message} />
                <input type="text" {...register("phone", {
                    required: "Ce champ est obligatoire",
                    pattern: {value: /^(\+\d{1,3})?,?\s?\d{9,10}$/, message: "Votre email n'est pas valide, voici l'exemple detofa@gmail.com"}
                })}
                id="phone"  placeholder="Votre numéro de téléphone" />
                <ErrorMessage message={errors.phone?.message} />

                <input type="date" {...register("date", {required: "Ce champ est obligatoire"})} id="age" placeholder="Votre age" required />
                <ErrorMessage message={errors.date?.message} />
                <input type="text" {...register("sexe", {required: "Ce champ est obligatoire"})} id="sexe"  placeholder="Votre sexe" required />
                <ErrorMessage message={errors.sexe?.message} />
                <Select id className="input-type" options={options} placeholder="Ville"/>
                <input type="password" {...register("password", {
                    required: "Ce champ est obligatoire",
                    minLength: {value: 5, message: "votre password doit avoir au moins 5 caracteres"},
                })}  id="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" required />
                <ErrorMessage message={errors.password?.message} />
                <input type="password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirmer le mot de passe" required />
                
                <p>{password2 !== password ? "Vos mots de passe sont différentsPasswords do not match" : ""}</p>
 
                <input type="submit"/>
            </form>
    </div>)
}