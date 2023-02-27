import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Map.scss'
import Station from '../Station/Station.tsx'
import {fetchData} from "../../fetchapis"
import Error from "../Error/Error.tsx";

export default function Map({renderItineraryStations,chargerType,zipCodes,deleteItineraryStation,itineraryStations}) {

  const [stations, setStations] = useState<any[]>([])
  const [networkErrorMap,setNetworkErrorMap] = useState<boolean>(false)
  
  const fetchStations = async () => {
    try {
      const data = await fetchData(zipCodes,chargerType)
      const filteredStations = data['fuel_stations'].filter(station => station['access_code'] === 'public')
      setStations(filteredStations)
      setNetworkErrorMap(false)
    } catch (error) {
      console.error(error.message)
      setNetworkErrorMap(true)
    }
  }

  useEffect(() => {
    fetchStations()
  }, [])
  
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

    <>
    {networkErrorMap ? <Error/> : 
    (<div className='station-map'>
        <div className='stations'>
          {grabStationIds}
        </div>
      </div>
      )} 
    </>)
}

  
