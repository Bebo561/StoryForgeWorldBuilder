import {useState, useEffect} from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/actions';

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
            user?.getIdToken().then((token) => {
                alert(token)
                dispatch(setToken(token))
            })
          });
      
          return () => unsubscribe();
    }, [])
    

    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}