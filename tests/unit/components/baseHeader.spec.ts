import { shallowMount } from '@vue/test-utils';

import BaseHeader from '@/components/BaseHeader.vue';

describe('BaseHeader.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BaseHeader, {
      global: {
        stubs: ['router-link', 'router-view', 'o-button'],
      },
    });

    const navbarItems = wrapper.findAll('router-link-stub');
    const items = navbarItems.map((wrap) => wrap.attributes().to);
    expect(items).toStrictEqual(['/', '/', '/encrypt', '/decrypt']);
  });
});
