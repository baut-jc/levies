import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Map.scss'
import Station from '../Station/Station'
import {fetchData} from "../../fetchapis"
import Header from '../Header/Header.tsx'
export default function Map({renderItineraryStations,chargerType,zipCodes,deleteItineraryStation,itineraryStations}) {
import Error from "../Error/Error";


  const [stations, setStations] = useState<any[]>([])
  const [networkErrorMap,setNetworkErrorMap] = useState<boolean>(false)
  
  useEffect(() => {
    fetchData(zipCodes,chargerType)
    .catch((error) => {
      console.error(error.message)
      setNetworkErrorMap(true)
    })
    .then(data => {
      if(data){
        const filteredStations = data['fuel_stations'].filter(station => station['access_code'] === 'public')
        setStations(filteredStations)
      } 
    })
  }, [stations])
  // console.log('YAY!', stations) 
  
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
        <Header />
        <div className='stations'>
          {grabStationIds}
        </div>
      </div>
      )} 
    </>)
  
}