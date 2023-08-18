import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb />', () => {
  const history = [
    {text: 'nivel 1', href: '/back'},
    {text: 'nivel 2', href: '/back'},
    {text: 'nivel 3', href: '/back'}
  ];

  test('it should mount', () => {
    render(<Breadcrumb history={history}/>);
    
    const breadcrumb = screen.getByTestId('Breadcrumb');

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb.childNodes.length).toEqual(3);
  });
});