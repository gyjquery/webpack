module.exports={
	entry:'./entry.js',
    output:{
    	filename:'./build.js'
    },
    module:{
		loaders:[{
			test:/\.css$/,loader:'style-loader!css-loader'
		}]
	}
}