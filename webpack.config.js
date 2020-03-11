const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
  	rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
     }
    },
    {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
    },
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }

  ]
  }
};