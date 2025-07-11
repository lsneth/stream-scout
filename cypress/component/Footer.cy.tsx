import React from 'react'
import Footer from '../../src/app/Footer'
import { mount } from 'cypress/react18'

describe('Footer', () => {
  it('renders footer links', () => {
    mount(<Footer />)
    cy.get('footer').should('have.class', 'flex')
    cy.contains('Privacy Policy')
    cy.contains('©2024 Lucas Nethercott')
  })
})
