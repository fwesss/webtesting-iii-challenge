import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';
import renderWithRedux from '../testingUtils';

describe('Buttons', () => {
  it('should have buttons to toggle closed and locked states', () => {
    const { getByText } = renderWithRedux(<Controls />);

    getByText(/unlock|lock/i);
    getByText(/open|close/i);
  });

  it('should change buttons text to reflect the state the door will be in if clicked', () => {
    const { getByText } = renderWithRedux(<Controls />);

    const openButton = getByText(/open gate|close gate/i);
    const openButtonText = openButton.textContent;
    fireEvent.click(openButton);
    expect(openButton.textContent).not.toBe(openButtonText);
  });

  it('should have a disabled closed toggle button if gate is locked', () => {
    const { getByText } = renderWithRedux(<Controls />, {
      initialState: {
        toggleGate: {
          locked: true
        }
      }
    });

    const openCloseButton = getByText(/open|close/i);
    expect(openCloseButton).toBeDisabled();
  });

  it('should have a disabled locked toggle button if gate is open', () => {
    const { getByText } = renderWithRedux(<Controls />, {
      initialState: {
        toggleGate: {
          open: true
        }
      }
    });

    const lockUnlockButton = getByText(/lock|unlock/i);
    expect(lockUnlockButton).toBeDisabled();
  });
});
