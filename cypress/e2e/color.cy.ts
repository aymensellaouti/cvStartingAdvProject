import * as cypress from 'cypress';

describe('Color Component', () => {
  beforeEach(() => {
    cy.visit('/admin/color/red/blue');
  });
  it('have the color from the url', () => {
    const div = cy.get('[data-testid=div-color]');
    div.should('have.css', 'background-color', 'rgb(255, 0, 0)');
    /*
    1 - Je selectionne la Div
    2 - Je vérifie que la couleur est rouge
    */
  });

  it('change color after typing in the input', () => {
    /*
    1 - Je selectionne le input
    2 - Je tape la nouvelle couleur
    3 - Je lache la main
    4 - Je vérifie que c'est la bonne couleur
    */
    const input = cy.get('[data-testid=input-color]');
    input.type('blue');
    input.type('{enter}');
    const div = cy.get('[data-testid=div-color]');
    div.should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
});







