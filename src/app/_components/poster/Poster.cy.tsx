import React from 'react'
import Poster from './Poster'

describe('Poster', () => {
  it('renders image with alt text', () => {
    cy.mount(<Poster title="Test" poster_path="/img.jpg" />)
    cy.get('img[alt="Test poster"]').should('have.class', 'rounded-lg')
  })
})
