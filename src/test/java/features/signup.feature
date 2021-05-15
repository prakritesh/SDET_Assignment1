@featuretag
Feature: SignUp to upskil elearning

  Background: This step will always execute before my test case
    Given Open the upskill elearning website

  @Smoke
  Scenario Outline: Verify the signup to upskill elearning
    Given user should be on the main page
    When User clicks on SignUp link
    And Select Teach Course Radio button
    And Enter mandatory details firstname "<firstname>", lastname "<lastname>", e-mail "<e-mail>", Username "<username>", pass "<password>",Confirm password
    And clicks on Register button
    Then Confirmation message will be populated in next screen and should have firstname "<firstname>" and lastname "<lastname>"
    When User clicks on top right corner
    Then Validate the email "<e-mail>"
    When User navigates to Homepage
    And clicks on Compose
    And Enter Send To "sneha"
    And Enter Subject
    And Enter mail body
    And Click on Send message
    Then Validate the acknowledgement

    Examples: 
      | firstname | username | lastname | e-mail              | password    | sendTo |
      | asbaag    | asbaag   | saha     | praksaha@in.ibm.com | Etihad@2021 | sneha  |
