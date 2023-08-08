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
                <h1>World Forger: A DnD Generator</h1>
                <ul>
                    <li className={isActive('/Home/AboutUs')}><Link to="/">About Us</Link></li>
                    <li className={isActive('/Home/Name')}><Link to="Name">Name</Link></li>
                    <li className={isActive('/Home/Race')}><Link to="/">Race</Link></li>
                    <li className={isActive('/Home/Class')}><Link to="/">Class</Link></li>
                    <li className={isActive('/Home/Stats')}><Link to="/">Stats</Link></li>
                    <li className={isActive('/Home/Story')}><Link to="/">Story</Link></li>
                </ul>
            </nav>
        </>
    )
}