import type { Router as RemixRouter } from "@remix-run/router";
import type { AppData } from "./data";
/**
 * @deprecated in favor of the `ErrorResponse` class in React Router.  Please
 * enable the `future.v2_errorBoundary` flag to ease your migration to Remix v2.
 */
export interface ThrownResponse<Status extends number = number, Data = AppData> {
    status: Status;
    statusText: string;
    data: Data;
}
export declare function deserializeErrors(errors: RemixRouter["state"]["errors"]): RemixRouter["state"]["errors"];
