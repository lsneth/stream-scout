describe('no results', () => {
  const emptyResultsFixture = 'search_empty.json'

  beforeEach(() => {
    cy.intercept('GET', '**/getWatchData*', {
      fixture: emptyResultsFixture,
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
    const noResultsStrings = [
      "Sorry, we don't have any matches for your imaginary movie! Care to search for something, you know, real? ;)",
      'Second grade spelling bee champ you were not. Try again, you must. ;)',
      "Well that's embarrasing... for you! What do you think this is a spell checker? ;)",
    ]

    cy.contains('p', /Sorry|Second grade|Well that/)
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(noResultsStrings).to.include(text)
      })
  })
})
