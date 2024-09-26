const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    historyApiFallback: true, // Esto ayuda a que las rutas en modo history funcionen correctamente
  }
});
