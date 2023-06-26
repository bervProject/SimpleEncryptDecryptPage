import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-header',
  data() {
    return {
      activator: false,
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
});
