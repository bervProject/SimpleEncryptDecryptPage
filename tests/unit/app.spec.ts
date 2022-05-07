import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import App from '@/App.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    const baseHeader = wrapper.find('base-header-stub');
    expect(baseHeader.exists()).toBe(true);

    const baseFooter = wrapper.find('base-footer-stub');
    expect(baseFooter.exists()).toBe(true);

    const routerView = wrapper.find('router-view-stub');
    expect(routerView.exists()).toBe(true);
  });
});
