import { API } from "../../src/config/api.config";
describe("Cv Component", () => {
  it("Shows the list of cvs without details", () => {
    cy.intercept(API.cv, { fixture: "cvs" });
    cy.visit("/cv");
    cy.get("[datacy=listCv]");
    cy.get("[datacy=cvCard]").should("not.exist");
  });
});
