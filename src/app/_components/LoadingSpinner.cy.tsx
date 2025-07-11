import React from 'react'
import LoadingSpinner from './LoadingSpinner'

describe('<LoadingSpinner />', () => {
  it('renders svg with classes', () => {
    cy.mount(<LoadingSpinner className="extra" />)
    cy.get('svg').should('have.class', 'rounded-full')
    cy.get('svg').should('have.class', 'bg-black/25')
    cy.get('svg').should('have.class', 'extra')
  })
})
