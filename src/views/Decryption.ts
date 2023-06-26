import { defineComponent } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

export default defineComponent({
  setup() {
    const { oruga } = useProgrammatic();
    function danger() {
      oruga.notification.open({
        message: 'Please fill all form',
        position: 'bottom-right',
        variant: 'danger',
        closable: true,
      });
    }
    return { danger };
  },
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
        this.danger();
      }
    },
  },
});
