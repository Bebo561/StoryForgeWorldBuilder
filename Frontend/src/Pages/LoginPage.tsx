import './Styles/Login.css'
import React from "react";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth' 
import { auth} from '../Firebase'

export default function LoginPage(){
    const nav = useNavigate();
    var [email, updateEmail] = useState('');
    var [password, updatePassword] = useState('');

    const RegisterPage = () => {
        nav('/Register')
    }

    const BackButton = () => {
        nav('/');
    }
    const LoginSubmit = (event: React.MouseEvent<HTMLFormElement>) =>{
        event.preventDefault();
        //Check if user input fields correctly.
        if(email === '' || password === ''){
            return alert("Must Fill In All Fields");
        }
        //If successful, set the user as the email name. Will add option in future to update display name.
        //Otherwise, same function as above.
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
            const Email = userCredentials.user.email;
            const uid = userCredentials.user.uid;
            //If statement exists because typescript is unsure if user is null or not
            if(Email && uid){
                //If the user does exist, set the users name in the storage to verify a user is logged in.
                localStorage.setItem("Email", Email);
                localStorage.setItem("uid", uid);
                //Navigate to home page.
                nav('/Home');
            }     
            nav('/home');
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <React.Fragment>
            <div id="LoginBG">
                <form id="LoginForm" onSubmit={LoginSubmit}>
                    <h1 id="LoginBack" onClick={BackButton}>Back</h1>
                    <h1 id="LoginHeader">Login with email</h1>
                    <label className="LoginLabels" placeholder="E-mail">Email</label>
                    <input type="Email" className="LoginInput" placeholder="E-mail"  onChange={(e) => updateEmail(e.target.value)}></input>
                    <label className="LoginLabels">Password</label>
                    <input type="password" className="LoginInput" placeholder="Password" onChange={(e) => updatePassword(e.target.value)}></input>
                    <button id="LoginButton">Login</button>
                    <p>-No account?-</p>
                    <button id="RegisterRedirect" onClick={RegisterPage}>Register</button>
                </form>
            </div>
        </React.Fragment>
    )
}