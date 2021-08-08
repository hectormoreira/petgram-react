const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebPackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebPackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐶",
      description:
        "Con Petgram puedes encontrar fotos de animales domésticos fácilmente",
      background_color: "#fff",
      theme_color: "#1cacae",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebPackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp(
            "https://petgram-server-hm-hectormoreira.vercel.app"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
