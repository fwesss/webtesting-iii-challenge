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

  it('should change buttons text to reflect the state the gate will be in if clicked', () => {
    const { getByText } = renderWithRedux(<Controls />);

    const openButton = getByText(/open|close/i);
    const openButtonText = openButton.textContent;
    fireEvent.click(openButton);
    expect(openButton.textContent).not.toBe(openButtonText);
  });

  it('should change buttons text to reflect the state the lock will be in if clicked', () => {
    const { getByText } = renderWithRedux(<Controls />, {
      initialState: {
        toggleGate: {
          closed: true
        }
      }
    });

    const lockButton = getByText(/lock|unlock/i);
    const lockButtonText = lockButton.textContent;
    fireEvent.click(lockButton);
    expect(lockButton.textContent).not.toBe(lockButtonText);
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
          closed: false
        }
      }
    });

    const lockUnlockButton = getByText(/lock|unlock/i);
    expect(lockUnlockButton).toBeDisabled();
  });
});
