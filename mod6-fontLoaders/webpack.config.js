const path = require("path");
module.exports = {
    entry: "/src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        // assetModuleFilename: 'images/[hash][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    }
                ],
                // use: [
                //     'style-loader',
                //     'css-loader',
                // ]
            },
            {
                test: /.s[ac]ss$/, //sass or scss
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    },
                    {
                        loader: "sass-loader"
                    },
                ],
            },
            {
                test: /.(png|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]'
                }
            },
            {
                test: /.(ttf)$/,
                type: 'asset',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            }
        ]
    }
}