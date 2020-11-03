import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo onClick={closeMobileMenu}>
                        <i class="fas fa-truck"></i>
                        TS-Platform
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Strona Główna</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/add-load' className='nav-links' onClick={closeMobileMenu}>Dodaj ładunek</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/list-load' className='nav-links' onClick={closeMobileMenu}>Lista ładunków</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>Informacje</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
