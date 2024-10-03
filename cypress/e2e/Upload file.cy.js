describe('uploadfile Functionality', () => {
    it('uploadfile', () => {
      cy.visit("https://demoqa.com/upload-download")
      cy.get('#uploadFile').scrollIntoView()
      cy.get('#uploadFile').selectFile(["C:\\Users\\Hp\\Desktop\\pic1.png","C:\\Users\\Hp\\Desktop\\pic 2.png"])
      cy.wait(10000); // Wait for 5 seconds (5000 milliseconds)
      cy.get('.text-center').should('have.text','Upload and Download')
      
    })
  })
 