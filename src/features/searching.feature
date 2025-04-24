@searching
Feature: Searching functionality
    Background:
        Given User should be logged in
        And User should have the "Boards | Trello" title on the page

    Scenario: Search for existing board
        When User clicks on the search form at the navigation section
        And Users click on "Advance search" button
        Then User should be on the "Trello" page

        When User enters existing board "<title>" in seach form
        Then Corresponding board with "<title>" should be displayed
        And Corresponding board with "<title>" should be accessible
    Examples:
    | title                   |
    | NewTitleName            |