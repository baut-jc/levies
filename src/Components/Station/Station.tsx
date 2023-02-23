import React, { useEffect, useState } from "react"
import { fetchSingleStation } from "../../fetchapis"

function Station({id, renderItineraryStations}) {

  const [stationID, setStationID] = useState<number | null>(null)
  const [stationName, setStationName] = useState('')
  const [stationAdress, setStationAdress] = useState('')
  const [stationConnectorTypes, setStationConnectorTypes] = useState([])
  const [stationOperationHours, setStationOperationHours] = useState('')
  const [stationLatitude, setStationLatitude] = useState('')
  const [stationLongitude, setStationLongitude] = useState('')

  useEffect(() => {
    //Currently hardcoding 
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
  
  const addToItinerary = () => {
    console.log("Add to itinerary")
    //sends the stations ID up to app 
    const newItineraryStation = stationID
    console.log(newItineraryStation)
    renderItineraryStations(newItineraryStation)
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