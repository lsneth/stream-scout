import { mount } from 'cypress/react18'
import './commands'
import '../../src/app/globals.css'

Cypress.Commands.add('mount', mount)

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
