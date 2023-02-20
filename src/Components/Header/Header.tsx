import './Header.scss'
import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
    return(
        <div className='header'>
            {/* <Link path='/'>
            <img src=''></img>
            </Link> */}
            <h2>This is a header</h2>
            {/* <Link path=''>MAP</Link> */}
            {/* <Link path=''>STATIONS NEAR ME</Link> */}
        </div>
    )
}

export default Header