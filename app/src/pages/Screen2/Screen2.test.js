import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Screen2 from './Screen2';

describe('<Screen2 />', () => {
  test('it should mount', () => {
    render(<Screen2 />);
    
    const screen2 = screen.getByTestId('Screen2');

    expect(screen2).toBeInTheDocument();
  });
});