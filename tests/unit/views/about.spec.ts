import { shallowMount } from '@vue/test-utils';
import About from '@/views/AboutPage.vue';

describe('About.vue', () => {
  it('renders correctly', () => {
    const content = 'Simple Encrypt Decrypt';
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toMatch(content);
  });
});
