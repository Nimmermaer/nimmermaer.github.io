const path = require('path'),
    dist = 'dist',
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
    workboxPlugin = require('workbox-webpack-plugin'),
    { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        app: './src/app.js',
    },
    resolve: {
        modules: ['node_modules', 'src'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Required
            inject: 'body',
            template: 'src/template/index.html',
            appMountId: 'app',
            appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
            headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
            bodyHtmlSnippet: '<custom-element></custom-element>',
            baseHref: 'https://nimmermaer.github.io',
            devServer: 'http://localhost:63342',
            googleAnalytics: {
                trackingId: 'UA-XXXX-XX',
                pageViewOnLoad: true
            },
            meta: [
                {
                    name: 'description',
                    content: 'A better default template for html-webpack-plugin.'
                }
            ],
            mobile: true,
            lang: 'de-DE',
            links: [
                'https://fonts.googleapis.com/css?family=Roboto',
                {
                    href: '/giraffe.png',
                    rel: 'apple-touch-icon',
                    sizes: '180x180'
                }
            ],
            inlineManifestWebpackName: 'manifest',
            title: 'Wolfish giraffe'

        }),
        new VueLoaderPlugin(),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {import: true}}],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
};