Feature: sorting product
  Background: 
    Given User navigates to the application
		And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    And User click on the login button

	Scenario: Select different options on dropdowns sort should sorting the list
		Given Click on dropdown
		When Select "<value>"
		Then The list should be sorted "<option>"

		Examples: 
			|        option       | value |
      | Name (A to Z)     	|	 az   |
      | Name (Z to A)       |  za   |
			| Price (low to high) |  lohi |
      | Price (high to low) |  hilo |


