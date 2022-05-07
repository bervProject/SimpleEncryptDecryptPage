import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import Home from '@/views/HomePage.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('Home.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.text()).toContain('Welcome to Simple Encryption & Decryption Text');

    expect(wrapper.classes()).toStrictEqual(['section']);

    const bButtons = wrapper.findAll('b-button-stub');

    const buttons = bButtons.wrappers.map((bButton) => bButton.text());
    expect(buttons).toStrictEqual(['Encrypt', 'Decrypt']);
  });
});
