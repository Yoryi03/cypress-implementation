class checkoutCompletePage {
  elements = {
    titleSpan: () => cy.get(".title"),
    completeHeader: () => cy.get(".complete-header"),
    completeText: () => cy.get(".complete-text"),
    backtoProductsBtn: () => cy.get('[data-test="back-to-products"]'),
  };
  clickBackHome() {
    this.elements.backtoProductsBtn().click();
  }
}

module.exports = new checkoutCompletePage();
