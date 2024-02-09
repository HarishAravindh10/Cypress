describe('template spec', () => 
{
  it('passes', () => 
  {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')

    cy.xpath("//input[@placeholder='Username']").type('Admin')

    cy.xpath("//input[@placeholder='Password']").type('admin123')

    cy.xpath("//button[@type='submit']").click()

  })



})  