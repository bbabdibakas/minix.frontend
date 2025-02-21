import path from 'path';
import {BuildEnv, BuildPath} from './config/build/types/BuildOptions';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'dist'),
    }

    const mode = env.mode || 'development'
    const port = env.port || 3001
    const isDev = mode === 'development'
    const apiUrl = 'http://localhost:8000/api/'

    return buildWebpackConfig({mode, paths, isDev, port, apiUrl})
}