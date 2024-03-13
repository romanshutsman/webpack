const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].bundle.js',
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
            filename: 'pages/courses.html'
        })
    ],
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