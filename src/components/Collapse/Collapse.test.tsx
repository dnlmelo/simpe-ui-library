/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collapse from './Collapse';

describe('<Collapse />', () => {
  test('it should mount', () => {
    render(<Collapse collapsed={false} title='xxx'>
      children
    </Collapse>);
    
    const collapse = screen.getByTestId('Collapse');

    expect(collapse).toBeInTheDocument();
  });

  test('it should mount collapsed', () => {
    render(<Collapse collapsed={true} title='xxx'>
      children
    </Collapse>);
    
    const collapse = screen.getByTestId('Collapse');
    const body = collapse.querySelector('[data-collapsed]')
    expect(body?.getAttribute('data-collapsed')).toBe('true');
  });
  test('it should mount with children in collapse-body class', () => {
    render(<Collapse collapsed={true} title='xxx'>
      children
    </Collapse>);
    
    const collapse = screen.getByTestId('Collapse').querySelector('.collapse-body')

    expect(collapse?.textContent).toBe('children');
  });
});