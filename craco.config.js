module.exports = {
  devServer: {
    port: 3000, // B 端，前端
    proxy: {
      // '/api': 'http://192.168.31.135:80',
      api: 'http://127.0.0.1:80',
      // changeOrigin: true,
    },
  },
}
