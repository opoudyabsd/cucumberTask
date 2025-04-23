Feature: Trello authorization

  Scenario: Successful Sign up
    Given User is on the "signup" page
    When User enters valid email address
    And User clicks on the "Sign Up" button
    Then User should be redirected to the "Create your first Workspace | Trello" page
    And The page should display a "What brings you here today?" message

  Scenario: Successful Sign in
    Given User opens the "login" page
    When User enters a valid registered "<email>"
    And User clicks on the "Log in" button for openning password field
    And User enters a valid "<password>"
    And User clicks on the "Log in" button
    Then Page should have "Boards | Trello" title

    Examples:
      | email                                    | password        |
      | born-swim@aprtds8r.mailosaur.net        | newPassword_123 |

