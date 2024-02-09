describe('form', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/:')
    cy.title().should('eq','React App')
    cy.xpath("//input[@placeholder='S.No']").type('8')
    cy.xpath("//input[@placeholder='Sex']").type('Male')
    cy.xpath("//input[@placeholder='First Name']").type('Siva')
    cy.xpath("//input[@placeholder='Last Name']").type('Bharathi')
    cy.xpath("//input[@placeholder='Mobile Number']").type('1234567890')
    cy.xpath("//input[@placeholder='Age']").type('20')
    cy.xpath("//input[@placeholder='Email']").type('Siva123')
    cy.xpath("//input[@placeholder='Password']").type('Siva@123')
    cy.xpath("//button[@type='submit']").click()

  })
})