module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '0w0在线VIP视频解析'
        return args
      })
  },
  publicPath: './',
  outputDir: 'docs'
}