describe('Login scenario', () => {
    it('Lauch the website', () => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
      cy.get("input[name='username']").type('test');
      cy.get("input[name='password']").type('test');
    })
  })
