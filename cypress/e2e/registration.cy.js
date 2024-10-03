describe('Registration Functionality', () => {
    it('Register new user', () => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
      cy.get('#loginPanel > :nth-child(3) > a').click()

      cy.get("input[id='customer.firstName']").type('Sarmad')
      cy.get("input[id='customer.lastName']").type('Riaz')
      cy.get("input[id='customer.address.street']").type('Kareempura')
      cy.get("input[id='customer.address.city']").type('Abbottabad')
      cy.get("input[id='customer.address.state']").type('KPK')
      cy.get("input[id='customer.address.zipCode']").type('22010')
      cy.get("input[id='customer.phoneNumber']").type('03165307039')
      cy.get("input[id='customer.ssn']").type('aabbbssss.com')

      cy.get("input[id='customer.username']").type('Tester13')
      cy.get("input[id='customer.password']").type('Tester1234')
      cy.get('#repeatedPassword').type('Tester1234')

      cy.get('[colspan="2"] > .button').click()
    })
  })
 