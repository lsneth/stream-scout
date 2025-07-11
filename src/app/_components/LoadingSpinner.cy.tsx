import React from 'react'
import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders spinner svg', () => {
    cy.mount(<LoadingSpinner className="h-4 w-4" />)
    cy.get('svg').should('have.class', 'h-4')
  })
})
