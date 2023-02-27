describe('Map page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/map')
        
    it('should display stations based on start zip', () => {
        cy.intercept({
            method: 'GET',              
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=87114,40509&limit=2&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4'
            }, { fixture: 'map.json' })
        })
        //cy.visit('http://localhost:3000/form')
        //cy.get('[name="startPoint"]').type('87114')
        cy.get('[name="endPoint"]').type('40509')
        cy.get('button').click()
        
    })
    
    it('should display an error component on a bad request', () => {
        cy.intercept('https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=&ev_connector_type=&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
            { statusCode: 404 })
        // .visit('http://localhost:3000/map')
        .get('p')
        .contains('Something has Gone Wrong')
        .get('button').click()
        .get('img[class="web-logo"]')
    })
})
    // cy.request('/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=87114,40509&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4').its('status').should('eq', 200)
    // cy.wait(1000)
    // .then((response) => {
        //     expect(response.status).to.eq(200)
        //     expect(response.body).to.have.length(500)
        //     expect(response).to.have.property('headers')
        //     expect(response).to.have.property('duration')