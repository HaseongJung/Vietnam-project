import type { RemixConfig } from "../config";
export declare function liveReload(config: RemixConfig): Promise<() => Promise<void>>;
