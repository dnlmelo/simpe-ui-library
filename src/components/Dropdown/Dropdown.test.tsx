import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';
import TextLink from '../TextLink/TextLink';

describe('<Dropdown />', () => {
  test('it should mount', () => {
    render(<Dropdown size={'sm'} label={'label'}>
      <TextLink>Link</TextLink>
      <TextLink>Link 2</TextLink>
      <TextLink>Link 3</TextLink>
    </Dropdown>);
    
    const dropdown = screen.getByTestId('Dropdown');

    expect(dropdown).toBeInTheDocument();
  });
});