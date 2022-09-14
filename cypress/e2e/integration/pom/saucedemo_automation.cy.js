import homeSaucePage from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";
import cartPage from "../../pages/saucedemo/cartPage";
import checkoutPage from "../../pages/saucedemo/checkoutPage";
import checkoutOverviewPage from "../../pages/saucedemo/checkoutOverviewPage";
import checkoutCompletePage from "../../pages/saucedemo/checkoutCompletePage";
/// <reference types="Cypress"/>

const tests = require("../../../fixtures/loginCredentials.json");

describe("POM Implementation", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  tests.forEach((test) => {
    it("Should login to inventory page", () => {
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      inventoryPage.elements.titleSpan().should("have.text", "Products");
    });
  });
  tests.forEach((test) => {
    it("Should show error message for locked user", () => {
      homeSaucePage.typeUsername(test.locked);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements
        .errorMessage()
        .should(
          "have.text",
          "Epic sadface: Sorry, this user has been locked out."
        );
    });
  });
  tests.forEach((test) => {
    it("Add products in cart", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
    });
  });

  tests.forEach((test) => {
    it("Remove products from the cart", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickRemove();
    });
  });
  tests.forEach((test) => {
    it("Add products in cart and go to the cart page", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
    });
  });
  tests.forEach((test) => {
    it("Verify product quantity in cart ", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
      cartPage.elements.cartQuantity().should("have.text", "1");
    });
  });
  tests.forEach((test) => {
    it("Verify product description in cart ", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
      cartPage.elements
        .inventoryItemDesc()
        .should("have.text", test.product_descr);
    });
  });
  tests.forEach((test) => {
    it("Verify product price in cart ", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
      cartPage.elements.itemPrice().should("have.text", "$29.99");
    });
  });
  tests.forEach((test) => {
    it("Add products in cart and remove that product in cart page", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
      cartPage.elements.cartQuantity().should("have.text", "1");
      cartPage.clickRemove();
      cartPage.elements.cartItem().should("not.be.visible");
    });
  });
  tests.forEach((test) => {
    it("Add products in cart and proceed to checkout in cart page", () => {
      homeSaucePage.typeUsername(test.standard);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();
      homeSaucePage.elements.pageTitle().should("contains", "Swag Labs");
      inventoryPage.elements.titleSpan().should("have.text", "Products");
      inventoryPage.clickAdd();
      inventoryPage.elements.shoppingCartBadge().should("have.text", "1");
      inventoryPage.clickCart();
      cartPage.elements.titleSpan().should("have.text", "Your Cart");
      cartPage.elements.cartQuantity().should("have.text", "1");
      cartPage.clickCheckout();
      checkoutPage.elements
        .titleSpan()
        .should("have.text", "Checkout: Your Information");
      checkoutPage.typefirstName(test.firs_name);
      checkoutPage.typelastName(test.last_name);
      checkoutPage.typepostalCode(test.zipcode);
      checkoutPage.clickContinue();
      checkoutOverviewPage.elements
        .titleSpan()
        .should("have.text", "Checkout: Overview");
      checkoutOverviewPage.elements.cartQuantity().should("have.text", "1");
      checkoutOverviewPage.elements
        .inventoryItemDesc()
        .should("have.text", test.product_descr);
      checkoutOverviewPage.elements.itemPrice().should("have.text", "$29.99");
      checkoutOverviewPage.clickFinish();
      checkoutCompletePage.elements
        .completeHeader()
        .should("have.text", test.complete_header);
      checkoutCompletePage.elements
        .completeText()
        .should("have.text", test.complete_text);
      checkoutCompletePage.clickBackHome();
      inventoryPage.elements.titleSpan().should("have.text", "Products");
    });
  });
});
