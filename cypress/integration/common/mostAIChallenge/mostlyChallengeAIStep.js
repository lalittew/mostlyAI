const { Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
const { genericFunctions } = require("../genericFunctions/genericFunctions")
const { mostlyAIChallengePage } = require("./mostlyAIChallengePage")

Given("I am on Mostly AI home page", () => {
    genericFunctions.visitUrl(Cypress.env('baseUrl'))
    genericFunctions.verifyElementIsVisible(mostlyAIChallengePage.headerHomePage)
    genericFunctions.verifyElementHaveText(mostlyAIChallengePage.headerHomePage, mostlyAIChallengePage.headerHomePageText)
})

Then("I verify that there are {string} bookmarks on home page", (numberOfBookmarksPresent) => {
    genericFunctions.validateElementOccurence(mostlyAIChallengePage.bookmarks, parseInt(numberOfBookmarksPresent))
})

And("I verify the bookmarks on page", () => {
    genericFunctions.verifyElementIsVisibleWithIndex(mostlyAIChallengePage.bookmarks, 0)
    genericFunctions.verifyElementHaveTextWithIndex(mostlyAIChallengePage.bookmarks, 0, mostlyAIChallengePage.bookmarkPlatformText)
    genericFunctions.verifyElementIsVisibleWithIndex(mostlyAIChallengePage.bookmarks, 1)
    genericFunctions.verifyElementHaveTextWithIndex(mostlyAIChallengePage.bookmarks, 1, mostlyAIChallengePage.bookmarkSyntheticDataText)
    genericFunctions.verifyElementIsVisibleWithIndex(mostlyAIChallengePage.bookmarks, 2)
    genericFunctions.verifyElementHaveTextWithIndex(mostlyAIChallengePage.bookmarks, 2, mostlyAIChallengePage.bookmarkResourcesText)
    genericFunctions.verifyElementIsVisibleWithIndex(mostlyAIChallengePage.bookmarks, 3)
    genericFunctions.verifyElementHaveTextWithIndex(mostlyAIChallengePage.bookmarks, 3, mostlyAIChallengePage.bookmarkCompanyText)
})  

When("I click on Search button", () => {
    genericFunctions.clickElement(mostlyAIChallengePage.searchButton)
})

When("I click on Search button", () => {
    genericFunctions.clickElement(mostlyAIChallengePage.searchButton)
})

And("I accept the cookies alert message", () => {
    genericFunctions.clickElement(mostlyAIChallengePage.cookieAcceptButton)
})

Then(/^I search for word (.*) in search box and press Enter$/, (wordToSearch) => {
    mostlyAIChallengePage.enterTextToSearchAndEnter(mostlyAIChallengePage.searchTextBox, wordToSearch)
})

Then(/^I get information message for no search results for (.*) word$/, (wordToSearch) => {
    genericFunctions.verifyElementIsVisible(mostlyAIChallengePage.errorMessageWordNotFound)
    genericFunctions.verifyElementHaveText(mostlyAIChallengePage.errorMessageWordNotFound, mostlyAIChallengePage.errorMessageWordNotFoundText+wordToSearch)
})

Then("I hover mouse on {string} bookmark to enable the sub menu of bookmark", (bookMarkToOpenMenu) => {
    mostlyAIChallengePage.openBookMarSubMenu(bookMarkToOpenMenu)
})

When("I click {string} item under the Company bookmark", (clickSubMenuItem) => {
    mostlyAIChallengePage.clickSubMenuUnderCompany(clickSubMenuItem)
})