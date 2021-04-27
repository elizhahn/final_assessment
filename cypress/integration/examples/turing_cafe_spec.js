describe("Turing Cafe", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {fixture: "newReservation.json"})
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

  it("should make a reservation", () => {
    cy.get("[data-cy=name-input]").type("Yemena").should("have.value", "Yemena"); 
    cy.get("[data-cy=date-input]").type("04/23").should("have.value", "04/23"); 
    cy.get("[data-cy=time-input]").type("5:30").should("have.value", "5:30"); 
    cy.get("[data-cy=number-guests-input]").type("1").should("have.value", "1"); 
    cy.get("[data-cy=book-reservation-btn]").click();
    cy.get("[data-cy=reservation-card]").eq(2).should("contain", "Yemena")
      .and("contain", "04/23")
      .and("contain", "5:30")
      .and("contain", "Number of guests: 1") 

  });
});