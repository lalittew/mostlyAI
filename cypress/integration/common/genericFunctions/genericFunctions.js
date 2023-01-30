class GenericFunctions{

    visitUrl(url){
        cy.visit(url)
    }

    verifyElementIsVisible(elementToVerify){
        cy.get(elementToVerify).should('be.visible')
    }

    verifyElementIsVisibleWithIndex(elementToVerify, index){
        cy.get(elementToVerify).eq(index).should('be.visible')
    }

    verifyElementHaveText(element, textToVerify){
        cy.get(element).should('have.text', textToVerify)
    }

    verifyElementHaveTextWithIndex(element, index, textToVerify){
        cy.get(element).eq(index).should('have.text', textToVerify)
    }

    validateElementOccurence(element, expectedOccurence){
        cy.get(element).should('have.length', expectedOccurence)
    }

    clickElement(element){
        cy.get(element).click()
    }

    enterText(element, textToEnter){
        cy.get(element).clear()
        cy.get(element).type(textToEnter)
    }

    mouseHoverOnElementWithIndex(element, index){
        cy.get(element).eq(index).realHover()
    }
}

export const genericFunctions = new GenericFunctions()