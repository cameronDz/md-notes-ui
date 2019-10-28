import HtmlWebPackPlugin from 'html-webpack-plugin';

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/../dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
