describe('Automation exercise' , () => {
    it('Add Product Functionality' ,() => {
        cy.AddToCart();
    })

    it.only('Checkout' ,() => {
        cy.Checkout();
    })

    it('Remove Product' ,() => {
        cy.RemoveProduct();
    })
})