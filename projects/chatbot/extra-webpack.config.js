module.exports = {
    output: {
      filename: 'chatbot-widget.js',
      library: {
        name: 'chatbotWidget',
        type: 'umd',
      },
    },
    optimization: {
        splitChunks: false,
        runtimeChunk: false,
      },    
  };
  