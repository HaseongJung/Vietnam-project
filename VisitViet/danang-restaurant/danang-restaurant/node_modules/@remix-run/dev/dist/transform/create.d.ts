import type { Plugin } from "./plugin";
type Transform = (code: string, filepath: string) => string;
export declare let create: (plugin: Plugin) => Transform;
export {};
