export type BuildMode = 'development' | 'production'

export interface BuildPath {
    entry: string
    html: string
    output: string
    src: string
}

export interface BuildOptions {
    paths: BuildPath
    mode: BuildMode
    isDev: boolean
    port: number
    apiUrl: string
}

export interface BuildEnv {
    mode?: BuildMode
    port: number
}