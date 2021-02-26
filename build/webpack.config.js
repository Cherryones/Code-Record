
const path = require('path') // node核心模块
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 默认是production
  // devtool: 'cheap-module-eval-source-map', // 设置了开发模式，会自动使用source-map模式
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist') // 绝对路径，默认文件夹dist
  },
  plugins: [
    new htmlWebpackPlugin({
        template: 'src/index.html',
    })
  ]
}