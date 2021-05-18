const packageJson = require('./package.json')

module.exports = {
  env: {
    APP_VERSION: packageJson.version,
  },
}
