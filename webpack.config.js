var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output:{
		filename: 'bundle.js',
		publicPath: '/js/',
		path: path.resolve(__dirname, 'dist')
	},
	watch: true,
	devtool: "#source-map",
	module:{
		loaders: [
			{
				test:/\.jsx?$/,
				include: path.join(__dirname,'src'),
				loader: "babel-loader",
        query:
        {
           presets: ['es2015', 'react']
        }		
			},
      {
        test: /\.css$/,
        include: path.join(__dirname,'src'),
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|ttf|eot)$/, 
        include: path.join(__dirname,'src'),
        loader: 'url-loader?limit=10000'
      }
		]
	},
  resolve: {
    extensions: ['.js', '.es6']
  }
};