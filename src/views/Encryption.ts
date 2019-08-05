import Vue from 'vue';
import CryptoJS from 'crypto-js';

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
        const resultChiper = CryptoJS.AES.encrypt(this.content, this.key);
        this.result = resultChiper.toString();
      } else {
        this.$buefy.snackbar.open({
          message: 'Please fill all form',
          type: 'is-danger',
          position: 'is-bottom',
        });
      }
    },
  },
});
