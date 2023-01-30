Feature: This feature file is to perform the coding challenge for Mostly AI

    # Scenario: This test case is to Verify the bookmarks on Mostly AI home page
    #     Given I am on Mostly AI home page
    #     Then I verify that there are "4" bookmarks on home page
    #     And I verify the bookmarks on page

    # Scenario Outline: Verify user gets an error on seacrhing for text which is not present
    #     Given I am on Mostly AI home page
    #     When I click on Search button
    #     And I accept the cookies alert message
    #     Then I search for word <wordToSearch> in search box and press Enter
    #     And I get information message for no search results for <wordToSearch> word

    # Examples:
    #     | wordToSearch |
    #     | sythetic     |

    Scenario: This test case is to Verify user is able to contact Mostly AI by filling form
        Given I am on Mostly AI home page
        Then I hover mouse on "Company" bookmark to enable the sub menu of bookmark 
        When I click "Contact" item under the Company bookmark