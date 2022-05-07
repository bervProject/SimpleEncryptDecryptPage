import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import Encryption from '@/views/EncryptionPage.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('Encryption.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(Encryption, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.text()).toContain('Encryption');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const bButtons = wrapper.findAll('b-button-stub');

    const buttons = bButtons.wrappers.map((bButton) => bButton.text());
    expect(buttons).toStrictEqual(['Encrypt', 'Home', 'Decrypt']);
  });
});
