describe('Splash Display', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('Should have a logo and a button on the splash page', ()=>{
    cy.get('img[class="web-logo"]').should('be.visible')
    cy.get('button').click()
    cy.url().should('eq','http://localhost:3000/form')
  })
  }
)