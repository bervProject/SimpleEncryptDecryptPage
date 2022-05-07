import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import BaseHeader from '@/components/BaseHeader.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('BaseHeader.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(BaseHeader, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    const navbarItems = wrapper.findAll('b-navbar-item-stub');
    const items = navbarItems.wrappers.map((wrapper) => wrapper.text());
    expect(items).toStrictEqual(['', 'Home', 'Encrypt', 'Decrypt', 'About', 'Github']);
  });
});
