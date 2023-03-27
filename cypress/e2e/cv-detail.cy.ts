import { API } from "../../src/config/api.config";
describe("Cv-Details", () => {
  it("should show the first element card when we click on it", () => {
    cy.intercept(API.cv, { fixture: "cvs.json" });
    cy.visit("/cv");
    /* list-cv */
    const listJuniors = cy.get("[datacy=listCv]").first();
    listJuniors.first().click();
    cy.get("[datacy=cvCard]");
    cy.get("[datacy=cvCardName]").contains("Skander Sellaouti");
  });
  it("should navigate to the first element detail when we click on the detail button ", () => {
    cy.intercept(API.cv, { fixture: "cvs.json" });
    cy.visit("/cv");
    /* list-cv */
    const listJuniors = cy.get("[datacy=listCv]").first();
    listJuniors.first().click();
    cy.intercept(API.cv + 2, { fixture: "cv2.json" });
    cy.get("[datacy=cvCardDetailsBtn]").click({ force: true });
    cy.location().should((location) =>
      expect(location.pathname).to.equal("/cv/2")
    );
    cy.get("[datacy=cvName]").contains("Sellaouti");
    cy.get("[datacy=cvFirstname]").contains("Skander");
  });
});
