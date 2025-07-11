import React from 'react'
import SearchForm from './SearchForm'

describe('<SearchForm />', () => {
  it('renders form elements with default props', () => {
    cy.mount(<SearchForm />)
    cy.get('form').should('have.class', 'bg-black')
    cy.contains('button', 'Movies').should('have.class', 'bg-accent1')
    cy.contains('button', 'TV Shows').should('have.class', 'bg-accent2')
    cy.get('input#query').should('exist')
    cy.contains('button', 'Search')
  })

  it('submits search query', () => {
    const push = cy.stub().as('push')
    cy.mount(<SearchForm routerPush={push} />)

    cy.get('input#query').type('star wars')
    cy.contains('button', 'TV Shows').click()
    cy.contains('button', 'Search').click()

    cy.get('@push').should(
      'have.been.calledWith',
      '/search-results?query=star+wars&watchType=tv',
    )
  })
})
