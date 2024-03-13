const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyPlygin = require('copy-webpack-plugin');
const bundleAnalyze = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            chunks: ['index'],
            inject: true,
            filename: 'index.html'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages/courses.html'),
            chunks: ['courses'],
            inject: true,
            filename: 'courses.html'
        }),
        new copyPlygin({
            patterns: [
                {
                    // from: path.resolve(__dirname, 'src/assets/*.png'),//copy all png
                    from: path.resolve(__dirname, 'src/assets/images/*'),//copy all files
                    to: path.resolve(__dirname, 'dist'),
                    context: 'src'
                }
            ]
        }),
         new bundleAnalyze({})
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        static:'./dist'
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /.s[ac]ss$/, //sass or scss
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /.(png|jpeg|gif|svg)$/,
                type: 'asset/resource',
            }
        ]
    }
}