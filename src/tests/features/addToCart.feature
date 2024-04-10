Feature: Ordering product

  Background: 
    Given User navigates to the application
		And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    And User click on the login button

  Scenario: Click on Add to cart should add product on your cart
    Given User choice the product
    And User click on Add to cart
    When User click on the cart icon
    Then The product should be in your cart
