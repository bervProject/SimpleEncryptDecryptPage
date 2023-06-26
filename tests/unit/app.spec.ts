import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    const baseHeader = wrapper.find('base-header-stub');
    expect(baseHeader.exists()).toBe(true);

    const baseFooter = wrapper.find('base-footer-stub');
    expect(baseFooter.exists()).toBe(true);

    const routerView = wrapper.find('router-view-stub');
    expect(routerView.exists()).toBe(true);
  });
});
