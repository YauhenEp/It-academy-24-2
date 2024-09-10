Feature: Ebay search

  Scenario: Create search
    Given I go to https://www.ebay.com/ page
    When I input text "iPhone" to component "Home Page > Search Component > Search Input"
    And I click on "Home Page > Search Component > Search Button" button
    Then I expect that element "Search Result Page > Search Count Header" should contains text "iPhone"