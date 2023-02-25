describe('Form page', () => {
  
  beforeEach(()=>{
    cy.visit('http://localhost:3000/form')
  })
  
  it('should display a form', () => {
    cy.get('form').should('be.visible')
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
    cy.get('input').should('not.have.value') //test for taken value
  })

  it('should take in US zip code for endpoint', () => {
    cy.get('input').should('not.have.value')
    //test for end point US ZIP code value
  })
  
  it('should display the map when Plan the Trip button is clicked', () => {
    cy.get('button').click()
    cy.url().should('eq','http://localhost:3000/map')
    //error handlers 
  })

})