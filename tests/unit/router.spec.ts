import router from '@/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    expect(router.mode).toEqual('hash');
    const path = router.getRoutes().map((route) => route.path);
    expect(path).toStrictEqual(['', '/about', '/encrypt', '/decrypt']);
  });
});
