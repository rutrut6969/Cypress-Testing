describe('Testing Inputs', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });
  it('Adds text to name form', function() {
    cy.get('input[name="name"]')
      .type('Isaac')
      .should('have.value', 'Isaac');
    cy.get('input[name="email"]')
      .type('rutledgeisaac6969@gmail.com')
      .should('have.value', 'rutledgeisaac6969@gmail.com');
    cy.get('input[name="password"]')
      .type('random12345')
      .should('have.value', 'random12345');
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked');
    cy.get('button').click();
  });
});
