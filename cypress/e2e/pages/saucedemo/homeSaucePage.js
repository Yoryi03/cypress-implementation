class homeSaucePage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    pageTitle: () => cy.title(),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }
  typePassword(password) {
    this.elements.passwordInput().type(password);
  }
  clickLogin() {
    this.elements.loginBtn().click();
  }
}
module.exports = new homeSaucePage();
