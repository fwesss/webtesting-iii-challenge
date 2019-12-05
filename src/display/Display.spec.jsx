import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

describe('Display default behavior', () => {
  it('should display if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);

    getByText(/open|closed/i);
    getByText(/locked|unlocked/i);
  });

  it('should use green-led class when unlocked or open', () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked/i).classList.contains('green-led');
    getByText(/open/i).classList.contains('green-led');
  });

  it('should default to unlocked and open', () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });
});

describe('Display when unlocked or open', () => {
  it('should display "Open" if closed prop is false"', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    getByText(/Open/);
  });
});

describe('Display when locked or closed', () => {
  it('should use red-led class when locked or closed', () => {
    const { getByText } = render(<Display closed locked />);

    getByText(/locked/i).classList.contains('red-led');
    getByText(/closed/i).classList.contains('red-led');
  });

  it('should display "Locked" if the locked prop is true', () => {
    const { getByText } = render(<Display closed locked />);

    getByText(/Locked/);
  });

  it('should display "Closed" if the closed prop is true', () => {
    const { getByText } = render(<Display closed locked />);

    getByText(/Closed/);
  });
});
