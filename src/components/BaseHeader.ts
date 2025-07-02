import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseHeader',
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
