describe('no results', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/getWatchData*', {
      fixture: 'search_empty.json',
      delayMs: 100,
    }).as('searchEmpty')
    cy.intercept('GET', '/_next/image*', {
      body: '',
      headers: { 'Content-Type': 'image/png' },
    })
  })

  it('shows a message when no results are found', () => {
    cy.visit('http://localhost:3000/')

    cy.get('form').within(() => {
      cy.get('input').type('abcdefg')
      cy.contains('button', 'Search').click()
    })

    cy.get('.animate-pulse').should('have.length', 7)
    cy.wait('@searchEmpty')
    cy.contains(/Sorry|Second grade|Well that/).should('be.visible')
  })
})
