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
import Itinerary from '../Itinerary/Itinerary.tsx'




function App() {

  const [vehicleType, setVehicleType] = useState<string>('')
  const [startPoint, setStartPoint] = useState<string>('')
  const [endPoint, setEndPoint] = useState<string>('')
  const [locations, setLocations] = useState<string[]>([])
  const [isSplashed, setIsSplashed] = useState<boolean>(false)
  const [stations, setStations] = useState<string[]>([])
  const [itineraryStations, setItineraryStations] = useState<number[]>([])

  const renderInfo = () => {
    return <div></div>
  }

  const renderItineraryStations = newItineraryStations => {
    setItineraryStations([...itineraryStations, newItineraryStations])
  }

  const deleteItineraryStation = id => {
    console.log('delete runs')
    const filteredItinerary = itineraryStations.filter(stationID => stationID != id)
    console.log(filteredItinerary)
    setItineraryStations(filteredItinerary)
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
          <Route path="/map" element={<Map renderItineraryStations={renderItineraryStations}
          deleteItineraryStation={deleteItineraryStation}
          itineraryStations={itineraryStations}
          />}/>
          <Route path="/itinerary" element={<Itinerary itineraryStations={itineraryStations} deleteItineraryStation={deleteItineraryStation}/>}/>
        </Routes>
      {/* </Router> */}
    </main>
  )
}

export default App
