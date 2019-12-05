import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

describe('Dashboard', () => {
  it('should display the controls and display', () => {
    render(
      <Dashboard>
        <Controls />
        <Display />
      </Dashboard>
    );
  });
});
