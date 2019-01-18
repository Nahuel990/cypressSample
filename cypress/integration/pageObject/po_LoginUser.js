class loginUser{
    signInButton(){
        return cy.get('[title="Log in to your customer account"]').click()
    }
    email(email){
        return cy.get('#email').type(email)
    }
    password(pass){
        return cy.get('#passwd').type(pass)
    }
    submitLogin(){
        return cy.get('#SubmitLogin').click()
    }

    login(email,pass){
        var signInButton = this.signInButton()
        var mail = this.email(email)
        var pwd = this.password(pass)
        var lg = this.submitLogin()
        return[signInButton,mail,pwd,lg]

    }

}
export default loginUser;