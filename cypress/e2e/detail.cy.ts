describe('detail page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display article details', () => {
    cy.wait(3000)
    cy.get('[data-testid=articleItem]').should('have.length.greaterThan', 0); 
    cy.get('[data-testid=articleItem]').first().click(); 
    cy.url().should('include', '/detail'); 
    cy.get('[data-testid=articleDetail]')
    cy.get('[data-testid=articleSubHeader]')
  });

})