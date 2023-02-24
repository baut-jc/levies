import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Map.scss'
import Station from '../Station/Station.tsx'
import {fetchData} from "../../fetchapis"
import Header from '../Header/Header.tsx'



export default function Map({renderItineraryStations}) {

  const location = useLocation()
  const [stations, setStations] = useState<string[]>([])
  
  
  useEffect(() => {
    console.log(location)
    fetchData(location)
    .then(data => {
      console.log(data)
      const filteredStations = data['fuel_stations'].filter(station => station['access_code'] === 'public')
      setStations(filteredStations)
    })
  }, [location])

  const grabStationIds = 
    stations.map(station => {
      return (
        <Station 
        id={station.id} 
        key={station.id}
        renderItineraryStations={renderItineraryStations}
        />
      )})
  
  return (
    <div className='station-map'>
      <Header />
      {grabStationIds}
    </div>
  )
}