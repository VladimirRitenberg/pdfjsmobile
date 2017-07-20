var webpack = require("webpack");
module.exports = {
  context: __dirname,
  entry: {
    'viewer': './viewer.js',
	'pdf.worker': './node_modules/pdfjs-dist/build/pdf.worker.entry.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  resolve: {
		modules: [__dirname, 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.css']    
		},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
	new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ],
	module: {
		
        loaders: [
            { 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},
			{	test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: "file-loader?name=/images/[name].[ext]"
			},
			{
        test: /\.jsx$/, 
        exclude: /node_modules/,
				loader: "babel-loader"
			}
        ]
    }
	
};
