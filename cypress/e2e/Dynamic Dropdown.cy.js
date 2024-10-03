describe('Handling Dynamic DropDown functionality', () => {
    it('Dynamic Functionality', () => {
      cy.visit("https://www.tutorialspoint.com/videotutorials/index.php")
      cy.get('#search-strings').click().clear().type("Java",{delay:200})
      cy.get('.clsHeadQuestion'). should('have.length',12);
      // iterate through the suggested options
      cy.get('.clsHeadQuestion').each(($el, index, $list) => {
         // condition matching check
         if($el.text() ==="Java"){
            // click() on that option for selection
            $el.click();
         }
      })
      // assertion to check if correct option is selected
      cy.get("#search-strings").should("have.value","Java");
   });
});
         
    
   