import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab from './Tab';
const fn = jest.fn()

describe('<Tab />', () => {
  test('it should mount', () => {
    render(<Tab label='text' active={false} onActive={fn}/>);
    const tab = screen.getByTestId('Tab');
    expect(tab).toBeInTheDocument();
    expect(tab.textContent).toBe('text')
  });

  test('check active attr', () => {
    render(<Tab label='text' active={true} onActive={fn}/>);
    const tab = screen.getByTestId('Tab')
    expect(tab.getAttribute('data-active')).toBe('true');
  });

  test('check icon on left', () => {
    render(<Tab label='text' icon='user' iconPos='left' active={true} onActive={fn}/>);
    const tab = screen.getByTestId('Tab')
    expect(tab.classList.contains('tab-icon-left')).toBe(true);
  });

  test('check icon on right', () => {
    render(<Tab label='text' icon='user' iconPos='right' active={true} onActive={fn}/>);
    const tab = screen.getByTestId('Tab')
    expect(tab.classList.contains('tab-icon-right')).toBe(true);
  });

  test('check onActive event', () => {
    render(<Tab label='text' icon='user' iconPos='right' active={false} onActive={fn}/>);
    const tab = screen.getByTestId('Tab')
    fireEvent.click(tab)
    expect(fn).toHaveBeenCalled()
  });
});