import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Map.scss'
import Station from '../Station/Station.tsx'
import {fetchData} from "../../fetchapis"
import Header from '../Header/Header.tsx'



export default function Map({renderItineraryStations}) {
  const location = useLocation()
  const zipData = location.state?.data
  const [stations, setStations] = useState<string[]>([])
  const [zip, setZip] = useState<string>('')

  setZip(zipData)

  useEffect(() => {
    fetchData(zip)
    .then(data => {
      const filteredStations = data['fuel_stations'].filter(station => station['access_code'] === 'public')
      setStations(filteredStations)
    })
  }, [stations])

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