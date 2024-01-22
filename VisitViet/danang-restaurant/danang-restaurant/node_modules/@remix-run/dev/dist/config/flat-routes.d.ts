import type { RouteManifest } from "./routes";
export declare function flatRoutes(appDirectory: string, ignoredFilePatterns?: string[], prefix?: string): RouteManifest;
export declare function flatRoutesUniversal(appDirectory: string, routes: string[], prefix?: string): RouteManifest;
export declare function getRouteSegments(routeId: string): [string[], string[]];
export declare function createRoutePath(routeSegments: string[], rawRouteSegments: string[], isIndex?: boolean): string | undefined;
export declare function getRoutePathConflictErrorMessage(pathname: string, routes: string[]): string;
export declare function getRouteIdConflictErrorMessage(routeId: string, files: string[]): string;
