import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import WebLogo from '../../Assets/logo.png'
import './Splash.scss'

export default function Splash() {

  return (
    <div className='splash-page'>
      <img src={ WebLogo } className='web-logo' width='350px'/>
      <Link to='/form' className='link'>
        <button>Where's the Plug?</button>
      </Link>
    </div>        
  )
  }
