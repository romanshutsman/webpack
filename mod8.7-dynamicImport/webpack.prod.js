const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const purgeCss = require("purgecss-webpack-plugin");
const glob = require("glob");

const purgePath = {
    src: path.join(__dirname, 'src')
}
const {merge} = require("webpack-merge");
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCss.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/images/*"),
                    to: path.resolve(__dirname, "dist"),
                    context: "src",
                },
            ],
        }),
        new miniCss(),
        new purgeCss({
            paths: glob.sync(`${purgePath.src}/**/*`, {nodir: true})
        })
    ],
});
