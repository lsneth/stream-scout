describe('privacy policy page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://mnva0fhft9.execute-api.us-east-2.amazonaws.com/default/getWatchData*watchType=movie*',
      { fixture: 'search_movie.json' },
    ).as('searchMovie')
    cy.intercept(
      'GET',
      'https://mnva0fhft9.execute-api.us-east-2.amazonaws.com/default/getWatchData*watchType=tv*',
      { fixture: 'search_tv.json' },
    ).as('searchTv')
    cy.intercept(
      'GET',
      'https://oe68fbhrig.execute-api.us-east-2.amazonaws.com/default/getWatchProviders*movie*',
      { fixture: 'watchProviders_movie.json' },
    ).as('providersMovie')
    cy.intercept(
      'GET',
      'https://oe68fbhrig.execute-api.us-east-2.amazonaws.com/default/getWatchProviders*tv*',
      { fixture: 'watchProviders_tv.json' },
    ).as('providersTv')
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

  it('navigates to the privacy policy page from the footer', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('footer a', 'Privacy Policy').click()
    cy.url().should('include', '/privacy-policy')
    cy.contains('h1', 'Privacy Policy')
  })
})
