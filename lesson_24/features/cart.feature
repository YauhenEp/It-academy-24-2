Feature: Cart functionality

  Scenario: Empty cart should have Start Shopping and Sign in Buttons
    Given I go to https://www.ebay.com/ page
    When I click on "Home Page > Header > Cart Button" button
    And I wait for 3 seconds
    Then I expect that element "Cart Page > Sign In Button" should be "displayed"
    And I expect that element "Cart Page > Continue Shopping Button" should be "displayed"