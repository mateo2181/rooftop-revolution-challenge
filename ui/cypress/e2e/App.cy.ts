describe('App test', () => {

  beforeEach(() => {
    cy.visit('/');
    /** We can use FIXTURES in case we don't want to hit the API **/
    // cy.intercept("GET", "/api/clients/*", {
    //   fixture: "client-detail.json"
    // }).as("getClientDetailApi");

    // cy.intercept("GET", "/api/supply-points/*", {
    //   fixture: "supply-point-detail.json"
    // }).as("getSupplyPointDetailApi");

    // cy.intercept("GET", "/api/supply-points", {
    //   fixture: "supply-points.json"
    // }).as("getSupplyPointsApi");

    /** **/

    cy.intercept("GET", "/api/clients/*").as("getClientDetailApi");
    cy.intercept("GET", "/api/supply-points/*").as("getSupplyPointDetailApi");
    cy.intercept("GET", "/api/supply-points").as("getSupplyPointsApi");

    cy.wait(2000);
  });

  it('should emits the search event with input value on button click and render client data', () => {
    cy.get('input[type="search"]').type('123456');
    cy.get('button[aria-label="Search"]').click();

    cy.wait(['@getClientDetailApi', '@getSupplyPointDetailApi', '@getSupplyPointsApi']);

    cy.get('section[title="Client Information"]').should('contain', 'Terry Evans');

  });

  it('should emits the search event with input value on Enter key and render client data', () => {
    cy.get('input[type="search"]').type('123456{enter}');

    cy.wait(['@getClientDetailApi', '@getSupplyPointDetailApi', '@getSupplyPointsApi']);

    cy.get('section[title="Client Information"]').should('contain', 'Terry Evans');
  });

  it('should return the Standard offer when the CUPS of the first client is set', () => {
    cy.get('input[type="search"]').type('123456{enter}');

    cy.wait(['@getClientDetailApi', '@getSupplyPointDetailApi', '@getSupplyPointsApi']);

    // Assuming search results should appear, verify the expected behavior
    cy.get('section[title="Offer Information"]').should('contain', 'Standard offer');
  });
})