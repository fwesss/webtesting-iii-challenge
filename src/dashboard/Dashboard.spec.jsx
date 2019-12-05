import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import renderWithRedux from '../testingUtils';

describe('Dashboard', () => {
  it('should display the controls and display', () => {
    renderWithRedux(
      <Dashboard>
        <Controls />
        <Display />
      </Dashboard>
    );
  });
});
