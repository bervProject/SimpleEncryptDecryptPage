import { defineComponent, ref } from 'vue';
import { useOruga } from '@oruga-ui/oruga-next';
import AES from 'crypto-js/aes';

export default defineComponent({
  setup() {
    const oruga = useOruga();
    const result = ref('');
    function danger() {
      oruga.notification.open({
        message: 'Please fill all form',
        position: 'bottom-right',
        variant: 'danger',
        closable: true,
      });
    }
    return { danger, result };
  },
  data() {
    return {
      content: '',
      key: '',
    };
  },
  methods: {
    encryptNow() {
      console.log(this.content, this.key);
      if (this.content && this.key) {
        const resultChiper = AES.encrypt(this.content, this.key);
        this.result = resultChiper.toString();
      } else {
        this.danger();
      }
    },
  },
});
