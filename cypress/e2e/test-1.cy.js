describe('Search test 2', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.navigator.ba')

    cy.get("#ember564").type("Hotel Grand")
    cy.get('#ember564').should('have.value', 'Hotel Grand')
    
    cy.contains('Hotel "Grand"').click()
    cy.url().should('include', '/hotel-grand')

    cy.get('.marker-popup').should('exist')
  })
})