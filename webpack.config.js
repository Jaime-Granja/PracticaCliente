const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // Importamos el plugin

module.exports = {
  mode: 'development',  // Asegúrate de cambiar a 'production' cuando estés listo para producción
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // Usamos este loader para extraer el CSS
          'css-loader',    // Procesa los archivos CSS
          'sass-loader',   // Procesa los archivos SASS
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // El archivo CSS extraído será 'styles.css'
    }),
  ],
};
