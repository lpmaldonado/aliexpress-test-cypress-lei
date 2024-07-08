describe('AliExpress Instax Mini Test', () => {
  before(() => {
    cy.disableResizeObserver();
  });


  it('checks if the second item on the second page has at least 1 item to be bought', () => {

    cy.searchProduct('instax mini');
    cy.goToSecondPage();

    // Verify the card list exists
    cy.get('#card-list', { timeout: 10000 }).should('exist');

    // Verify the second item from the list
    cy.verifySecondItem();
  });
});
