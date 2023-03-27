import { API } from "./../../src/config/api.config";

describe("Cv List", () => {
  it("Visits the list cv page", () => {
    cy.intercept(API.cv, { fixture: "cvs.json" });
    cy.visit("/cv");
    cy.contains("cvStartingAdvProject");
    const listJuniors = cy.get("[datacy=listCv]").first();
    listJuniors.should("have.length", 1);
    listJuniors.first().contains("Skander");
    listJuniors.should("be.visible");
    const listSeniors = cy.get("[datacy=listCv]").last();
    listSeniors.should("have.length", 1);
    listSeniors.should("not.be.visible");
    listSeniors.first().contains("Aymen");
    cy.get("[datacy=cvCard]").should("not.exist");
  });
});
