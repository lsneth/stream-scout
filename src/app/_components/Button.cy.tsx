import React from 'react'
import Button from './Button'

describe('Button', () => {
  it('renders label and handles click', () => {
    const onClick = cy.stub().as('click')
    cy.mount(<Button onClick={onClick} className="bg-accent1">Test</Button>)
    cy.contains('button', 'Test').should('have.class', 'bg-accent1')
    cy.contains('button', 'Test').click()
    cy.get('@click').should('have.been.called')
  })
})
