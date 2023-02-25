describe('Form page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/form')
  })
  
  it('should display a form', () => {
    cy.get('form').should('be.visible')
  })

  it('should display a header', () => {
    cy.get('.home-icon')
    cy.get('[href="/map"]').contains('MAP')
    cy.get('[href="/form"]').contains('FORM')
    cy.get('[href="/itinerary"]').contains('ITINERARY')
    
  })
  
  it('should select Charger Type', () => {
    cy.get('select').select(0).should('have.value', 'NEMA1450')
    cy.get('select').select(1).should('have.value', 'NEMA515')
    cy.get('select').select(2).should('have.value', 'NEMA520')
    cy.get('select').select(3).should('have.value', 'J1772')
    cy.get('select').select(4).should('have.value', 'J1772COMBO')
    cy.get('select').select(5).should('have.value', 'CHADEMO')
    cy.get('select').select(6).should('have.value', 'TESLA')
  }) 

  it('should take in US zip code for the starting point', () => {
    cy.get('[name="startPoint"]').should('not.have.value')
    cy.get('[name="startPoint"]').type('90011') //test for taken value
  })

  it('should take in US zip code for endpoint', () => {
    cy.get('[name="endPoint"]').should('not.have.value')
    cy.get('[name="endPoint"]').type('06053')
    //test for end point US ZIP code value
  })
  
  it('should display the map when Plan the Trip button is clicked', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=90011&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
    }, { fixture: 'startPoint' })
    cy.intercept({
      method: 'GET',
      url: 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=06053&limit=10&access=public&api_key=Z6T9IALxddG6bZYlBZ4IncLhusz3nVjdGSzv9Iu4',
    }, { fixture: 'endPoint' })
    cy.get('.submit').click()
    cy.url().should('eq','http://localhost:3000/map')
    //error handlers 
  })

})