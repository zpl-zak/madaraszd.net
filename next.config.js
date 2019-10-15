const withMDX = require('@next/mdx')()

module.exports = withMDX({
    target: 'serverless',
    pageExtensions: ['js', 'mdx'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    }
})
