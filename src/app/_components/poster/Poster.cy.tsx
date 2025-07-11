import React from 'react'
import Poster from './Poster'

describe('<Poster />', () => {
  it('renders image with alt and classes', () => {
    cy.mount(<Poster title="Test" poster_path="/test.jpg" />)
    cy.get('img[alt="Test poster"]').should('exist')
    cy.get('img').should('have.class', 'rounded-lg')
  })

  it('uses placeholder when no path', () => {
    cy.mount(<Poster title="None" poster_path="" />)
    cy.get('img[alt="None poster"]').should('exist')
  })
})
