const { should } = require("chai");

describe('Handling MouseHoverfunctionality', () => {
    it('MouseHover Functionality', () => {
   
   cy.visit("https://training.rcvacademy.com/test-automation-practice-page")
   cy.get('.dropbtn').scrollIntoView()

   //cy.get('.dropbtn').trigger('mouseover')
   cy.get('.dropdown-content').invoke('show')
   cy.get('.dropdown-content').should('be.visible')

   cy.get('[href="https://www.youtube.com/@softwaretestingmentor"]').click()
     
   });
});
         
    
   