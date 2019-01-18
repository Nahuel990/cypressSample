let cypressJson = require('../fixtures/cypress.json');
import buyProcess from './pageObject/po_Buy';
import createUser from './pageObject/po_CreateUser';
import loginUser from './pageObject/po_LoginUser';

context('Actions', () => {
      const buy = new buyProcess();
      const create = new createUser();
      const login = new loginUser();
    beforeEach(() => {
      cy.visit(cypressJson.baseUrl)
    })

    it('as a new user should add a product to the cart', () => {
      buy.fillSearchBox('shirt')
      buy.searchButton().click()
      buy.productSelector(1).trigger('mouseover')
      buy.addToCartButton().click()
      buy.proceedToCheckOutButton().click()
      buy.checkForStock().should('have.text','In stock')
      buy.nextButton().click()
      create.newEmail(cypressJson.newUser.email)
      create.createAccountButton()
      create.genderMale();
      create.firstName(cypressJson.newUser.firstName)
      create.lastName(cypressJson.newUser.lastName)
      create.password(cypressJson.newUser.password)
      create.selectDate('10','March','1990')
      create.address('test 123')
      create.city('London')
      create.country('United States')
      create.state('Arizona')
      create.postCode('40000')
      create.phone('00000000')
      create.alias('Alias')
      create.submitAccount().click()
      buy.proceedButtonAddress().click()
      //step4
      buy.agreedTerms()
      buy.processCarrier()
      //step5
      buy.bankWirePayment().click()
      buy.orderConfirmation().click()

    
  })
  it('as an existing user should add a product and checkout', ()=>{
      login.login(cypressJson.existingUser.email, cypressJson.existingUser.password)
      buy.fillSearchBox('shirt')
      buy.searchButton().click()
      buy.productSelector(1).trigger('mouseover')
      buy.addToCartButton().click()
      buy.proceedToCheckOutButton().click()
      buy.checkForStock().should('have.text','In stock')
      buy.nextButton().click()
      buy.proceedButtonAddress().click()
      buy.agreedTerms()
      buy.processCarrier()
      buy.bankWirePayment().click()
      buy.orderConfirmation().click()

  })
})
  