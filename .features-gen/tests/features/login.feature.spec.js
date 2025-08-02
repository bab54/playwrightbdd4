// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixture/fixture.js";

test.describe('User Login to BPB Online', () => {

  test('Successful login with valid credentials', async ({ Given, loginPage, And, Then }) => { 
    await Given('I navigate to the bpbonline website "https://practice.bpbonline.com/"', null, { loginPage }); 
    await And('I click on My Account button', null, { loginPage }); 
    await And('I enter the email "qwerty@yahoo.com"', null, { loginPage }); 
    await And('I enter the password "qwerty"', null, { loginPage }); 
    await And('I click on Sign In button', null, { loginPage }); 
    await Then('I should be signed in with the message "My Account Information"', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the bpbonline website \"https://practice.bpbonline.com/\"","stepMatchArguments":[{"group":{"start":36,"value":"\"https://practice.bpbonline.com/\"","children":[{"start":37,"value":"https://practice.bpbonline.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I click on My Account button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter the email \"qwerty@yahoo.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"qwerty@yahoo.com\"","children":[{"start":19,"value":"qwerty@yahoo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter the password \"qwerty\"","stepMatchArguments":[{"group":{"start":21,"value":"\"qwerty\"","children":[{"start":22,"value":"qwerty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on Sign In button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be signed in with the message \"My Account Information\"","stepMatchArguments":[{"group":{"start":39,"value":"\"My Account Information\"","children":[{"start":40,"value":"My Account Information","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end