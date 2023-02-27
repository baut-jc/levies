import './Header.scss'
import React from 'react'
import { Link } from "react-router-dom"
import HomeIcon from '../../Assets/banner.png'


const Header = () => {
    return (
        <div className='header'>
            <Link to='/levies'>
                <img src={HomeIcon} className='home-icon'></img>
            </Link>
            <Link to='/levies/map' className='link'>MAP</Link>
            <Link to='/levies/form' className='link'>FORM</Link>
            <Link to='/levies/itinerary' className='link'>ITINERARY</Link>
        </div>
    )
}

export default Header