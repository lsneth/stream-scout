import React from 'react'
import PosterSkeleton from './PosterSkeleton'

describe('PosterSkeleton', () => {
  it('renders loading skeleton', () => {
    cy.mount(<PosterSkeleton />)
    cy.get('div').should('have.class', 'animate-pulse')
  })
})
