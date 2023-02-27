import './Header.scss'
import React from 'react'
import { Link } from "react-router-dom"
import HomeIcon from '../../Assets/banner.png'


const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={HomeIcon} className='home-icon'></img>
            </Link>
            <Link to='/map' className='link'>MAP</Link>
            <Link to='/form' className='link'>FORM</Link>
            <Link to='/itinerary' className='link'>ITINERARY</Link>
        </div>
    )
}

export default Header