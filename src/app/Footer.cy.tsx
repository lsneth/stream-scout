import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('renders links and classes', () => {
    cy.mount(<Footer />)
    cy.get('footer').should('have.class', 'bg-black')
    cy.get('footer a[href="/privacy-policy"]').should('exist')
    cy.get('footer a[href="https://developer.themoviedb.org/reference/intro/getting-started"]').should('exist')
    cy.get('footer a[href="https://www.lucasnethercott.com"]').should('exist')
  })
})
