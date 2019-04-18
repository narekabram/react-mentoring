const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = ({mode}) => {
    if (mode !== 'production') {
        mode = 'development';
    }
    console.log(`*********************   mode is: ${mode}   *********************`);

    return {
        mode,
        entry: "./client/src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js"
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }]
        },
        resolve: { extensions: [".jsx", ".js"] },
        devServer: {
            contentBase: path.join(__dirname, "./client/public/"),
            port: 3000,
            publicPath: "http://localhost:3000",
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebPackPlugin({
                hash: true,
                filename: "index.html",  //target html
                template: "./client/public/index.html" //source html
            }),
        ]
    }
};