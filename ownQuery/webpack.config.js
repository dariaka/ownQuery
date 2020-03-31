const { resolve } = require("path");

module.exports = {

    mode: "development",

    entry: {
        ownQuery: "./src/main.js"
    },

    output: {
        path: resolve(__dirname + "/../js/"),
        filename: "[name].js",
        library: "ownQuery",
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-transform-runtime", "add-module-exports"],
                        presets: [["@babel/preset-env", { "modules": "umd" }]]
                    }
                }
            }
        ]
    }
}