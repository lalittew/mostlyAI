import { genericFunctions } from "../genericFunctions/genericFunctions"
const data = require('../../../fixtures/userData.json')

class MostlyAIChallengePage{ 
    headerHomePage = '#headline-1556-33'
    bookmarks = 'span[class="oxy-mega-dropdown_link-text"]'
    searchButton = '#open-header-search-1044-16-icon'
    searchTextBox = 'input[type="search"]'
    errorMessageWordNotFound = '#div_block-273-1315'
    cookieAcceptButton = '#CookieBoxSaveButton'
    contactSubMenu = '#text_block-3671-16'
    firstNameTextBox = 'input[name="firstname"]'
    lastNameTextBox = 'input[name="lastname"]'
    yourEmailTextBox = 'input[name="email"]'
    yourMobileTextBox = 'input[name="mobilephone"]'
    yourOrganization = 'input[name="company"]'
    yourCountry = 'input[name="country"]'
    howYouHearDropDown = 'select[name="how_did_you_hear_about_mostly_ai_"]'
    descriptionTextBox = 'textarea[name="message"]'
    marketOfferCheckBox = 'label[class="hs-form-booleancheckbox-display"]'
    contactUsPageHeadline = '#headline-48-106'
    sendMessageButton = 'input[type="submit"]'

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
            //genericFunctions.mouseHoverOnElementWithIndex(this.bookmarks, 3)
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

    fillDetailsToContact(){
        genericFunctions.clickElement(this.contactUsPageHeadline)
        
        genericFunctions.enterText(this.firstNameTextBox, data.firstName)
        genericFunctions.enterText(this.firstNameTextBox, data.lastName)
        genericFunctions.enterText(this.yourEmailTextBox, data.businessEmail)
        genericFunctions.enterText(this.yourMobileTextBox, data.mobileNumber)
        genericFunctions.enterText(this.yourOrganization, data.organization)
        genericFunctions.enterText(this.descriptionTextBox, "Test")
        genericFunctions.clickElement(this.marketOfferCheckBox)
        genericFunctions.mouseHoverOnElementWithIndex(this.sendMessageButton, 1)
        
        


        // cy.get('#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8').realClick()
        // cy.get('option[value="Afghanistan"]').realClick()
        // genericFunctions.enterText(this.yourCountry, data.country)
        // cy.get('#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8').realClick()
        // cy.get('md-option').contains('Country seven').click();
        

        
    
    // howYouHearDropDown = 'select[name="how_did_you_hear_about_mostly_ai_"]'
     
    // marketOfferCheckBox = '#LEGAL_CONSENT.subscription_type_5594858-27854f4c-b840-41f2-b7af-a3c9f512c9e8'
    }
}

export const mostlyAIChallengePage = new MostlyAIChallengePage()