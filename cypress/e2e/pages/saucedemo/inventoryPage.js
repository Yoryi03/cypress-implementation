class invetoryPage {
  elements = {
    titleSpan: () => cy.get(".title"),
    inventoryContainer: () => cy.get("#inventory_container"),
    addItemBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeItemBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    shoppingCartBadge: () => cy.get(".shopping_cart_badge"),
    cartBtn: () => cy.get("#shopping_cart_container"),
  };
  clickAdd() {
    this.elements.addItemBtn().click();
  }
  clickRemove() {
    this.elements.removeItemBtn().click();
  }
  clickCart() {
    this.elements.cartBtn().click();
  }
}

module.exports = new invetoryPage();
