import { mount } from '@cypress/react'; // or @cypress/vue
import type {} from 'cypress';
import Layout from '../../src/components/layout';

describe('Layout', () => {
  it('renders the Layout  ', () => {
    mount(<Layout />);
    cy.get('[data-testid=todo-list]').should('exist');
  });

  it('contains the correct number of Layouts', () => {
    const todos = [
      { text: 'Buy milk', id: 1 },
      { text: 'Learn Component Testing', id: 2 },
    ];

    mount(<Layout />);

    cy.get('[data-testid=todos]').should('have.length', todos.length);
  });
});
