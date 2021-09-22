describe('Encrypt Page', () => {
  it('Visits the encrypt page', () => {
    cy.visit('/#/encrypt')
    cy.contains('h1', 'Encryption')
    cy.contains('a', 'Home')
    cy.contains('a', 'Decrypt')
    cy.contains('button', 'Encrypt')
  })

  it('Without input should show toast', () => {
    cy.visit('/#/encrypt')
    cy.get('#encrypt-button').click()
    cy.contains('Please fill all form')
  })
})
