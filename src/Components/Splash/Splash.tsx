import React from 'react'
import { Link } from 'react-router-dom'
import WebLogo from '../../Assets/logo.png'
import './Splash.scss'

function Splash() {

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
