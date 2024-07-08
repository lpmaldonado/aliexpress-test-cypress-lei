// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('disableResizeObserver', () => {
    cy.visit('/', {
        onBeforeLoad: (win) => {
            win.ResizeObserver = class {
                observe() {}
                unobserve() {}
                disconnect() {}
            };
        }
    });
});

Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('#search-words').type(`${productName}{enter}`);
});

Cypress.Commands.add('goToSecondPage', () => {
    cy.get('.comet-pagination-item-2 > a').scrollIntoView().click();
    cy.url().should('include', 'page=2');
});

Cypress.Commands.add('verifySecondItem', () => {
    cy.get('#card-list [data-tticheck="true"]')
      .then($elements => {
          if ($elements.length > 1) {
              cy.wrap($elements.eq(1)).should('be.visible');
              cy.log('The second item is visible');
          } else {
              cy.log('The second item does not exist');
          }
      });
});