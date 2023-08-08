import {useState, useEffect} from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from'react-router-dom';
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setToken } from './redux/actions';
import Navbar from './Navbar';
import './Styles/Home.css';

export default function HomePage(){
    const auth = getAuth();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const nav = useNavigate();

    //If the user is already logged in, if not, redirect ot login.
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user === null) {
              nav('/');
            }
            //If user is valid, generate authentication token.
            user?.getIdToken().then((token) => {
                dispatch(setToken(token))
            })
          });
      
          return () => unsubscribe();
    }, [])
    

    return (
        <>
        <Navbar></Navbar>
        <Outlet />
        </>
    )
}