Feature: Remove product

  Background: 
    Given User navigates to the application
	And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    And User click on the login button
    Given User choice the product
    And User click on Add to cart
    And User click on the cart icon

  Scenario: Click on remove button should remove product on your cart
    When User click on the remove button
    Then The product should be remove from your cart
