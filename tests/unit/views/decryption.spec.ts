import { shallowMount } from '@vue/test-utils';

import Decryption from '@/views/DecryptionPage.vue';

describe('Decryption.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(Decryption, {
      global: {
        stubs: ['router-link', 'router-view', 'o-button', 'o-field', 'o-input'],
      },
    });

    expect(wrapper.text()).toContain('Decryption');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const oButtons = wrapper.findAll('o-button-stub');

    const buttonsLink = oButtons.map((button) => button.attributes()).map((attr) => attr.to);
    expect(buttonsLink).toStrictEqual([undefined, '/', '/encrypt']);
  });
});
