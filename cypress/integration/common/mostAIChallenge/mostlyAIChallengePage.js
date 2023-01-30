import { genericFunctions } from "../genericFunctions/genericFunctions"

class MostlyAIChallengePage{ 
    headerHomePage = '#headline-1556-33'
    bookmarks = 'span[class="oxy-mega-dropdown_link-text"]'
    searchButton = '#open-header-search-1044-16-icon'
    searchTextBox = 'input[type="search"]'
    errorMessageWordNotFound = '#div_block-273-1315'
    cookieAcceptButton = '#CookieBoxSaveButton'
    contactSubMenu = '#text_block-3671-16'

    headerHomePageText = 'SmarterSynthetic Data'
    bookmarkPlatformText = 'Platform'
    bookmarkSyntheticDataText = 'Synthetic Data'
    bookmarkResourcesText = 'Resources'
    bookmarkCompanyText = 'Company'
    errorMessageWordNotFoundText = 'Sorry, no results for:'

    enterTextToSearchAndEnter(element, wordToSearch){
        cy.get(element).clear()
        cy.get(element).type(wordToSearch)
        cy.get(element).type('{enter}')
    }

    openBookMarSubMenu(bookMarkToOpenMenu){
        switch (bookMarkToOpenMenu) {
        case 'Company': 
            genericFunctions.mouseHoverOnElementWithIndex(this.bookmarks, 3)
            genericFunctions.clickElement(mostlyAIChallengePage.cookieAcceptButton)
            genericFunctions.mouseHoverOnElementWithIndex(this.bookmarks, 3)
        break
        //Can add more case for other book marks
        }
    }

    clickSubMenuUnderCompany(clickSubMenuItem){
        switch (clickSubMenuItem) {
        case 'Contact':
            cy.get(this.contactSubMenu).click({force:true})
        break
        //Can add more case for other submenu 
        }
    }
}

export const mostlyAIChallengePage = new MostlyAIChallengePage()