import React, { useEffect, useState } from "react"
import "./App.scss"
import {fetchData} from "../../fetchapis"
import Header from "../Header/Header.tsx"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Form from "../Form/Form.tsx"
import Splash from "../Splash/Splash.tsx"
import Station from "../Station/Station.tsx"




function App() {

  const [vehicleType, setVehicleType] = useState('')
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const [locations, setLocations] = useState([])
  const [isSplashed, setIsSplashed] = useState(false)

  const renderInfo = () => {
    return <div></div>
  }

  useEffect(() => {
    fetchData().then(data => console.log(data))
  }, [])


  return (
    <main className='App'>
      {isSplashed ? (
        <Router>
          <Routes>
           <Route path="/" element={<Header/>}/>
           {/* <Route path="/:id" element={<Station/>}/> */}
          </Routes>
        </Router> 
        ): 
        <div>
          <Splash />
        </div>
      }
    </main>
  )
  // return (
  //   <main className="App">
  //     <Router>
  //       <Splash />
  //       <Routes>
  //         <Route path="/" element={<Header/>}/>
  //         <Route path="/form" element={<Form/>}/>
  //         {/* <Route path="/:id" element={<Station/>}/> */}
  //       </Routes>
  //     </Router>
  //   </main>
  // )
}

export default App
