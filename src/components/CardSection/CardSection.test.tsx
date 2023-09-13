/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {CardSection} from './CardSection';

describe('<CardSection />', () => {
  test('it should mount', () => {
    render(<CardSection><p className='children'>asdfasdf</p></CardSection>);
    
    const cardSection = screen.getByTestId('CardSection');

    expect(cardSection.querySelector('.children')).toBeInTheDocument();
  });
});