Feature: Checkout order

  Background: 
    Given User navigates to the application
    And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    And User click on the login button
    Given User choice the product
    And User click on Add to cart
    And User click on the cart icon

  Scenario: Checkout the order and fill your information should be success
    Given User click on checkout
    And User fill first name with "Andres"
    And User fill last name with "Dinis"
    And User fill Postal code with "12345"
    And User click on continue
    When User click on finish
    Then Should display a success message 

