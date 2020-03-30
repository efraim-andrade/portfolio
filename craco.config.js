const path = require('path');
reactHotReloadPlugin = require('craco-plugin-react-hot-reload');


module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
    },
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ]
};
