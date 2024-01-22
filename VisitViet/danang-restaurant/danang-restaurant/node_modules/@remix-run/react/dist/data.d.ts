import { UNSAFE_DeferredData as DeferredData } from "@remix-run/router";
/**
 * Data for a route that was returned from a `loader()`.
 *
 * Note: This moves to unknown in ReactRouter and eventually likely in Remix
 */
export type AppData = any;
export declare function isCatchResponse(response: Response): boolean;
export declare function isErrorResponse(response: any): response is Response;
export declare function isNetworkErrorResponse(response: any): response is Response;
export declare function isRedirectResponse(response: Response): boolean;
export declare function isDeferredResponse(response: Response): boolean;
export declare function fetchData(request: Request, routeId: string, retry?: number): Promise<Response | Error>;
export declare function parseDeferredReadableStream(stream: ReadableStream<Uint8Array>): Promise<DeferredData>;
