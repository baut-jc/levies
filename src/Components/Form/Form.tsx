import React, {useState} from "react"

function Form(){

  const [vehicleTypeInput, setVehicleTypeInput] = useState('')
  const [startPointInput, setStartPointInput] = useState('')
  const [endPointInput, setEndPointInput] = useState('')
  const [locationsInput, setLocationsInput] = useState('')


  return (
    <form>
      <input type="text" placeholder="vehicleType"></input>
      <input type="text" placeholder="Start Point"></input>
      <input type="text" placeholder="End Point"></input>
      <input type="text" placeholder="Locations"></input>
    </form>
  )
  
}