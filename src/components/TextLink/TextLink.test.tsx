import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {TextLink} from './TextLink';

describe('<TextLink />', () => {
  test('it should mount', () => {
    render(<TextLink>Link</TextLink>);
    
    const textLink = screen.getByTestId('TextLink');

    expect(textLink).toBeInTheDocument();
  });
});