describe('Map page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/map')
    })
    it('should display the map', () => {
        
    })

    it('should display an error component on a bad request', () => {
        cy.intercept(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=&ev_connector_type=&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`, {
            statusCode: 404
        })
        .get('p')
        .contains('Something has Gone Wrong')
        .get('button').click()
    })
})