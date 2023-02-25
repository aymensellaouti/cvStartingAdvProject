import { API } from './../../src/config/api.config';

describe('Cv List', () => {
  it('Visits the list cv page', () => {
    cy.intercept(API.cv, { fixture: 'cvs.json' });

    cy.visit('/cv');
    cy.contains('cvStartingAdvProject');
    const listJuniors = cy.get('[data-testid=list-cv]').first();
    listJuniors.should('have.length', 1);
    listJuniors.first().contains('Skander');
    listJuniors.should('be.visible');
    const listSeniors = cy.get('[data-testid=list-cv]').last();
    listSeniors.should('have.length', 1);
    listSeniors.should('not.be.visible');
    listSeniors.first().contains('Aymen');
    cy.get('[data-testid=cv-card]').should('not.exist');
  });
});
