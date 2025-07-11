import React from 'react'
import SearchForm from './SearchForm'
import * as nextNav from 'next/navigation'
import * as ga from '@next/third-parties/google'

describe('SearchForm', () => {
  it('changes watch type and submits search', () => {
    const push = cy.stub().as('push')
    cy.stub(nextNav, 'useRouter').returns({ push })
    cy.stub(ga, 'sendGAEvent').as('ga')

    cy.mount(
      <SearchForm long defaultWatchType="movie" defaultQuery="" />,
    )

    cy.contains('button', 'TV Shows').click()
    cy.contains('button', 'TV Shows').should('have.class', 'border-b-2')
    cy.get('input').type('example title')
    cy.get('button[type="submit"]').click()
    cy.get('@push').should(
      'have.been.calledWith',
      '/search-results?query=example+title&watchType=tv',
    )
    cy.get('@ga').should('have.been.called')
  })
})
