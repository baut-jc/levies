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

        // it('should display an error component on a bad request', () => {
        //     cy.intercept(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=06053&ev_connector_type=&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`, {
        //         statusCode: 404
        //     })
        //     cy.intercept(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=90011&ev_connector_type=&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4`, {
        //         statusCode: 404
        //     })
        //     .get('p')
        //     .contains('Something has Gone Wrong')
        //     .get('button').click()
        // })
})