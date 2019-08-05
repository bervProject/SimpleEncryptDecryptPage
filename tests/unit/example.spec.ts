import { shallowMount } from '@vue/test-utils';
import Encryption from '@/views/Encryption.vue';

describe('Encryption.vue', () => {
  it('renders props.msg when passed', () => {
    const content = 'new message';
    const wrapper = shallowMount(Encryption, {
      propsData: { content },
    });
    expect(wrapper.text()).toMatch(content);
  });
});
