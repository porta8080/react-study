var config = {
  entry: './src/index.js',
  output: { path: './public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  }
};

module.exports = config;
