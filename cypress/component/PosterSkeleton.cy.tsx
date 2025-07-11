import React from 'react'
import PosterSkeleton from '../../src/app/_components/poster/PosterSkeleton'
import { mount } from 'cypress/react18'

describe('PosterSkeleton', () => {
  it('renders skeleton div', () => {
    mount(<PosterSkeleton />)
    cy.get('div').should('have.class', 'animate-pulse')
  })
})
