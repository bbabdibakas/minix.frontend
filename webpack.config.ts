import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {},
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true
    }
};

export default config;