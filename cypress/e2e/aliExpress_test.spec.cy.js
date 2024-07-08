describe('AliExpress Instax Mini Test', () => {
  before(() => {
    cy.disableResizeObserver();
});
  
  
  it('checks if the second item on the second page has at least 1 item to be bought', () => {

      cy.get('#search-words').type('instax mini{enter}');

      cy.get('.comet-pagination-item-2 > a').scrollIntoView().click();  

      cy.url().should('include', 'page=2');

    
        cy.get('#card-list', { timeout: 10000 })
        .should('exist'); 

    
        cy.get('#card-list [data-tticheck="true"]')
          .eq(1)
          .click();
  });
});
