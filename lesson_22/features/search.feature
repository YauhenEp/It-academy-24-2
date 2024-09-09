Feature: Ebay search

  Scenario: Create search
    Given I navigate on https://www.ebay.com/ page
    When I input text "iPhone" to component "Search > Search Input"
    And I click on "Search > Search Button" button
    Then I expect that element "Search Result Page > Search Count Header" should contains text "iPhone"