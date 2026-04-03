import router from '../../src/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    const path = router.getRoutes().map((route) => route.path);
    expect(path).toStrictEqual(['/', '/about', '/encrypt', '/decrypt']);
  });
});
