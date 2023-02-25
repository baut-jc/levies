//key: Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4

const fetchData = (zip,chargerType) => { return (fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=${zip}&ev_connector_type=${chargerType}limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`)
.then(response => {
  if(response.ok) {
    return response.json()
  } else {
    throw new Error(`${response.status} ${response.statusText}`)
  }
}))}

const fetchSingleStation = (id) => {
  return (fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/${id}.json?api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`))
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  })
}

export { fetchData, fetchSingleStation}