module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    runtimeCompiler: true,
    devServer: {
        port: 8001
    }
}