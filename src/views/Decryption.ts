import Vue from 'vue';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

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
        const resultChiper = AES.decrypt(this.content, this.key);
        const plain = resultChiper.toString(Utf8);
        this.result = plain;
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
