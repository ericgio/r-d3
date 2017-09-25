module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.tsv$/,
        use: {
          loader: 'dsv-loader',
          query: {
            delimiter: '\t',
          },
        },
      },
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.react.js'],
  },
};
