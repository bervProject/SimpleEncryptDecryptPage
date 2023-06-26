import { mount } from '@vue/test-utils';

import Home from '@/views/HomePage.vue';

describe('Home.vue', () => {
  it('Render correctly', () => {
    const wrapper = mount(Home, {
      shallow: true,
      global: {
        stubs: ['router-link', 'router-view', 'o-button', 'o-carousel', 'o-carousel-item'],
      },
    });

    expect(wrapper.text()).toContain('Welcome to Simple Encryption & Decryption Text');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const oButtons = wrapper.findAll('o-button-stub');

    const buttonsLink = oButtons.map((button) => button.attributes()).map((attr) => attr.to);
    expect(buttonsLink).toStrictEqual(['/encrypt', '/decrypt']);
  });
});
