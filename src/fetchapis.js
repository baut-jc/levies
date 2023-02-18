//key: Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4

const fetchData = () => { return (fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`)
.then(response => response.json()))}

export default fetchData