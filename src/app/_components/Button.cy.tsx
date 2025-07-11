import React from 'react'
import Button from './Button'

describe('<Button />', () => {
  it('renders children and custom class', () => {
    cy.mount(<Button className="custom-class">Click me</Button>)
    cy.contains('button', 'Click me').should('have.class', 'custom-class')
  })

  it('calls onClick when clicked', () => {
    const handleClick = cy.stub().as('click')
    cy.mount(<Button onClick={handleClick}>Press</Button>)
    cy.contains('button', 'Press').click()
    cy.get('@click').should('have.been.called')
  })
})