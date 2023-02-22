describe('Can run a test', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should have a logo and a button on the splash page', ()=>{
    cy.get('img[class="web-logo"]')
    cy.get('button')
  })
  }
)