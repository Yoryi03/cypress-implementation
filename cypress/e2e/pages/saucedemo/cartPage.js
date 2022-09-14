class cartPage {
  elements = {
    titleSpan: () => cy.get(".title"),
    quantity: () => cy.get(".cart_quantity_label"),
    description: () => cy.get("cart_desc_label"),
    cartItem: () => cy.get(".removed_cart_item"),
    cartQuantity: () => cy.get(".cart_quantity"),
    inventoryItemDesc: () => cy.get(".inventory_item_desc"),
    itemPrice: () => cy.get(".inventory_item_price"),
    continueShoppinBtn: () => cy.get('[data-test="continue-shopping"]'),
    removeBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    checkoutBtn: () => cy.get("#checkout"),
  };
  clickRemove() {
    this.elements.removeBtn().click();
  }
  clickCheckout() {
    this.elements.checkoutBtn().click();
  }
}

module.exports = new cartPage();
