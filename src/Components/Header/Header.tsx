import './Header.scss'
import React from 'react'
import { Link } from "react-router-dom"
import HomeIcon from '../../Assets/49921-home.gif'


const Header = () => {
    return (
        <div className='header'>
            <div className='contain'>
                <Link to='/'>
                    <img src={HomeIcon} className='home-icon'></img>
                </Link>
            </div>
            <h1 className='title'>L'EVies</h1>
            <Link to='/map' className='link'>MAP</Link>
            <Link to='/form' className='link'>FORM</Link>
            <Link to='/itinerary' className='link'>ITINERARY</Link>
        </div>
    )
}

export default Header