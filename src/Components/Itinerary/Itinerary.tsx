import React, {useState} from "react"
import Station from '../Station/Station.tsx'
import Header from '../Header/Header.tsx'


function Itinerary({itineraryStations, deleteItineraryStation}) {
  console.log(itineraryStations)
  const displayItinerary = itineraryStations.map(stationID => {
    return <Station 
    id={stationID}
    key={stationID}
    deleteItineraryStation={deleteItineraryStation}
    />
  })

  return (
  <div className='itinerary-display'>
    <Header />
    <div className='itineraries'>
      {displayItinerary}
    </div>
  </div>
  )

}

export default Itinerary