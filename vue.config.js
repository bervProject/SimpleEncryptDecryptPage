module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SimpleEncryptDecryptPage/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}