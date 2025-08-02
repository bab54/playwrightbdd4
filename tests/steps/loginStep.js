
import { createBdd } from 'playwright-bdd';
import {test} from '../fixture/fixture';

const { Given, When, Then } = createBdd(test);



Given('I navigate to the bpbonline website {string}', async ({loginPage}, url) => {
  await loginPage.navigate(url);
});

Given('I click on My Account button', async ({loginPage}) => {
   await loginPage.clickAccountButton();
});

Given('I enter the email {string}', async ({loginPage}, email) => {
 await loginPage.enterEmail(email); 
});

Given('I enter the password {string}', async ({loginPage}, password) => {
 await loginPage.enterPassword(password);
});

Given('I click on Sign In button', async ({ loginPage}) => {
   await loginPage.clickSignInButton()
});

Then('I should be signed in with the message {string}', async ({loginPage}, message) => {
  await loginPage.verifyLoginSuccess()
});
