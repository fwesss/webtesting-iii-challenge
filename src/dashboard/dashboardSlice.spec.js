import toggleGate, { toggleOpen, toggleLock } from './dashboardSlice';

describe('toggleGate reducer', () => {
  it('should handle initial state', () => {
    expect(toggleGate(undefined, {})).toEqual({
      closed: false,
      locked: false
    });
  });

  it('should handle toggleOpen', () => {
    expect(
      toggleGate(
        {
          closed: false
        },
        {
          type: toggleOpen.type
        }
      )
    ).toEqual({
      closed: true
    });
  });

  it('should handle toggleLock', () => {
    expect(
      toggleGate(
        {
          locked: false
        },
        {
          type: toggleLock.type
        }
      )
    ).toEqual({
      locked: true
    });
  });
});
