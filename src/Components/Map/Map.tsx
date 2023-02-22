import React, { useState, useEffect } from "react";
import './Map.scss'
import Station from '../Station/Station.tsx'
import {fetchData} from "../../fetchapis"


export default function Map() {
  const [stations, setStations] = useState([])

  useEffect(() => {
    fetchData().then(data => {
      console.log(data.length < 10)})
  }, [])
  // const showStations = (stationMarker) => {
  //   setStations([...stations, stationMarker])
  // }
  // const stationsMap = stations.map(station => {
  //   return (
  //     <Station station=stat
  //     />
  //   )
  // })

  return (
    <div className='station-map'>
      <Station />
    </div>
  )
}