import webpackDevServer from 'webpack-dev-server';
import {BuildOptions} from './types/BuildOptions';

export const buildDevServer = ({port}: BuildOptions): webpackDevServer.Configuration => {
    return {
        port,
        historyApiFallback: true,
        open: true,
    }
}