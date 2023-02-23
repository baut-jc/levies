import React, {useState} from "react"
import "./Form.scss"
import Header from "../Header/Header.tsx"
import { Link } from "react-router-dom"


function Form(){

  const [chargerTypeInput, setChargerTypeInput] = useState('')
  const [startPointInput, setStartPointInput] = useState('')
  const [endPointInput, setEndPointInput] = useState('')
  const [locationsInput, setLocationsInput] = useState('')

  const submitForm = event => {
    // event.preventDefault()
    console.log("does something eventually")
    clearInputs()
  }

  const clearInputs = () => {
    setChargerTypeInput('')
    setStartPointInput('')
    setEndPointInput('')
    setLocationsInput('')
  }

  return (
    <>
    <Header />
    <form>
      <label htmlFor="chargerType">Charger Type</label>
      <select name="chargerType" value={chargerTypeInput} onChange={ event => setChargerTypeInput(event.target.value)}>
        <option value="NEMA1450">NEMA 14-50</option>
        <option value="NEMA515">NEMA 5-15</option>
        <option value="NEMA520">NEMA 5-20</option>
        <option value="J1772">J1772</option>
        <option value="J1772COMBO">CCS</option>
        <option value="CHADEMO">CHAdeMO</option>
        <option value="TESLA">Tesla</option>
      </select>
      <label htmlFor="startPoint">Start Point</label>
      <input name="startPoint" placeholder="Starting Zipcode" value={startPointInput} onChange={ event => setStartPointInput(event.target.value)}></input>
      <label htmlFor="endPoint">End Point</label>
      <input name="endPoint" placeholder="Ending Zipcode" value={endPointInput} onChange={ event => setEndPointInput(event.target.value)}></input>
      <label htmlFor="locations">Locations</label>
      <input name="locations" placeholder="Zipcodes of Visiting Locations" value={locationsInput} onChange={ event => setLocationsInput(event.target.value)}></input>
      <Link to='/map' className='link'>
        <button onClick={submitForm}>Plan Trip</button>
      </Link>
    </form>
    </>
  )  
}

export default Form