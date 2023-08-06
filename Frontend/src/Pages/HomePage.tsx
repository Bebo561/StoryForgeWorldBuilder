import {useState, useEffect} from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from'react-router-dom';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setToken } from './redux/actions';
import NameGenerator from './NameGenerator';
import Navbar from './Navbar';

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
            <React.Fragment>
                <Routes>
                    <Route path = '/' element={<NameGenerator/>}/>
                </Routes>
            </React.Fragment>
        </>
    )
}