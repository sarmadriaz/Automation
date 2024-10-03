describe('Scroll Functionality', () => {
    it('Scroll', () => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
      // cy.scrollTo('bottom')
      // cy.scrollTo('top')
      // cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
      cy.scrollTo(0,300)

      
    })
  })
 