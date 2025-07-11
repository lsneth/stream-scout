import React from 'react'
import NavBar from '../../src/app/NavBar'
import { mount } from 'cypress/react18'

describe('NavBar', () => {
  it('renders nav with logo link', () => {
    mount(<NavBar />)
    cy.get('nav').should('have.class', 'flex')
    cy.get('a[href="/"]').within(() => {
      cy.get('img')
    })
  })
})
