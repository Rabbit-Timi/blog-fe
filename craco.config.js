module.exports = {
  devServer: {
    port: 3000, // B 端，前端
    proxy: {
      '/api': 'http://119.45.167.11:80',
      // api: 'http://127.0.0.1:80',
      changeOrigin: true,
    },
  },
}
