import { brokers } from '../support/brokers';

describe('brokers page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '**/brokers', brokers).as('brokers');
    cy.visit('/brokers');
  });

  it('should display welcome message', () => {
    cy.contains('brokers-list works!');
    cy.wait('@brokers');
  });
});
