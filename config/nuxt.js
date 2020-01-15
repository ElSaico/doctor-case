module.exports.nuxt = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Doctor Case Review',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {},
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  srcDir: 'client/',
  plugins: [{ src: '~plugins/socket.io.js', ssr: false }],
};
