const { should } = require("chai");

describe('Handling CheckBox functionality', () => {
    it('Checkbox  Functionality', () => {
   
   cy.visit("https://training.rcvacademy.com/test-automation-practice-page")
   cy.get(':nth-child(2) > .checkbox > label').click()
   
   cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
     
   });
});
         
    
   