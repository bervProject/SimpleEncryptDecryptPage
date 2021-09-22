describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Welcome to Simple Encryption & Decryption Text')
    cy.contains('a', 'Encrypt')
    cy.contains('a', 'Decrypt')
  })
})
