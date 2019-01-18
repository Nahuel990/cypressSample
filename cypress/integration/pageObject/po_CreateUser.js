class createUser{

    newEmail(email){
        return cy.get('#email_create').type(email)
    }
    createAccountButton(){
        return cy.get('#SubmitCreate').click()
    }
    genderMale(){
        return cy.get('#uniform-id_gender1').click()
    }
    genderFemale(){
        return cy.get('#uniform-id_gender2').click()
    }
    firstName(name){
        return cy.get('#customer_firstname').type(name)
    }
    lastName(lasName){
        return cy.get('#customer_lastname').type(lasName)
    }
    password(password){
        return cy.get('#passwd').type(password)
    }
    selectDate(day,month,year){
       var dd = cy.get('#days').select(day)
        var mm =cy.get('#months').select(month)
        var yy = cy.get('#years').select(year)
    return[dd,mm,yy]
    }
    address(address){
        return cy.get('#address1').type(address)
    }
    city(city){
        return  cy.get('#city').type(city)
    }
    country(country){
        return cy.get('#id_country').select(country)
    }
    state(state){
        return cy.get('#id_state').select(state)
    }
    postCode(code){
        return cy.get('#postcode').type(code)
    }
    phone(phone){
        return cy.get('#phone_mobile').type(phone)
    }
    alias(alias){
        return cy.get('#alias').clear().type(alias)
    }
    submitAccount(){
        return cy.get('#submitAccount')
    }
}
export default createUser;