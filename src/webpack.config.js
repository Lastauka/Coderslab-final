


const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = {
    entry:"./index.js",
    output: { filename: "out.js", path: path.resolve(__dirname, "js") },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015","stage-2","react"]
                }
            }
        },{
            test: /\.(scss|css)$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ],
                    fallback: "style-loader" // used when css not extracted
                }
            ))
        }]
   
    },plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
    ],
} 

