import './commands'
import 'cypress-mochawesome-reporter/register'
import 'cypress-real-events'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
