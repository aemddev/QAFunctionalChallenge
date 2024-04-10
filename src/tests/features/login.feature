Feature: User authentication

  Scenario: Login should be success
    Given User navigates to the application
    And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    When User click on the login button
    Then User should logged in successfully
