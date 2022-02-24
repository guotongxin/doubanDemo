module.exports = {

  devServer: {
    proxy: {
      '/j': {
        target: 'https://movie.douban.com'
      }
    }
  }

}
