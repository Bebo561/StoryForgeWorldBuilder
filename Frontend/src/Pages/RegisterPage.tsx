import './Styles/Login.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase'

export default function RegisterPage(){
    const nav = useNavigate();
    var [email, updateEmail] = useState('');
    var [password, updatePassword] = useState('');

    const LoginPage = () => {
        nav('/EmailLogin')
    }

    const BackButton = () => {
        nav('/');
    }

    const RegisterEvent = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email === '' || password === ''){
            return alert("Must Fill In All Fields");
        }
        createUserWithEmailAndPassword(auth, email, password).then((res) =>{
            //Navigates them to login page 
            console.log(res);
            alert("Success!")
            nav('/EmailLogin');
        }).catch((error) =>{
            //If there was an error, more likely then not user input email incorrectly.
            alert(error.message);
        })
    }
    return (
        <>
        <Header></Header>
            <div id="LoginBG">
                <form id="LoginForm" onSubmit={RegisterEvent}>
                    <h1 id="LoginBack" onClick={BackButton}>Back</h1>
                    <h1 id="LoginHeader">Register with email</h1>
                    <label className="LoginLabels" placeholder="E-mail">Email</label>
                    <input type="Email" className="LoginInput" placeholder="E-mail" onChange={(e) => updateEmail(e.target.value)}></input>
                    <label className="LoginLabels">Password</label>
                    <input type="password" className="LoginInput" placeholder="Password" onChange={(e) => updatePassword(e.target.value)}></input>
                    <button id="RegisterButton">Register</button>
                    <p>-Have account?-</p>
                    <button id="RegisterRedirect" onClick={LoginPage}>Login</button>
                </form>
            </div>
        </>
    )
}