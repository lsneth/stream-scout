import React from 'react'
import Poster from '../../src/app/_components/poster/Poster'
import { mount } from 'cypress/react18'

describe('Poster', () => {
  it('renders image with alt text', () => {
    mount(<Poster title="Test" poster_path="/path.jpg" />)
    cy.get('img').should('have.attr', 'alt', 'Test poster')
    cy.get('img').should('have.class', 'rounded-lg')
  })
})
