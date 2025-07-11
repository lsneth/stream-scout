import React from 'react'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders logo link', () => {
    cy.mount(<NavBar />)
    cy.get('nav').find('a[href="/"]').find('img').should('exist')
  })
})
