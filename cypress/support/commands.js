Cypress.Commands.add('visible', (selector) => {
  cy.get(selector).should('be.visible');
});
Cypress.Commands.add('notVisible', (selector) => {
  cy.get(selector).should('not.be.visible');
});
Cypress.Commands.add('clickBtn', (selector) => {
  cy.get(selector).click();
});
