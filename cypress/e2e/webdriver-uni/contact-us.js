///  <reference types="Cypress"  />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //USING cy.document command on the active window, using assertion to validate its property using attribute
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // using cy.title command to validate the title of page
        cy.title().should('include', 'WebDriver | Contact Us')
        // using cy.url coomad to validate the URl of current page
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Muhammad");
        cy.get('[name="last_name"]').type("Ali");
        cy.get('[name="email"]').type("muhammadalirana263@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress from your platform?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Muhammad");
        cy.get('[name="last_name"]').type("Ali");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})



//     it("Should be able tp submit a scuccessfull submission via contact us form", () => {
// // cypress code
// cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
// // cy.visit('https://www.automationteststore.com/');
// cy.get("a[href$='contact']").click();
//cy.get('#contact-us').click({force: true})

// cy.get('[name="first_name"]').type("Muhammad Ali")
// cy.get('[name="last_name"]').type("Ali")
// cy.get('[name="email"]').type("muhammad.ali@uworx.co.uk")
// cy.get('textarea.feedback-input').type("it has been a wonderfull experince to learn cypress")
// cy.get('[type="submit"]').click();

// cy.get('#ContactUsFrm_first_name').type("Muhammad Ali")
// cy.get('#ContactUsFrm_email').type("muhammad.ali@uworx.co.uk")
// cy.get('#ContactUsFrm_enquiry').type("it has been a wonderfull experince to learn cypress")
// cy.get("button[title='Submit']").click();


    //})

//     it.only("Should not be able tp submit a scuccessfull submission via contact us form as all fields are required ", () => {
//         // cypress code
// cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')       
// cy.get('[name="first_name"]').type("Muhammad Ali")
// cy.get('[name="last_name"]').type("Ali")
// cy.get('textarea.feedback-input').type("it has been a wonderfull experince to learn cypress")
// cy.get('[type="submit"]').click();
        
//             }) 

//})
