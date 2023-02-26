import React, { useEffect, useState } from "react"
import "./App.scss"
import {fetchData} from "../../fetchapis"
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Switch
} from 'react-router-dom'
import Form from "../Form/Form"
import Splash from "../Splash/Splash"
import Map from '../Map/Map'
import Itinerary from '../Itinerary/Itinerary'
import Error from "../Error/Error"




function App() {

  const [vehicleType, setVehicleType] = useState<string>('')
  const [startPoint, setStartPoint] = useState<string>('')
  const [endPoint, setEndPoint] = useState<string>('')
  const [locations, setLocations] = useState<string[]>([])
  const [isSplashed, setIsSplashed] = useState<boolean>(false)
  const [stations, setStations] = useState<string[]>([])
  const [itineraryStations, setItineraryStations] = useState<number[]>([])
  const [zipCodes, setZipCodes] = useState<number[]>([])
  const [chargerType,setChargerType] = useState<string>('')

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

  const changeZipCodes = newZipCodes => {
    setZipCodes(newZipCodes)
  }

  // useEffect(() => {
  //   fetchData().then(data => console.log(data))
  // }, [])

  return (
    <main className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/form" element={
            <Form
            changeZipCodes={changeZipCodes}
            />}
          />
          {/* <Route path="/:id" element={<Station/>}/> */}
          <Route path="/map" element={
            <Map 
              renderItineraryStations={renderItineraryStations}
              zipCodes={zipCodes}
              deleteItineraryStation={deleteItineraryStation}
              itineraryStations={itineraryStations}
              chargerType={chargerType}
            />}
          />
          <Route path="/itinerary" element={
            <Itinerary 
              itineraryStations={itineraryStations}
              deleteItineraryStation={deleteItineraryStation}
            />
          }/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      {/* </Router> */}
    </main>
  )
}

export default App
