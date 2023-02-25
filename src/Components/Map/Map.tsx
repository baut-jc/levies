import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Map.scss'
import Station from '../Station/Station'
import {fetchData} from "../../fetchapis"
import Header from '../Header/Header'

export default function Map({renderItineraryStations,zipCodes,deleteItineraryStation,itineraryStations}) {


  const [stations, setStations] = useState<any[]>([])
  
  useEffect(() => {
    fetchData(zipCodes)
    .then(data => {
      // console.log(data)
      const filteredStations = data['fuel_stations'].filter(station => station['access_code'] === 'public')
      setStations(filteredStations)
    })
  }, [stations])

  const grabStationIds = 
    stations.map(station => {
      return (
      <div className='stations'>
        <Station 
        id={station.id} 
        key={station.id}
        renderItineraryStations={renderItineraryStations}
        deleteItineraryStation={deleteItineraryStation}
        itineraryStations={itineraryStations}
        />
       </div>
      )})
  
  return (
    <div className='station-map'>
      <Header />
      <div className='stations'>
        {grabStationIds}
      </div>
    </div>
  )
}