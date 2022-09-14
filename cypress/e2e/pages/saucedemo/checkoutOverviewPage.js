class checkoutOverviewPage {
  elements = {
    titleSpan: () => cy.get(".title"),
    cartQuantity: () => cy.get(".cart_quantity"),
    inventoryItemDesc: () => cy.get(".inventory_item_desc"),
    itemPrice: () => cy.get(".inventory_item_price"),
    finishBtn: () => cy.get('[data-test="finish"]'),
    cancelBtn: () => cy.get('[data-test="cancel"]'),
  };
  clickFinish() {
    this.elements.finishBtn().click();
  }
  clickCancel() {
    this.elements.cancelBtn().click();
  }
}

module.exports = new checkoutOverviewPage();
