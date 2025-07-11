import React from 'react'
import SearchForm from '../../src/app/_components/SearchForm'
import { mount } from 'cypress/react18'
import * as nextNavigation from 'next/navigation'

describe('SearchForm', () => {
  it('handles search submission', () => {
    const push = cy.stub().as('push')
    cy.stub(nextNavigation, 'useRouter').returns({ push })

    mount(<SearchForm defaultQuery="start" />)

    cy.get('input').should('have.value', 'start')
    cy.contains('button', 'TV Shows').click()
    cy.get('input').clear().type('hello world')
    cy.contains('button', 'Search').click()

    cy.get('@push').should(
      'have.been.calledWith',
      '/search-results?query=hello+world&watchType=tv',
    )
  })
})
