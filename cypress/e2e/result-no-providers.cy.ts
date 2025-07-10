describe('result page without certain watch providers', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://mnva0fhft9.execute-api.us-east-2.amazonaws.com/default/getWatchData*watchType=movie*',
      { fixture: 'search_movie.json' },
    ).as('searchMovie')
    cy.intercept(
      'GET',
      '**/getWatchProviders*',
      { fixture: 'watchProviders_movie_no_rent.json' },
    ).as('providers')
    cy.intercept(
      'GET',
      'https://elhxyyfpsi.execute-api.us-east-2.amazonaws.com/default/getWatchImage*',
      { fixture: 'watchImage.json' },
    ).as('watchImage')
    cy.intercept('GET', '/_next/image*', {
      body: '',
      headers: { 'Content-Type': 'image/png' },
    })
  })

  it('shows "none" when a provider category is empty', () => {
    cy.visit('http://localhost:3000/')

    cy.get('form').within(() => {
      cy.get('input').type('lord of the rings')
      cy.contains('button', 'Search').click()
    })

    cy.contains('Search results for "lord of the rings"')
    cy.contains('The Lord of the Rings: The Return of the King').click()

    cy.contains('h2', 'Rent')
      .parent()
      .contains('none')
  })
})
