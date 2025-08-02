Feature: User Login to BPB Online

  Scenario: Successful login with valid credentials
    Given I navigate to the bpbonline website "https://practice.bpbonline.com/"
    And I click on My Account button
    And I enter the email "qwerty@yahoo.com"
    And I enter the password "qwerty"
    And I click on Sign In button
    Then I should be signed in with the message "My Account Information"