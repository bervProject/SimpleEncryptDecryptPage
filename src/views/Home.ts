import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      carousels: [
        { text: 'To keep your text secret, please use Embed.', color: 'info' },
        { text: 'To open your secret message, please use Extract', color: 'info' },
        { text: 'Enjoy this mini application', color: 'info' },
      ]
    };
  }
});
