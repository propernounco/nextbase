const withPlugins = require('next-compose-plugins');

const css = require('@zeit/next-css')
const nextBuildId = require('next-build-id')

console.log('starting')

const nextConfig = {
  distDir: '_next',
  generateBuildId: async () => {
    const fromGit = await nextBuildId()
    console.log(fromGit);    
    return fromGit.id
  }
};

const globals = {
  serverRuntimeConfig: { // Will only be available on the server side
    test: 'test',
    api_base: 'http://cms.propernoun.co/wp-json/wp/v2/'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    imageUrl: 'https://res.cloudinary.com/propernoun/image/upload/q_auto,f_auto',
    address: '300 SW 1st Avenue, #155 <br /> Fort Lauderdale, FL 33301',
    test: 'test'
  }
}

// module.exports = withCSS({
//   cssModules: true
// })

module.exports = withPlugins([
    [css],
    globals    
  ], nextConfig)