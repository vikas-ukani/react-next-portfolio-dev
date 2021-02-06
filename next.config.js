const webpack = require('webpack')

const prod = (process.env.NODE_ENV || 'production') === "production";

const assetPrefix = prod ? '/react-next-portfolio-dev' : ''

module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" }
        }
    },
    assetPrefix: assetPrefix,
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.LINK': JSON.stringify(assetPrefix),
            }),
        )

        return config
    },
}
