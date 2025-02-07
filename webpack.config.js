const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
    return {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    test: /\.js$/i,
                    parallel: true,
                    terserOptions: {
                        mangle: true,
                    },
                }),
            ],
        },
        entry: {
            main: "./src/js/main.js",
        },
        mode: env.prod ? "production" : "development",
        devServer: env.prod
            ? {}
            : {
                  static: {
                      directory: `${__dirname}/src`,
                  },
                  hot: true,
                  port: 8080,
                  open: true,
              },
        output: {
            filename: "[name].bundle.js",
            path: `${__dirname}/dist`,
            clean: true,
        },
        module: {
            rules: [
                // Custom Element Loader
                {
                    test: /\main.js$/,
                    use: [
                        {
                            loader: "webpack-custom-elements",
                            options: {
                                source: "./src/components",
                            },
                        },
                    ],
                },
                // Tailwind Loader
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
            ],
        },
    };
};
