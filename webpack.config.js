const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015", // Syntax to compile to (see options below for possible values)
      }),
    ],
  },
};
