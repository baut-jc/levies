import React from 'react'
import { Link } from 'react-router-dom'
import WebLogo from '../../Assets/logo.png'
import './Splash.scss'

export default function Splash() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className='splash-page'>  
      <div>
        <img src={ WebLogo } className='web-logo'/>
        <Link to='/form' className='link'>
          <button>Where's the Plug?</button>
        </Link>
      </div>        
    </main>
  )
  }
