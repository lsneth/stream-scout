describe('navigation links', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://mnva0fhft9.execute-api.us-east-2.amazonaws.com/default/getWatchData*watchType=movie*',
      { fixture: 'search_movie.json' },
    ).as('searchMovie')
    cy.intercept('GET', '/_next/image*', {
      body: '',
      headers: { 'Content-Type': 'image/png' },
    })
  })

  it('returns home when clicking logo', () => {
    cy.visit('http://localhost:3000/search-results?query=lord&watchType=movie')
    cy.wait('@searchMovie')
    cy.get('nav a[href="/"]').click()
    cy.location('pathname').should('eq', '/')
  })

  it("opens developer's website from footer", () => {
    cy.intercept('GET', 'https://www.lucasnethercott.com/**', {
      statusCode: 200,
      body: '<html></html>',
    }).as('devSite')
    cy.visit('http://localhost:3000/search-results?query=lord&watchType=movie')
    cy.wait('@searchMovie')
    cy.contains('footer a', '©2024 Lucas Nethercott')
      .should('have.attr', 'href', 'https://www.lucasnethercott.com')
      .invoke('attr', 'target', '_self')
      .click()
    cy.wait('@devSite')
  })

  it('opens TMDB website from footer', () => {
    cy.intercept('GET', 'https://developer.themoviedb.org/**', {
      statusCode: 200,
      body: '<html></html>',
    }).as('tmdb')
    cy.visit('http://localhost:3000/search-results?query=lord&watchType=movie')
    cy.wait('@searchMovie')
    cy.get(
      'footer a[href="https://developer.themoviedb.org/reference/intro/getting-started"]',
    )
      .invoke('attr', 'target', '_self')
      .click()
    cy.wait('@tmdb')
  })

  it('opens JustWatch website from footer', () => {
    cy.intercept('GET', 'https://www.justwatch.com/**', {
      statusCode: 200,
      body: '<html></html>',
    }).as('justwatch')
    cy.visit('http://localhost:3000/search-results?query=lord&watchType=movie')
    cy.wait('@searchMovie')
    cy.get('footer a[href="https://www.justwatch.com/"]')
      .invoke('attr', 'target', '_self')
      .click()
    cy.wait('@justwatch')
  })
})
