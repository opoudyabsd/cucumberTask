Feature: Workspace
    Background:
        Given User is logged in
        And User is on the boards section

    Scenario: Edit workspace
        When User clicks on the "Editing" button next to workspace name
        Then The workspace editing form should be displayed

        When User clicks on the "Name" form
        And User enters a new "<name>" in the "Name" form
        And User clicks on the "Save" button
        Then Forms shoudn't be visible
        And Workspace name should be visible 
        And Name of workspace changed to the new "<name>"
        Examples:
        | name |
        | Kakkapuoudas |