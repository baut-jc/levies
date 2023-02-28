describe('Map page', () => {
    it('should display the map when Plan Trip button is clicked', () => {
        cy.visit('http://localhost:3000/form')
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=90011&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
        }, { fixture: 'startPoint' })
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=06053&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
        }, { fixture: 'endPoint' })
        cy.get('[name="startPoint"]').type('90011')   
        cy.wait(500) 
        cy.get('[name="endPoint"]').type('06053')
        cy.get('[type="submit"]').click()
        cy.get(':nth-child(1) > .station-card > :nth-child(1)').contains('Central Connecticut State University')
        
    })

    it('should be able to add to itinerary', () => {
        cy.visit('http://localhost:3000/form')
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=90011&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
        }, { fixture: 'startPoint' })
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=06053&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
        }, { fixture: 'endPoint' })
        cy.get('[name="startPoint"]').type('90011')   
        cy.wait(500) 
        cy.get('[name="endPoint"]').type('06053')
        cy.get('[type="submit"]').click()
        cy.get(':nth-child(1) > .station-card > :nth-child(1)').contains('Central Connecticut State University')
        cy.get(':nth-child(1) > .station-card > button').click()
        cy.get(':nth-child(1) > .station-card > button').contains('Remove')
        
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