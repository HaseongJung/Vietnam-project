import type { Plugin } from "esbuild";
import type { Context } from "../context";
/**
 * A plugin to warn users when importing from the deprecated `remix` package
 */
export declare function deprecatedRemixPackagePlugin(ctx: Context): Plugin;
