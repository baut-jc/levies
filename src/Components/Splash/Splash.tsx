import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form.tsx'
import WebLogo from '../../Assets/logo.png'
import './Splash.scss'

export default function Splash() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className='splash-page'>
        {showForm ? (
          <div>
            <img src={ WebLogo } className='web-logo'/>
            <Form />
          </div>
        ): 
          <div>
            <img src={ WebLogo } className='web-logo'/>
            <button onClick={() => setShowForm(true)}>Where's the Plug?</button>
          </div>
            } 
    </main>
  )
  }
