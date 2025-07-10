describe('happy path', () => {
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
  it('displays home page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('nav').within(() => {
      cy.get('img')
      cy.get('a').should('have.attr', 'href', '/')
    })

    cy.contains('Stream Scout')

    cy.get('form').within(() => {
      cy.contains('button', 'Movies')
      cy.contains('button', 'TV Shows')
      cy.get('input')
      cy.contains('button', 'Search')
    })

    cy.contains(
      "Search for any movie or tv show to see where it's available to stream, rent, or buy!",
    )

    cy.get('footer').within(() => {
      cy.get(
        'a[href*="https://developer.themoviedb.org/reference/intro/getting-started"]',
      )
      cy.get('a[href*="https://www.justwatch.com/"]')
      cy.contains('a', 'Privacy Policy').should(
        'have.attr',
        'href',
        '/privacy-policy',
      )
      cy.contains('a', '©2024 Lucas Nethercott').should(
        'have.attr',
        'href',
        'https://www.lucasnethercott.com',
      )
    })
  })

  it('displays search results and watch providers for a movie', () => {
    cy.visit('http://localhost:3000/')

    cy.get('form').within(() => {
      cy.get('input').type('lord of the rings')
      cy.contains('button', 'Search').click()
    })

    cy.contains('Search results for "lord of the rings"')
    cy.contains('The Lord of the Rings: The Return of the King').click()

    cy.contains('The Lord of the Rings: The Return of the King')
    cy.contains('Stream')
    cy.contains('Rent')
    cy.contains('Buy')
  })

  it('displays search results and watch providers for a tv show', () => {
    cy.visit('http://localhost:3000/')

    cy.get('form').within(() => {
      cy.contains('button', 'TV Shows').click()
      cy.get('input').type('prison break')
      cy.contains('button', 'Search').click()
    })

    cy.contains('Search results for "prison break"')
    cy.contains('Prison Break').click()

    cy.contains('Prison Break')
    cy.contains('Stream')
    cy.contains('Rent')
    cy.contains('Buy')
  })
})
