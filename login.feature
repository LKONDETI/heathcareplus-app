Feature: User Login
  As a registered user
  I want to log in with my credentials
  So that I can access my health records and appointments

  Background:
    Given the backend API is running
   And a user exists with:
      | username  | john123           |
      | password | test1234          |
      | email    | john@example.com  |
    And I am on the login screen

  Scenario: Successful login with valid credentials
    When I enter "john123" into the username field
    And I enter "test1234" into the password field
    And I tap the "Login" button
    Then a login request should be sent to "/auth/login" with:
      | username | john123  |
      | password | test1234 |
    And the backend responds with status 200 and a valid userId
    And I should be navigated to the home screen
    And I should see a welcome message containing "john123"

  Scenario: Failed login with incorrect password
    When I enter "john123" into the username field
    And I enter "wrongpass" into the password field
    And I tap the "Login" button
    Then a login request should be sent to "/auth/login" with:
      | username | john123   |
      | password | wrongpass |
    And the backend responds with status 401
    And I should see an error message "Invalid username or password"
    And I should remain on the login screen
