import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyState from './EmptyState';

describe('<EmptyState />', () => {
  test('it should mount', () => {
    render(<EmptyState>no results</EmptyState>);
    
    const emptyState = screen.getByTestId('EmptyState');

    expect(emptyState).toBeInTheDocument();
    expect(emptyState.textContent).toBe('no results');
  });
});