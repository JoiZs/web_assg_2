require("dotenv/config");
const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: ["@babel/polyfill", "./src/index.js"],
  mode: process.env.NODE_ENV,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  externals: [webpackNodeExternals()],
};

// module.exports = {
//   target: "node",
//   entry: "./src/index.js",
//   mode: process.env.NODE_ENV,
//   output: {
//     filename: "out.js",
//     path: path.resolve(__dirname, "dist/"),
//     clean: true,
//     // assetModuleFilename: "images/[name][ext][query]",
//   },
//   externals: [webpackNodeExternals()],

//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.(js)?$/,
//   //       exclude: /node_modules/,
//   //       use: {
//   //         loader: "babel-loader",
//   //         options: {
//   //           presets: [
//   //             [
//   //               "@babel/preset-env",
//   //               {
//   //                 targets: {
//   //                   browsers: ["last 2 versions"],
//   //                 },
//   //                 modules: process.browser ? false : "commonjs",
//   //               },
//   //             ],
//   //           ],
//   //         },
//   //       },
//   //     },
//   //     {
//   //       test: /\.(jpg|png)$/i,
//   //       type: "asset/resource",
//   //     },
//   //   ],
//   // },
// };
