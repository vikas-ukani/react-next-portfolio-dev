const webpack = require('webpack')

const prod = (process.env.NODE_ENV || "production") === "production";
const link = prod ? "/react-next-portfolio-dev/" : "";
const assetPrefix = prod ? "https://vikas-ukani.github.io/react-next-portfolio-dev/" : "/"

module.exports = {
    images: {
        loader: "imgix",
    },
    exportPathMap: function () {
        return {
            "/": { page: "/" }
        }
    },
    assetPrefix: assetPrefix,
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env.LINK": JSON.stringify(link),
            }),
        )
        return config
    },
}
