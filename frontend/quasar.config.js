/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      fix: true,
      warnings: true,
      errors: true
    },

    boot: ['router', 'web3', 'i18n'],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons', 'fontawesome-v6'],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      vueRouterMode: 'history',
      vitePlugins: []
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      iconSet: 'material-icons',
      lang: 'en-us',
      plugins: ['Notify', 'Dialog', 'Loading', 'LoadingBar']
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render']
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'cxbt.app',
        productName: 'CXBT',
        directories: {
          output: 'dist/electron/'
        }
      }
    },

    bex: {
      contentScripts: ['my-content-script']
    }
  }
})
