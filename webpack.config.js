
module.exports = {
    entry: __dirname + "./app/index.js",
    module: {
        loaders: [
            { test: "/\.js$ }", exclude: "./node_modules", loader: "babel-loader" }

        ]
    },
    output: {
        filename: "main.js",
        path: __dirname + "./build"
    }
};