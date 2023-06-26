import { mount } from '@vue/test-utils';

import Encryption from '@/views/EncryptionPage.vue';

describe('Encryption.vue', () => {
  it('Render correctly', () => {
    const wrapper = mount(Encryption, {
      shallow: true,
      global: {
        stubs: ['router-link', 'router-view', 'o-button', 'o-field', 'o-input'],
      },
    });

    expect(wrapper.text()).toContain('Encryption');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const oButtons = wrapper.findAll('o-button-stub');

    const buttonsLink = oButtons.map((button) => button.attributes()).map((attr) => attr.to);
    // unreliable
    expect(buttonsLink).toStrictEqual([undefined, '/', '/decrypt']);
  });
});
