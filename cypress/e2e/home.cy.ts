describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('h4 containing correct text', () => {
    cy.get('[data-testid=popular]').contains('Most Popular Articles');
  });

  it('should display a list of items', () => {
    cy.wait(3000)
    cy.get('[data-testid=articleItem]').should('have.length.greaterThan', 0); 
  });

  it('should navigate to the details page on item click', () => {
    cy.get('[data-testid=articleItem]').first().click();
    cy.url().should('include', '/detail'); 
  });


});
