import { mount } from 'cypress/react18'
import '../../src/app/globals.css'
import './commands'

Cypress.Commands.add('mount', mount)

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

export {}
