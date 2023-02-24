import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchSingleStation } from "../../fetchapis"

function Station({id, renderItineraryStations, deleteItineraryStation, itineraryStations}) {


  const [stationID, setStationID] = useState<number | null>(null)
  const [stationName, setStationName] = useState<string>('')
  const [stationAdress, setStationAdress] = useState<string>('')
  const [stationConnectorTypes, setStationConnectorTypes] = useState<string[]>([])
  const [stationOperationHours, setStationOperationHours] = useState<string>('')
  const [stationLatitude, setStationLatitude] = useState<string>('')
  const [stationLongitude, setStationLongitude] = useState<string>('')
  const [inItinerary, setInItinerary] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>('Add Stop to Itinerary')

  useEffect(() => {
    if(itineraryStations.includes(id)){
      setInItinerary(true)
      setButtonText('Remove from Itinerary')
    }
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
    if(!inItinerary){
      console.log("Add to itinerary")
      const newItineraryStation = stationID
      console.log(newItineraryStation)
      renderItineraryStations(newItineraryStation)
      setInItinerary(true)
      setButtonText('Remove from Itinerary')
    } else {
      deleteItineraryStation(stationID)
      setInItinerary(false)
      setButtonText('Add Stop to Itinerary')
    }
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
      {url.pathname === "/map" ? <button onClick={addToItinerary}>{buttonText}</button> : <button onClick={removeFromItinerary}>Remove from Itinerary</button>}
      
    </div>
  )

}

export default Station