import React, { useEffect, useState } from "react"
import { fetchSingleStation } from "../../fetchapis"

function Station() {

  const [stationName, setStationName] = useState('')
  const [stationAdress, setStationAdress] = useState('')
  const [stationConnectorTypes, setStationConnectorTypes] = useState([])
  const [stationOperationHours, setStationOperationHours] = useState('')
  const [stationLatitude, setStationLatitude] = useState('')
  const [stationLongitude, setStationLongitude] = useState('')

  useEffect(() => {
    //Currently hardcoding 
    fetchSingleStation(1583)
    .then(data=>{
      setStationName(data.alt_fuel_station.station_name)
      setStationAdress(data.alt_fuel_station.street_address)
      setStationConnectorTypes(data.alt_fuel_station.ev_connector_types)
      setStationOperationHours(data.alt_fuel_station.access_days_time)
      setStationLatitude(data.alt_fuel_station.latitude)
      setStationLongitude(data.alt_fuel_station.longitude)
    })
  },[])
  
  const addToItinerary = () => {
    console.log("Add to itinerary")
  }

  return(
    <div>
      <p>{stationName}</p>
      <p>{stationAdress}</p>
      <p>Connector Type(s): {stationConnectorTypes}</p>
      <p>Open: {stationOperationHours}</p>
      <button onClick={addToItinerary}>Add Stop to Itinerary</button>
    </div>
  )

}

export default Station