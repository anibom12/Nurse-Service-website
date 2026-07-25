const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    SignUp: './src/js/SignUp.js',
    LogIn: './src/js/LogIn.js',
    forgetpassword: './src/js/forgetpassword.js',
    home: './src/js/home.js',
    dashboard: './src/js/dashboard.js'


  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/js'),
  },
  module: {
    rules: [

      ,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "../css/[name].css" })
  ]


};

