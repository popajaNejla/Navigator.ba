describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.navigator.ba')

    cy.get("#ember564").type("Hotel Grand")
    cy.get('#ember564').should('have.value', 'Hotel Grand')
    
    cy.get('[data-ember-action="571"]').click()
    cy.url().should('include', '/search/Hotel%20Grand')

    cy.get('.content').eq(0).click()
    cy.url().should('include', '/hotel-grand')

    cy.get('.marker-popup').should('exist')
  })
})