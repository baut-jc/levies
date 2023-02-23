import React, { useEffect, useState } from "react"
import "./App.scss"
import {fetchData} from "../../fetchapis"
import Header from "../Header/Header.tsx"
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Switch
} from 'react-router-dom'
import Form from "../Form/Form.tsx"
import Splash from "../Splash/Splash.tsx"
import Station from "../Station/Station.tsx"
import Map from '../Map/Map.tsx'




function App() {

  const [vehicleType, setVehicleType] = useState('')
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const [locations, setLocations] = useState([])
  const [isSplashed, setIsSplashed] = useState(false)
  const [stations, setStations] = useState([])

  const renderInfo = () => {
    return <div></div>
  }

  useEffect(() => {
    fetchData().then(data => console.log(data))
  }, [])

  return (
    <main className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/form" element={<Form/>}/>
          {/* <Route path="/:id" element={<Station/>}/> */}
          <Route path="/map" element={<Map/>}/>
        </Routes>
      {/* </Router> */}
    </main>
  )
}

export default App
