const htmlWriter = require("./utils/HtmlWriter");

/** @type {import('webpack').Config} */
module.exports = (env) => {
    return {
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
