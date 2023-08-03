import React from "react";
import './Styles/StartPage.css'
import { useNavigate } from "react-router-dom";
import { signInWithPopup  } from 'firebase/auth';
import { auth, provider} from '../Firebase'

export default function Start(){
    var nav = useNavigate();
    const GoogleSignIn = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event?.preventDefault();
        //Open a pop up tab that allows users to sign in with user accounts
        signInWithPopup(auth, provider).then((res) =>{
            //Use the google account displayName as the account name.
            const Email = res.user.email;
            const uid = res.user.uid;
            //If statement exists because typescript is unsure if user is null or not
            if(Email && uid){
                //If the user does exist, set the users name in the storage to verify a user is logged in.
                localStorage.setItem("Email", Email);
                localStorage.setItem("uid", uid);
                //Navigate to home page.
                nav('/Home');
            }     
        }).catch((error) =>{
            alert(error.message);
        })
    }

    //Redirect Users to Email Login
    const SignInPage = () => {
        nav('/EmailLogin')
    }

    return (
        <React.Fragment>
            <div id="StartBG">
                <div id ="StartContainer">
                    <div id="StartHalfOne" className="StartHalves">
                        <h1 id="StartAsk">Login to access</h1>
                        <p>Welcome to WorldForger, where with just a simple sentence, you can create worlds beyond your imagination</p>
                    </div>
                    <div id="StartHalfTwo" className="StartHalves">
                        <h3>Sign in with Google</h3>
                        <button id="GoogleLogin" onClick={GoogleSignIn}>
                        <svg id="GoogleLogo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                            Google</button>
                        <p>- Or -</p>
                        <h3>Sign in with Email</h3>
                        <button id="EmailLogin" onClick={SignInPage}>Email</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};