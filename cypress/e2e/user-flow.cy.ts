describe('happy path', () => {
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

    cy.contains('Search Results')
    cy.contains('The Lord of the Rings: The Return of the King').click()

    cy.contains('The Lord of the Rings: The Return of the King')
    cy.contains('Stream')
    cy.contains('Rent')
    cy.contains('Buy')
  })

  it('displays search results for a tv show', () => {
    cy.visit('http://localhost:3000/')

    cy.get('form').within(() => {
      cy.contains('button', 'TV Shows').click()
      cy.get('input').type('prison break')
      cy.contains('button', 'Search').click()
    })

    cy.contains('Search Results')
    cy.contains('Prison Break').click()

    cy.contains('Prison Break')
    cy.contains('Stream')
    cy.contains('Rent')
    cy.contains('Buy')
  })
})
