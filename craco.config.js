module.exports = {
  devServer: {
    port: 3000, // B 端，前端
    proxy: {
      '/api': 'http://119.45.167.11:8888',
      // '/api': 'http://192.168.31.135:8888',
      // changeOrigin: true,
    },
  },
}
