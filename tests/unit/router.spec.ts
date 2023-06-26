import router from '@/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    const path = router.getRoutes().map((route) => route.path);
    expect(path).toStrictEqual(['/', '/about', '/encrypt', '/decrypt']);
  });
});
