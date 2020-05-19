const withPlugins = require('next-compose-plugins');

const css = require('@zeit/next-css')
const nextBuildId = require('next-build-id')

const base_cms_url = 'https://tciiapp.propernoun.co';

const webpack = {
  
};


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
    api_base: 'https://tciiapp.propernoun.co/wp-json/wp/v2/'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    api_base: base_cms_url + '/wp-json/wp/v2/',
    custom_api_base: base_cms_url + '/wp-json/tcii/v1/',
    acf_api_base: base_cms_url + '/wp-json/acf/v3',
    json_section_base: base_cms_url + '/wp-content/themes/tciicms/acf-json/'    
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
}

// module.exports = withCSS({
//   cssModules: true
// })

module.exports = withPlugins([
    [css],
    globals    
  ], nextConfig)