describe('Itinterary page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/itinerary')
    })
    it('should show the itinerary page', () => {
        cy.get('p').contains('Nothing Here...')
    })
    it('should contain results', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=undefined&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4'
        }, { fixture: 'itinerary' })
        cy.visit('http://localhost:3000/form')
        cy.get('[name="startPoint"]').type('06053')
        cy.get('.submit').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .station-card > button')
        cy.get('[href="/itinerary"]').click()
    })
    it('should display an error component on a bad request', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=undefined&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4'
        }, { fixture: 'itinerary' })
        .visit('http://localhost:3000/form')
        .get('[name="startPoint"]').type('06053')
        .get('.submit').click()
        .wait(1000)
        .get(':nth-child(1) > .station-card > button')
        .get('[href="/itinerary"]').click()
        .get('p')
        .contains('Something has Gone Wrong')
        .get('button').click()
    })
})