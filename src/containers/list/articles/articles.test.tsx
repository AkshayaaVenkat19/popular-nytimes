import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Articles from '.';
import { mockData } from '../../../mocks/mockData';
import { Provider } from 'react-redux';
import store from '../../../store';
import userEvent from '@testing-library/user-event';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockData),
  } as Response),
) as jest.Mock;

describe('List Page', () => {
  test('displays a list of items', async () => {
    render(
      <Provider store={store}>
        <Router initialEntries={['/']}>
          <Articles />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Most Popular Articles')).toBeInTheDocument();
      const listItems = screen.getAllByTestId('articleItem');
      expect(listItems.length).toBeGreaterThan(0);
      userEvent.click(listItems[0]);
      waitFor(() => {
        const detail = screen.getAllByTestId('articleDetail');
        expect(detail.length).toBeGreaterThan(0);
      });
    });
  });
});
