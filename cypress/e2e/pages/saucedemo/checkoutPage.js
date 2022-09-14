class checkoutPage {
  elements = {
    titleSpan: () => cy.get(".title"),
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
  };
  clickContinue() {
    this.elements.continueBtn().click();
  }
  typefirstName(name) {
    this.elements.firstName().type(name);
  }
  typelastName(lastname) {
    this.elements.lastName().type(lastname);
  }
  typepostalCode(postalcode) {
    this.elements.postalCode().type(postalcode);
  }
}

module.exports = new checkoutPage();
