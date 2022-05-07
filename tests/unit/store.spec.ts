import store from '@/store';

describe('store.ts', () => {
  it('Check attributes', () => {
    expect(store.state).toEqual({});
  });
});
