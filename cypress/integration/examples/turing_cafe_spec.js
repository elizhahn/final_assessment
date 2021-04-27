describe("Turing Cafe", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {fixture: "reservations.json"})
    cy.visit("http://localhost:3000/");
  })
  it("should display a portal for reservations", () => {
    
    cy.get("[data-cy=title]").contains("Turing Cafe Reservations");
    cy.get("[data-cy=name-input]").should("exist");
    cy.get("[data-cy=date-input]").should("exist");
    cy.get("[data-cy=time-input]").should("exist");
    cy.get("[data-cy=number-guests-input]").should("exist");
    cy.get("[data-cy=book-reservation-btn]").contains("Make Reservation");
    cy.get("[data-cy=reservation-card]").should("have.length", 2); 
    cy.get("[data-cy=reservation-card]").eq(0).should("contain", "Elizabeth")
      .and("contain", "12/11")
      .and("contain", "8:30")
      .and("contain", "Number of guests: 2")
      cy.get("[data-cy=reservation-card]").eq(1).should("contain", "jimmy")
      .and("contain", "08/24")
      .and("contain", "6:30")
      .and("contain", "Number of guests: 2")
  });
});