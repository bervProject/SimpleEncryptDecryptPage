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
        const plain = resultChiper.toString();
        const r = decodeURIComponent(plain.replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'));
        this.result = r;
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
