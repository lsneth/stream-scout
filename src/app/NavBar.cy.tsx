import React from 'react'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('renders navigation with logo link', () => {
    cy.mount(<NavBar />)
    cy.get('nav').should('have.class', 'bg-black')
    cy.get('nav a[href="/"]').should('exist')
  })
})
