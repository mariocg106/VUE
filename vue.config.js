const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },

  transpileDependencies: true
};

module.exports = {
  transpileDependencies: [
    "@splidejs"
  ]
};


link: [
  {
  rel: 'stylesheet',
  href:
  'https://fonts.googleapis.com/css?family=Material+Icons+Outlined'
  }
  ]