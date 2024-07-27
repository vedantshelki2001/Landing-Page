
import React, { useState } from 'react'

function NavBar() {

    const [nav, setnav] = useState(false)

    const ChangeBackground = () => {
        if (window.scroll >= 50) {
            setnav(true)
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', ChangeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className='logo'>
                <img src="../../public/images/logo.png" alt="loding" />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">UI SS</a></li>
                <li><a href="#">Downlode</a></li>
            </ul>

        </nav>
    )
}

export default NavBar