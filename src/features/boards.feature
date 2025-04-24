@boards
Feature: Boards functionality
    Background:
        Given User is logged in
    Scenario: Create a board
        Given User in the workspace page
        When User clicks on the "Create new board" button
        Then Pop-up "Create board" menu should be displayed

        When User enters a board "<title>" into "Board title" form
        And User clicks on the "Create" button
        Then User should be redirected to the '"<title>" | Trello' page
        And New board with specified "<title>" should be created
    Examples:
    | title                      |
    | NewTitleName               |

    Scenario: Create a list in existing board
        Given User is on the existing board page
        When User clicks on the "Add a list" button
        Then "Enter a list name" form should be displayed

        When User enters a valid list "<name>"
        And User clicks on the "Add list" button
        Then New list with specified list "<name>" should be created
        And Corresponding list with specified list "<name>" should be displayed on the board window
    Examples:
    | name                      |
    | Listik               |

    Scenario: Creating a cart for an existing list
        When User should be on the existing board page
        Then The empty list is created

        When User clicks on the "Add a card" button under existing list
        Then "Enter a title or paste a link" form inside the list should be visible

        When User enter a valid "<name>" in form
        And User clicks on the "Add card" button
        Then New card with specified list "<name>" should be created and displayed

    Examples:
    | name                   |
    | LeoMessi               |
    @sorting
    Scenario: Card sorting
        When User is on the existing board
        Then The list with few card is created

        When User clicks on the "List actions" button in list window
        Then The "List actions" menu should be displayed

        When User clicks on the "Sort by" button
        Then "Sort list" menu should be displayed

        When User clicks on the "Card name alphabetically" button
        Then Cards in list should be sorted