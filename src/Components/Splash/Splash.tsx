import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form.tsx'
import WebLogo from '../../Assets/logo.png'
import './Splash.scss'

function Splash() {
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
  
  export default Splash
  
  // const [count, setCount] = useState<number>(0)
  // --> import useEffect from React
  // useEffect(() => {
  //   fetchData().then(data=>console.log(data))
  // },[])
  // useEffect(() => {
  //   const r = isSunday(new Date())
  //   console.log(r)
  // }, [count])
  // const isSunday = (v: Date): boolean => {
  //   return v.getDay() === 0
  // }
 
// --> at click event handler
