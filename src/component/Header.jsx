import React from 'react'
import NavBar from './NavBar'

function Header() {
    return (
        <div>
            <NavBar />
            <div className='name'>
                <h1><span>Launch Your App</span>With confidence and creativity </h1>
                <p className='detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dignissimos.</p>
                <a href="#" className='cv-btn'>Downlode</a>
            </div>
        </div>
    )
}

export default Header