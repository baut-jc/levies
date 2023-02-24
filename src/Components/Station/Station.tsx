import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchSingleStation } from "../../fetchapis"

function Station({id, renderItineraryStations, deleteItineraryStation}) {


  const [stationID, setStationID] = useState<number | null>(null)
  const [stationName, setStationName] = useState<string>('')
  const [stationAdress, setStationAdress] = useState<string>('')
  const [stationConnectorTypes, setStationConnectorTypes] = useState<string[]>([])
  const [stationOperationHours, setStationOperationHours] = useState<string>('')
  const [stationLatitude, setStationLatitude] = useState<string>('')
  const [stationLongitude, setStationLongitude] = useState<string>('')


  useEffect(() => {
    fetchSingleStation(id)
    .then(data=>{
      setStationID(id)
      setStationName(data.alt_fuel_station.station_name)
      setStationAdress(data.alt_fuel_station.street_address)
      setStationConnectorTypes(data.alt_fuel_station.ev_connector_types)
      setStationOperationHours(data.alt_fuel_station.access_days_time)
      setStationLatitude(data.alt_fuel_station.latitude)
      setStationLongitude(data.alt_fuel_station.longitude)
    })
  },[])

  const url = useLocation()
  
  const addToItinerary = () => {
    console.log("Add to itinerary")
    const newItineraryStation = stationID
    console.log(newItineraryStation)
    renderItineraryStations(newItineraryStation)
  }

  const removeFromItinerary = () => {
    deleteItineraryStation(stationID)
  }

  return(
    <div>
      <p>{stationName}</p>
      <p>{stationAdress}</p>
      <p>Connector Type(s): {stationConnectorTypes}</p>
      <p>Open: {stationOperationHours}</p>
      {url.pathname === "/map" ? <button onClick={addToItinerary}>Add Stop to Itinerary</button> : <button onClick={removeFromItinerary}>Remove from Itinerary</button>}
      
    </div>
  )

}

export default Station