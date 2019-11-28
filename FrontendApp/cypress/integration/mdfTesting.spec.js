
describe('Tests the user login and register mehtods', function() {

it('app runs', function() {
    cy.visit('http://localhost:4200');
});


it("Create product", function() {
    cy.visit("http://localhost:4200/home");
    cy.get("[data-cy=clickProduct]").click();
    cy.get("[data-cy=productOverviewClickCreate]").click();
    cy.get("[data-cy=descriptionProduct]").type("TestDescription");
    cy.get("[data-cy=addProduct]").click();    
    cy.server();
    cy.route({
      method: "POST", 
      url: "/home*", 
      response: []
    });
  });

  it("Create operation", function() {
    cy.visit("http://localhost:4200/home");
    cy.get("[data-cy=clickOperation]").click();
    cy.get("[data-cy=operationOverviewClickCreate]").click();
    cy.get("[data-cy=duration]").type("testDuration");
    cy.get("[data-cy=addOperation]").click();    
    cy.server();
    cy.route({
      method: "POST", 
      url: "/home*", 
      response: []
    });
  });

  it("Create machineType", function() {
    cy.visit("http://localhost:4200/home");
    cy.get("[data-cy=clickMachineType]").click();
    cy.get("[data-cy=machineTypeOverviewClickDetail]").click();
    cy.get("[data-cy=createMachineType]").click();    
    cy.server();
    cy.route({
      method: "POST", 
      url: "/home*", 
      response: []
    });
  });

  it("Create machine", function() {
    cy.visit("http://localhost:4200/home");
    cy.get("[data-cy=clickMachine]").click();
    cy.get("[data-cy=machineOverviewClickDetail]").click();
    cy.get("[data-cy=createMachine]").click();    
    cy.server();
    cy.route({
      method: "POST", 
      url: "/home*", 
      response: []
    });
  });

//   it('mock folder get', function() {
//     cy.server();
//     cy.route({
//       method: 'GET',
//       url: '/api/folder',
//       status: 200,
//       response: 'fixture:folders.json'
//     });
//     cy.get('[data-cy=folderTest]').should('have.length', 1);
//   });

});