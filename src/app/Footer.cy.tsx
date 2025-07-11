import React from 'react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders footer links', () => {
    cy.mount(<Footer />)
    cy.get('footer').within(() => {
      cy.get('a[href*="themoviedb"]').should('exist')
      cy.contains('a', 'Privacy Policy')
      cy.contains('a', '©2024 Lucas Nethercott')
    })
  })
})
