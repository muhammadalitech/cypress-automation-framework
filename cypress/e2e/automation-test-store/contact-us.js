///  <reference types="Cypress"  />

describe("Test Contact Us form via Automation Test store just for practicing", () =>{
    it("Should be able tp submit a scuccessfull submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // for following we have used the cypress app, by using the slect the tool to generate selectors for us
    // in order to interact with them as developer may edit the HTML code for the given element 
    cy.get('.info_links_footer > :nth-child(5) > a').click()
    // for above we need to use a better approach
    cy.get('#ContactUsFrm_first_name').type("Muhammad")
    cy.get('#ContactUsFrm_email').type("muhammmad.ali@uworx.co.uk")
    cy.get('#ContactUsFrm_enquiry').type("I have some questions to ask, do you provide additional discounts?")
    cy.get('.col-md-6 > .btn').click()

    });

})
