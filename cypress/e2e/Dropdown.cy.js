describe('Handling DropDown Functionality', () => {
    it('DropDown Functionality', () => {
      cy.visit("https://training.rcvacademy.com/test-automation-practice-page")
      cy.get('[data-uniqid="1696582983808"] > .col-md-12 > :nth-child(1) > div > .margin-top-10').should('have.text','Test Automation Practice PageRCV Academy & Software Testing Mentor')
      cy.get("select[name='dropdown']").select(1)
      cy.get("select[name='dropdown']").select('stm')
      cy.get("select[name='dropdown']").select('google')      
    })
  })
 