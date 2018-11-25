const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
const dev = Boolean(process.env.WEBPACK_SERVE);
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    mode: dev ? 'development' : 'production',
    performance: {

        hints:false

    },
    resolve: {
      alias:{
          page: path.resolve(__dirname,'src/page'),
          component:path.resolve(__dirname,'src/component'),
      }
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            // 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }


        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
        new ExtractTextPlugin("css/[name].css")
    ],
    devServer: {
        port: 8083,
        historyApiFallback:{
            index: '/dist/index.html'
        }
    }
};