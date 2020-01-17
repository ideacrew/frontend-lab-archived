import { brokers } from '../support/brokers';

describe('brokers page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '**/brokers', brokers).as('brokers');
    cy.visit('/brokers');
  });

  it('should display some brokers', () => {
    cy.wait('@brokers');
    cy.contains('Jennifer Pinsker');
  });

  it('should filter brokers when using search', () => {
    cy.get('input[type=text]').type('23');
    cy.contains('Jennifer').should('not.exist');
    cy.contains('Mary Pins');
  });
});
