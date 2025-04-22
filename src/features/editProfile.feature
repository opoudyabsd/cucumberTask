Feature: Edit Atlassian User Profile

  Background:
    Given User is already logged in
    Then User already on the "Boards | Trello" page

  Scenario: Edit Atlassian User Profile  
    When User clicks on the avatar button
    Then A pop-up menu should be displayed

    When User clicks on "Profile and visibility" button
    Then User redirected to the "Profile | Trello" page
    And "Manage your personal information" header is displayed

    When User changes the existing username to a new free username
    And User clicks on the save button
    Then "Saved" message should be displayed
