const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        allowedHosts: 'all',
        port: 8080,
        client: {
            webSocketURL: {
                port: 443,
                protocol: 'wss',
            },
        },
    },
});
