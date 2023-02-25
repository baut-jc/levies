import React, {useState} from "react"
import Station from '../Station/Station'
import Header from '../Header/Header'

function Itinerary({itineraryStations, deleteItineraryStation}) {
  console.log(itineraryStations)
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
     <Header/>
     {displayItinerary.length > 0 ? displayItinerary : <p>Nothing Here... Check out the Map to add Stations!</p>}
  </div>
  )
}

export default Itinerary