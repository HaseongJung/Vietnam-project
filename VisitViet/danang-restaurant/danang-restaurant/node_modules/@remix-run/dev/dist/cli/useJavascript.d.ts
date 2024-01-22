export declare let convert: (projectDir: string) => Promise<void>;
export declare function transpile(tsx: string, options?: {
    cwd?: string;
    filename?: string;
}): string;
