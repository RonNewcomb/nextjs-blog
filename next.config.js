// This must be a .js file not a .ts file.

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
