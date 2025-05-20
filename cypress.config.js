const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      hideCredentials: true,
      hideSensitiveData: true,
      requestMode: true,
      snapshotOnly: true
    }
  },
  fixturesFolder: 'cypress/fixtures',
  video: false,
})
