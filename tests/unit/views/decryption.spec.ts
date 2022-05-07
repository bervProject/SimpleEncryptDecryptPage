import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import Decryption from '@/views/DecryptionPage.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('Decryption.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(Decryption, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.text()).toContain('Decryption');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const bButtons = wrapper.findAll('b-button-stub');

    const buttons = bButtons.wrappers.map((bButton) => bButton.text());
    expect(buttons).toStrictEqual(['Decrypt', 'Home', 'Encrypt']);
  });
});
