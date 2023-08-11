import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Styles/Navbar.css'

export default function Navbar(){
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (pathname: string) => {
        return location.pathname === pathname ? 'isActive' : '';
    };

    return (
        <>
            <nav className={menuOpen ? 'menuOpen' : 'menuClose'}>
                <h1>World Forger: A DnD Generator</h1>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={menuOpen ? 'Show' : 'noShow'}> 
                    <li className={isActive('/Home/AboutUs')}><Link to="/">About Us</Link></li>
                    <li className={isActive('/Home/Name')}><Link to="Name">Name</Link></li>
                    <li className={isActive('/Home/Race')}><Link to="Race">Race</Link></li>
                    <li className={isActive('/Home/Class')}><Link to="Class">Class</Link></li>
                    <li className={isActive('/Home/Stats')}><Link to="Stats">Stats</Link></li>
                    <li className={isActive('/Home/Story')}><Link to="Story">Story</Link></li>
                </ul>
            </nav>
        </>
    )
}