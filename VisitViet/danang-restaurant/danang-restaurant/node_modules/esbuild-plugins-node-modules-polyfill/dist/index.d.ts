import { Plugin } from 'esbuild';

declare const escapeRegex: (str: string) => string;
declare const commonJsTemplate: ({ importPath }: {
    importPath: string;
}) => string;
declare const normalizeNodeBuiltinPath: (path: string) => string;

interface NodePolyfillsOptions {
    globals?: {
        Buffer?: boolean;
        process?: boolean;
    };
    modules?: string[] | Record<string, boolean | 'empty'>;
    name?: string;
    namespace?: string;
}
declare const nodeModulesPolyfillPlugin: (options?: NodePolyfillsOptions) => Plugin;

export { NodePolyfillsOptions, commonJsTemplate, escapeRegex, nodeModulesPolyfillPlugin, normalizeNodeBuiltinPath };
