import {  expect } from '@playwright/test';
//export 
class LoginPage {
  constructor(page) {
    this.page = page;
    this.accountButton = page.getByRole('button', { name: 'My Account' });
    this.emailField = page.locator('input[name="email_address"]');
    this.passwordField = page.locator('input[name="password"]');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.headerText = page.locator('h1');
  }

  async navigate() {
    await this.page.goto('https://practice.bpbonline.com/');
  }


 async clickAccountButton() {
    await this.accountButton.click();
 }
    async enterEmail(email ) {
     
    await this.emailField.fill(email); 
    }
    
    async enterPassword( password) {
       
    await this.passwordField.fill(password);
    }
    async clickSignInButton() {
    
    await this.signInButton.click();

    }

  


  async verifyLoginSuccess() {
  // Wait until headerText is visible (more efficient than fixed timeout)
  //await this.headerText.waitFor({ state: 'visible', timeout: 10000 });

  // Assert header contains expected text
  await expect(this.headerText).toContainText('My Account Information');

  // Optional: Short pause if needed after login success, but use sparingly
  await this.page.waitForTimeout(1000);
}

}
module.exports = { LoginPage };