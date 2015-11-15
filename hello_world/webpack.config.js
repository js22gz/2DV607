module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'       
  },
module: {
	   loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
}
};