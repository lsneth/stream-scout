import React from 'react'
import PosterSkeleton from './PosterSkeleton'

describe('<PosterSkeleton />', () => {
  it('renders placeholder div', () => {
    cy.mount(<PosterSkeleton />)
    cy.get('div').should('have.class', 'animate-pulse')
    cy.get('div').should('have.class', 'rounded-lg')
  })
})
