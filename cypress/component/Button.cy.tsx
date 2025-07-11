import React from 'react'
import Button from '../../src/app/_components/Button'
import { mount } from 'cypress/react18'

describe('Button', () => {
  it('renders default button', () => {
    mount(<Button>Click</Button>)
    cy.get('button').should('have.class', 'rounded-lg')
    cy.contains('Click')
  })

  it('applies custom classes', () => {
    mount(<Button className="bg-red-500">Click</Button>)
    cy.get('button').should('have.class', 'bg-red-500')
    cy.get('button').should('not.have.class', 'bg-accent2')
  })
})
