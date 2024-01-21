describe('Search test 1', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.navigator.ba')

    cy.get("#ember564").type("Alipasa")
    cy.get('#ember564').should('have.value', 'Alipasa')
    
    cy.get('[data-ember-action="571"]').click()
    cy.url().should('include', '/search/Alipasa')

    cy.get('.content').eq(0).click()
    cy.url().should('include', '/Alipasa')
  })
})