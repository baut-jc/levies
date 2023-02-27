import React, { useEffect, useState } from "react"
import "./App.scss"
import {fetchData} from "../../fetchapis"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from '../Header/Header.tsx'
import Splash from "../Splash/Splash.tsx"
import Form from "../Form/Form.tsx"
import Map from '../Map/Map.tsx'
import Itinerary from '../Itinerary/Itinerary.tsx'
import Error from "../Error/Error.tsx"


function App() {

  const [vehicleType, setVehicleType] = useState<string>('')
  const [startPoint, setStartPoint] = useState<string>('')
  const [endPoint, setEndPoint] = useState<string>('')
  const [locations, setLocations] = useState<string[]>([])
  const [isSplashed, setIsSplashed] = useState<boolean>(false)
  const [stations, setStations] = useState<string[]>([])
  const [itineraryStations, setItineraryStations] = useState<number[]>([])
  const [zipCodes, setZipCodes] = useState<number[]>([]) 
  const [chargerType, getChargerType] = useState<string[]>([])

  const renderInfo = () => {
    return <div></div>
  }

  const renderItineraryStations = newItineraryStations => {
    setItineraryStations([...itineraryStations, newItineraryStations])
  }

  const deleteItineraryStation = id => {
    const filteredItinerary = itineraryStations.filter(stationID => stationID != id)
    setItineraryStations(filteredItinerary)
  }

  const changeZipCodes = newZipCodes => {
    setZipCodes(newZipCodes)
  }

  const selectChargerType = chargerTypeValue => {
    getChargerType(chargerTypeValue)
  }


  return (
    <main className="App">
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/form" element={
            <div className='form-page'>
              <Header />
              <Form
                changeZipCodes={changeZipCodes}
                selectChargerType={selectChargerType}
              />
            </div>
          }/>
          <Route path="/map" element={
            <div className='map-page'>
              <Header />
              <Map 
                renderItineraryStations={renderItineraryStations}
                chargerType={chargerType}
                zipCodes={zipCodes}
                deleteItineraryStation={deleteItineraryStation}
                itineraryStations={itineraryStations}
              />
            </div>
          }/>
          <Route path="/itinerary" element={
            <div>
              <Header />
              <Itinerary 
                itineraryStations={itineraryStations}
                deleteItineraryStation={deleteItineraryStation}
              />
            </div>
          }/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </main>
  )
}

export default App
