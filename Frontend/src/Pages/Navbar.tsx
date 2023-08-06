import { Link, useLocation } from 'react-router-dom';
import './Styles/Navbar.css'

export default function Navbar(){
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname ? 'isActive' : '';
    };

    return (
        <>
            <nav>
                <h1>World Forger</h1>
                <ul>
                    <li className={isActive('/Home')}><Link to="/">Name Generator</Link></li>
                </ul>
            </nav>
        </>
    )
}