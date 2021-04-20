
const {resolve}=require('path')
module.exports={
    mode:'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname,'./'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '9999',
        host: 'localhost.jd.com',
        hot: true,
        open: true
    }
}