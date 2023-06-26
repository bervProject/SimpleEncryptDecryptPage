import { shallowMount } from '@vue/test-utils';

import BaseFooter from '@/components/BaseFooter.vue';

describe('BaseFooter.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BaseFooter, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(wrapper.text()).toContain('Simple Encryption Decryption');

    expect(wrapper.classes()).toStrictEqual(['footer']);
  });
});
