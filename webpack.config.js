const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nonOptimized = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "non-optimized.js"
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "non-optimized.html"
    })
  ]
};

const withBabel = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "babel.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // OPTIONS COME FROM .babelrc
        // options: {
        //   plugins: ["lodash"],
        //   presets: ["@babel/preset-env"]
        // }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "babel.html"
    })
  ]
};

const withWebpack = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.js"
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "webpack.html"
    })
  ]
};

const withBabelAndWebpack = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "babel-webpack.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["lodash"],
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "babel-webpack.html"
    })
  ]
};

module.exports = [nonOptimized, withBabel, withWebpack, withBabelAndWebpack];
