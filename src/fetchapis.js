//key: Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4

const fetchData = (zip) => { return (fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=${zip}&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`)
.then(response => response.json()))}

const fetchSingleStation = (id) => {
  return (fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/${id}.json?api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`))
  .then(response => response.json())
}

export { fetchData, fetchSingleStation}