import Vue from 'vue';
import AES from 'crypto-js/aes';

export default Vue.extend({
  data() {
    return {
      content: '',
      key: '',
      result: '',
    };
  },
  methods: {
    encryptNow() {
      if (this.content && this.key) {
        const resultChiper = AES.encrypt(this.content, this.key);
        this.result = resultChiper.toString();
      } else {
        this.$buefy.toast.open({
          message: 'Please fill all form',
          type: 'is-danger',
          position: 'is-bottom',
        });
      }
    },
  },
});
