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
    })
})