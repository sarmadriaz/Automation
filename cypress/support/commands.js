// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

require("cypress-real-events")

Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false;
  });

  Cypress.Commands.add('extractODICenturies', (playerName) => {
    cy.visit('https://www.espncricinfo.com/');
    cy.get('.icon-menu-outlined').click();
     cy.get('input[type="text"]').type(playerName);
     cy.get('.icon-arrow_forward-filled').click();
     cy.get('.name > a').click();
     cy.get(':nth-child(2) > .ds-p-0 > :nth-child(1) > .ds-overflow-x-auto > .ds-w-full').scrollIntoView();
    cy.get(':nth-child(2) > .ds-p-0 > :nth-child(1) > .ds-overflow-x-auto > .ds-w-full')
        .find('tbody')
        .find('tr')
        .each(($row) => {
            cy.wrap($row).find('td').eq(0).invoke('text').then((Format) => {
                if (Format.trim() === 'ODIs') {
                    cy.wrap($row).find('td').eq(9).invoke('text').then((centuries) => {
                        cy.log(`ODI Centuries: ${centuries.trim()}`);
                    });
                }
            });
        });
 });


 Cypress.Commands.add('extractNews', () => {
  cy.visit('https://tribune.com.pk/');
  cy.get('a > h2').then(($el) => {
    cy.log('News 1: ' + $el.text());
  });
  cy.get('a > h3').each(($el, index) => {
    if (index < 4) {
      cy.log(`News ${index + 2}: ` + $el.text());
    }
  });
  cy.get('.logo-links > :nth-child(1) > a').should('have.text', "Today's Paper |");
});


Cypress.Commands.add('login', (username = 'Admin', password = 'admin123') => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get("input[placeholder='Username']").type(username);
  cy.get("input[placeholder='Password']").type(password);
  cy.get("button[type='submit']").click();

  cy.get('input[placeholder="Search"]').should('exist');
});

Cypress.Commands.add('Create', () => {
  cy.login(); 
  cy.contains('PIM').click();
  cy.contains('Add').click();

  cy.get("input[placeholder='First Name']").type('Sarmad');
  cy.get("input[placeholder='Middle Name']").type('Riaz');
  cy.get("input[placeholder='Last Name']").type('Mughal');
  cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear().type('12345');
  cy.get('.oxd-file-div > .oxd-icon-button').click();
  cy.get('input[type="file"]').attachFile('profile.jpg');

  cy.get('.oxd-button--secondary').click();
  cy.wait(3000)
});

Cypress.Commands.add('Read', () => {
  cy.login(); 
  cy.contains('PIM').click();
  cy.contains('Employee List').click();
  cy.get('input[placeholder="Type for hints..."]').first().type('Sarmad Riaz');

  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.contains('Sarmad Riaz').should('be.visible');
  cy.wait(3000)
});

Cypress.Commands.add('Update', () => {
  cy.login();
  cy.contains('PIM').click();
  cy.get('.oxd-button--secondary').first().click();

  cy.contains('Employee List').click();
  cy.get('input[placeholder="Type for hints..."]').first().type('Sarmad Riaz');

  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.contains('Sarmad Riaz').should('be.visible');

  cy.wait(3000)

  cy.get('.oxd-table-cell-actions .oxd-icon').eq(0).click(); 
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','PIM')
  cy.get("input[placeholder='Last Name']").clear().type('Tester')
  cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']").click
  cy.wait(3000)
});

Cypress.Commands.add('Delete', () => {
  cy.login();
  cy.contains('PIM').click();
  cy.contains('Employee List').click();
  cy.get('input[placeholder="Type for hints..."]').first().type('Sarmad Riaz');

  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.wait(3000)
  cy.contains('Sarmad Riaz').should('be.visible');
  cy.get('.oxd-table-cell-actions .oxd-icon').eq(1).click();
  cy.get('.oxd-button--label-danger').click()
  

})

Cypress.Commands.add('login1', (username = 'demo', password = 'demo') => {
 cy.visit('https://demo.opencart.com/admin/')
 cy.get('#input-username').clear().type(username)
 cy.get('#input-password').clear().type(password)
 cy.get('.btn').click()
 //cy.get('h1').should('have.text','Dashboard')
});


Cypress.Commands.add('Add', () => {
   cy.login1();
   cy.get(".parent.collapsed[href='#collapse-1']").click()
   cy.get('#collapse-1').contains('Products').click()
   cy.get('.float-end > .btn-primary').click()
   cy.wait(20000)
   cy.get('#input-name-1').type('Mobile')
   cy.get('#input-meta-title-1').type('Mobile Phone')
   cy.get('#input-meta-description-1').type('Mobile Phone Description')
   cy.get('.float-end > .btn-primary').click()

})

Cypress.Commands.add('Edit', () => {
  cy.login1();
  cy.get(".parent.collapsed[href='#collapse-1']").click()
  cy.get('#collapse-1').contains('Products').click()
  cy.wait(20000)
  cy.get('#input-name').type('Apple Cinema 30')
  cy.get('#button-filter').click()
  cy.get('.btn-group > a.btn >.fa-solid').first().click()
  cy.get('#input-name-1').clear().type('Apple')
  cy.get('.float-end > .btn-primary').click()

})

Cypress.Commands.add('Process', () => {
  cy.login1();
  cy.get('[href="#collapse-4"]').click()
  cy.get('#collapse-4').contains('Orders').click()
  cy.get('#input-order-id').type('550')
  cy.get('#button-filter').click()
  cy.wait(3000)
  cy.get('#input-order-status').select('Shipped')
})

Cypress.Commands.add('DeleteProduct', () => {
  cy.login1();
  cy.get(".parent.collapsed[href='#collapse-1']").click()
  cy.get('#collapse-1').contains('Products').click()
  cy.get('#input-name').type('imac')
  cy.get('#button-filter').click()  
  cy.get('.btn-danger').click()

})

Cypress.Commands.add('AddToCart', () => {
  cy.visit('https://automationexercise.com/');
  cy.get("a[href='/products']").click();
  cy.get("a[href='/products']").should('have.text',' Products')
  cy.get('#search_product').type('dress')
  cy.get('#submit_search > .fa').click()
  cy.get("a[href='/product_details/3']").click()
  cy.wait(3000)
  cy.get('#quantity').clear().type('2')
  cy.get("button[type='button']").click()
  cy.get('.modal-title').should('have.text','Added!')
  cy.get('u').click()
  cy.get('.active').should('have.text', 'Shopping Cart')
  cy.contains('Proceed To Checkout').click()
  cy.get('a:contains("Register / Login")').click()
  cy.get("input[placeholder='Name']").type('Sarmad riaz')
  cy.get("input[data-qa='signup-email']").type('sarmadriaz13@gmail.com')
  cy.get('[data-qa="signup-button"]').click()
  cy.get('#id_gender1').click()
  cy.get('[data-qa="password"]').type('Asdf1234@')
  cy.get('[data-qa="days"]').select('13')
  cy.get('[data-qa="months"]').select('November')
  cy.get('[data-qa="years"]').select('2000')
  cy.get('#newsletter').click()
  cy.get('[data-qa="first_name"]').type('Sarmad')
  cy.get('[data-qa="last_name"]').type('Riaz')
  cy.get('[data-qa="company"]').type('wise 360')
  cy.get('[data-qa="address"]').type('House no 14 opposite girls hostel kareempura')
  cy.get('[data-qa="country"]').select('India')
  cy.get('[data-qa="state"]').type('KPK')
  cy.get('[data-qa="city"]').type('Abbottabad')
  cy.get('[data-qa="zipcode"]').type('22010')
  cy.get('[data-qa="mobile_number"]').type('03165307039')
  cy.get('[data-qa="create-account"]').click()
  cy.get('b').should('have.text','Account Created!') 
 }); 


 Cypress.Commands.add('Checkout', () => {
  cy.visit('https://automationexercise.com/');
  cy.get("a[href='/login']").click()
  cy.get('[data-qa="login-email"]').type('sarmadriaz13@gmail.com')
  cy.get('[data-qa="login-password"]').type('Asdf1234@')
  cy.get('[data-qa="login-button"]').click()
  cy.get("a[href='/product_details/1']").click()
  cy.get("button[type='button']").click()
  cy.get('u').click()
  cy.get('.btn.btn-default.check_out').click()
  cy.get('.btn.btn-default.check_out').click()
  cy.get('.heading').should('have.text','Payment')
  cy.get('[data-qa="name-on-card"]').type('Sarmad Riaz')
  cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242')
  cy.get('[data-qa="cvc"]').type('804')
  cy.get('[data-qa="expiry-month"]').type('11')
  cy.get('[data-qa="expiry-year"]').type('2026')
  cy.get('[data-qa="pay-button"]').click()
  cy.get('[data-qa="order-placed"] > b').should('have.text','Order Placed!')
  cy.get('.col-sm-9 > .btn-default').click()


 })

 Cypress.Commands.add('RemoveProduct', () => {
  cy.visit('https://automationexercise.com/');
  cy.get("a[href='/login']").click()
  cy.get('[data-qa="login-email"]').type('sarmadriaz13@gmail.com')
  cy.get('[data-qa="login-password"]').type('Asdf1234@')
  cy.get('[data-qa="login-button"]').click()
  cy.get("a[href='/product_details/1']").click()
  cy.get("button[type='button']").click()
  cy.get('u').click()
  cy.get('.cart_quantity_delete > .fa').click()
  cy.get('.text-center > b').should('have.text','Cart is empty!')


 })

