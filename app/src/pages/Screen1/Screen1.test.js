import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Screen1 from './Screen1';

describe('<Screen1 />', () => {
  test('it should mount', () => {
    render(<Screen1 />);
    
    const screen1 = screen.getByTestId('Screen1');

    expect(screen1).toBeInTheDocument();
  });
});