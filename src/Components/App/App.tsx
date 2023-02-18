import React, { useEffect, useState } from "react"
import "./App.scss" 
import  fetchData  from "../../fetchapis"



function App() {

  const [vehicleType, setVehicleType] = useState('')
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const [locations, setLocations] = useState([])

  const renderInfo = () => {
    return <div></div>
  }

  useEffect(() => {
    fetchData().then(data=>console.log(data))
  },[])

  return (
    <main className="App">
      <h1>Levies (Logo goes here)</h1>
      {/* <Form ></Form>  this one will be functional with hooks*/}

    </main>
  )
}

export default App
