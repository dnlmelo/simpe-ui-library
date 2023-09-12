/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Alert, AlertActionPrimary, AlertDescription, AlertTitle} from './Alert';
import { AlertProps } from './Alert.types';

describe('<Alert />', () => {
  test('it should mount', () => {
    render(<Alert type={'attention'} mode={'block'}>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
      <AlertActionPrimary>Action</AlertActionPrimary>
    </Alert>);
    
    const alert = screen.getByTestId('Alert');

    expect(alert).toBeInTheDocument();
    expect(alert.classList.contains('alert-mode-block')).toBeTruthy();
  });

  describe('check type attr values', ()=>{
    const types:AlertProps['type'][] = [
      'attention',
      'error',
      'info',
      'success'
    ]

    types.forEach((t)=>{
      test(`check type ${t}`, ()=>{
        render(<Alert type={t} mode={'block'}>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
          <AlertActionPrimary>Action</AlertActionPrimary>
        </Alert>);

        const alert = screen.getByTestId('Alert');
        expect(alert.classList.contains(`alert-${t}`)).toBeTruthy();
      })
    })
  })

  test('check mode "inline"', () => {
    render(<Alert type={'attention'} mode={'inline'}>
      <AlertTitle>Title</AlertTitle>
      <AlertActionPrimary>Action</AlertActionPrimary>
    </Alert>);
    
    const alert = screen.getByTestId('Alert');

    expect(alert).toBeInTheDocument();
    expect(alert.classList.contains('alert-mode-inline')).toBeTruthy();
  });

  test('check action with onClick event', () => {
    const fn = jest.fn();

    render(<Alert type={'attention'} mode={'inline'}>
      <AlertTitle>Title</AlertTitle>
      <AlertActionPrimary onClick={fn}>Action</AlertActionPrimary>
    </Alert>);
    
    const alertBt = screen.getByTestId('Alert').querySelector('button')!;
    fireEvent.click(alertBt)
    expect(fn).toHaveBeenCalled();

  });
});