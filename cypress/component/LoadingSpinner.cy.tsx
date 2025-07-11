import React from 'react'
import LoadingSpinner from '../../src/app/_components/LoadingSpinner'
import { mount } from 'cypress/react18'

describe('LoadingSpinner', () => {
  it('renders spinner svg', () => {
    mount(<LoadingSpinner />)
    cy.get('svg').should('have.class', 'rounded-full')
  })
})
