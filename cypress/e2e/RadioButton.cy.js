const { should } = require("chai");

describe('Handling RadioButton functionality', () => {
    it('RadioButton  Functionality', () => {
   
   cy.visit("https://training.rcvacademy.com/test-automation-practice-page")
   cy.get('[type="radio"]').check(['JAVA','CSS'])
   cy.get('[type="radio"]').check() 
   });
});
         
    
   