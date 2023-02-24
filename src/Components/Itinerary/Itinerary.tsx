import React, {useState} from "react"
import Station from '../Station/Station'


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
    <div>
      {displayItinerary}
    </div>
  )

}

export default Itinerary