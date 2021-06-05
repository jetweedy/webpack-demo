const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bananas.js',
    path: path.resolve(__dirname, 'dist'),
  },
};