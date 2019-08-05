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
    decryptNow() {
      if (this.content && this.key) {
        const resultChiper = CryptoJS.AES.decrypt(this.content, this.key);
        this.result = resultChiper.toString(CryptoJS.enc.Utf8);
      } else {
        this.$buefy.snackbar.open({
          message: 'Please fill all form',
          type: 'is-danger',
        });
      }
    },
  },
});
