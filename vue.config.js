const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 1024,
    proxy: "http://localhost:8080/",
  },
  crossorigin: "anonymous",
});
