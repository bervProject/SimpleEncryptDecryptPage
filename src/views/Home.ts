import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      carousels: [
        { text: 'To keep your text secret, please use Embed.', color: 'info', image: 'https://picsum.photos/seed/picsum/800/600?blur=2' },
        { text: 'To open your secret message, please use Extract', color: 'info', image: 'https://picsum.photos/seed/picsum1/800/600?blur=2' },
        { text: 'Enjoy this mini application', color: 'info', image: 'https://picsum.photos/seed/picsum5/800/600?blur=2' },
      ],
    };
  },
});
