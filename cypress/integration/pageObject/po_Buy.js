class buyProcess{

    fillSearchBox(text){
        return cy.get('#search_query_top').clear().type(text);
    }
    
    searchButton(){
        return cy.get('.btn.btn-default.button-search');
    }

    productSelector(value){
        return cy.get('#center_column > ul > li:nth-child('+value+')');
    }

    addToCartButton(){
        return  cy.get('[title="Add to cart"]')
    }
    proceedToCheckOutButton(){
        return cy.get('[title="Proceed to checkout"]');
    }

    checkForStock(){
        return cy.get('.label.label-success');
    }

    nextButton(){
        return cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')
    }

    proceedButtonAddress(){
        return cy.get('#center_column > form > p > button > span')
    }

    bankWirePayment(){
        return cy.get('.bankwire')
    }
    orderConfirmation(){
        return cy.get('span').contains('I confirm my order')
    }
    agreedTerms(){
        return cy.get('#cgv').click()
    }
    processCarrier(){
        cy.get('[name="processCarrier"]').click()
    }
    
}

export default buyProcess;