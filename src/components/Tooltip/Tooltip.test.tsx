import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip.types';

describe('<Tooltip />', () => {
  test('it should mount hidden', () => {
    render(<div>
      <span id="id">span</span>
      <Tooltip triggerId={'id'} x={'center'} y={'top'}>msg</Tooltip>
    </div>);
    
    const tooltip = screen.getByTestId('Tooltip');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip.getAttribute('aria-hidden')).toBe('true');
  });

  describe('check attr color', ()=>{
    const colors:TooltipProps['color'][]=[
      'error',
      'info',
      'success'
    ]

    colors.forEach((c)=>{
      test(`check color ${c}`, ()=>{
        render(<div>
          <span id="id">span</span>
          <Tooltip color={c} triggerId={'id'} x={'center'} y={'top'}>msg</Tooltip>
        </div>); 

        const tooltip = screen.getByTestId('Tooltip');
        expect(tooltip.classList.contains(`tooltip-color-${c}`)).toBe(true)
      })
    })
  })

  describe('check x attr', ()=>{
    const xPosition:TooltipProps['x'][]=[
      'center',
      'left',
      'right'
    ]

    xPosition.forEach((x)=>{
      test(`check position top - ${x}`, ()=>{
        render(<div>
          <span id="id">span</span>
          <Tooltip x={x} triggerId={'id'} y={'top'}>msg</Tooltip>
        </div>); 

        const tooltip = screen.getByTestId('Tooltip');
        expect(tooltip.classList.contains(`tooltip-position--top-${x}`)).toBe(true)
      })
    })

  })

  describe('check y attr', ()=>{
    const yPosition:TooltipProps['y'][]=[
      'top',
      'bottom'
    ]

    yPosition.forEach((y)=>{
      test(`check position ${y} - left`, ()=>{
        render(<div>
          <span id="id">span</span>
          <Tooltip y={y} x='left' triggerId={'id'}>msg</Tooltip>
        </div>); 

        const tooltip = screen.getByTestId('Tooltip');
        expect(tooltip.classList.contains(`tooltip-position--${y}-left`)).toBe(true)
      })
    })

  })
});