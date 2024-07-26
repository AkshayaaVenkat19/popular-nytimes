import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import detailReducer from '../../store/reducer';
import DetailPage from './detail';
import { mockData } from '../../mocks/mockData';
import { Article } from '../../types';

const mockStore = (state: { detail: Article }) => {
  return configureStore({
    reducer: {
      detail: detailReducer,
    },
    preloadedState: state,
  });
};

describe('Detail Page', () => {
  test('should render detail from Redux state', () => {
    const store = mockStore({
      detail: mockData.results[0],
    });

    render(
      <Provider store={store}>
        <DetailPage />
      </Provider>,
    );

    const title = screen.getAllByTestId('articleDetail');
    expect(title).toHaveLength(1);
    const subTitle = screen.getAllByTestId('articleSubHeader');
    expect(subTitle).toHaveLength(1);
  });
});
