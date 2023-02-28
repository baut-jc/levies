import React, {useState} from "react"
import Station from '../Station/Station'
import Header from '../Header/Header'
import './Itinerary.scss'

function Itinerary({itineraryStations, deleteItineraryStation}) {
  const displayItinerary = itineraryStations.map(stationID => {
    return <Station 
    id={stationID}
    key={stationID}
    deleteItineraryStation={deleteItineraryStation}
    itineraryStations={itineraryStations}
    />
  })

  return (
   <div className='itineraries'>
     {displayItinerary.length > 0 ? displayItinerary : <p>Nothing Here... Check out the Map to add Stations!</p>}
  </div>
  )
}

export default Itinerary