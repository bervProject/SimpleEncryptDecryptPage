describe('Decrypt Page', () => {
  it('Visits the decrypt page', () => {
    cy.visit('/#/decrypt');
    cy.contains('h1', 'Decryption');
    cy.contains('a', 'Home');
    cy.contains('a', 'Decrypt');
    cy.contains('button', 'Decrypt');
  });
});
