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
				loader: "file-loader?name=/images/[name].[ext]"}
        ],
		resolve: {
			extensions: ['', '.js', '.jsx', '.css'],
			modulesDirectories: [
			  'node_modules'
			]        
		},	
    }
	
};
