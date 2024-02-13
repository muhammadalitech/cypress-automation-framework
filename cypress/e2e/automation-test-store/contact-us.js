///  <reference types="Cypress"  />

describe("Test Contact Us form via Automation Test store just for practicing", () =>{
    it("Should be able tp submit a scuccessfull submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // for following we have used the cypress app, by using the slect the tool to generate selectors for us
    // in order to interact with them as developer may edit the HTML code for the given element 
   // cy.get('.info_links_footer > :nth-child(5) > a').click() // how we can improve it furthur if developer chnages the location of button later
   cy.get("a[href$='contact']").click() 
    // for above we need to use a better approach
    //a[contains(@href, 'contact')]
    //cy.xpath("//a[contains(@href, 'contact')]").click()
    cy.get('#ContactUsFrm_first_name').type("Muhammad")
    cy.get('#ContactUsFrm_email').type("muhammmad.ali@uworx.co.uk")

    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

    cy.get('#ContactUsFrm_enquiry').type("I have some questions to ask, do you provide additional discounts?")
   // cy.get('.col-md-6 > .btn').click()   // how we can improve it, if a developer chnages its position later our test will fail to avoide this we will improve it
   // improving our above line of code
   cy.get("button[title='Submit']").click()
   // following selector is selected using cypress tool
   cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    });

})
