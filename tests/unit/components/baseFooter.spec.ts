import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import BaseFooter from '@/components/BaseFooter.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('BaseFooter.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BaseFooter, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    expect(wrapper.text()).toContain('Simple Encryption Decryption');

    expect(wrapper.classes()).toStrictEqual(['footer']);
  });
});
