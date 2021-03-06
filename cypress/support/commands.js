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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

// FIXME: Move to dedicated plugin.
Cypress.Commands.add('waitForNavigate', { prevSubject: 'optional'}, () => {
  cy.window().then( win => {
    const currentPath = win.location.pathname;
    cy.waitUntil(() => cy.window().then(win => win.location.pathname !== currentPath));
  });

});

// FIXME: Move to dedicated plugin.
Cypress.Commands.add('graphqlQuery', (query, variables = {}) => {
  return cy.request({
    url: Cypress.env('SWAPI'),
    method: 'POST',
    body: {
      query: query,
      variables: variables,
    }
  });
})
