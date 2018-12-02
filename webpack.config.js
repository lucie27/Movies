const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入 在内存中自动生成 index 页面的插件

//创建一个插件的实例对象
const  htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename:'index.html'//生成的内存中首页的名称
})



module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/} ,
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },

        ]

}}