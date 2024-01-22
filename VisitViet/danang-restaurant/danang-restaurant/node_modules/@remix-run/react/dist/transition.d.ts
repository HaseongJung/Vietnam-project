import type { Location, FormEncType } from "react-router-dom";
export interface Submission {
    action: string;
    method: string;
    formData: FormData;
    encType: string;
    key: string;
}
export interface ActionSubmission extends Submission {
    method: "POST" | "PUT" | "PATCH" | "DELETE";
}
export interface LoaderSubmission extends Submission {
    method: "GET";
}
export type TransitionStates = {
    Idle: {
        state: "idle";
        type: "idle";
        submission: undefined;
        location: undefined;
    };
    SubmittingAction: {
        state: "submitting";
        type: "actionSubmission";
        submission: ActionSubmission;
        location: Location;
    };
    SubmittingLoader: {
        state: "submitting";
        type: "loaderSubmission";
        submission: LoaderSubmission;
        location: Location;
    };
    LoadingLoaderSubmissionRedirect: {
        state: "loading";
        type: "loaderSubmissionRedirect";
        submission: LoaderSubmission;
        location: Location;
    };
    LoadingAction: {
        state: "loading";
        type: "actionReload";
        submission: ActionSubmission;
        location: Location;
    };
    LoadingActionRedirect: {
        state: "loading";
        type: "actionRedirect";
        submission: ActionSubmission;
        location: Location;
    };
    LoadingFetchActionRedirect: {
        state: "loading";
        type: "fetchActionRedirect";
        submission: undefined;
        location: Location;
    };
    LoadingRedirect: {
        state: "loading";
        type: "normalRedirect";
        submission: undefined;
        location: Location;
    };
    Loading: {
        state: "loading";
        type: "normalLoad";
        location: Location;
        submission: undefined;
    };
};
export type Transition = TransitionStates[keyof TransitionStates];
type JsonObject = {
    [Key in string]: JsonValue;
} & {
    [Key in string]?: JsonValue | undefined;
};
type JsonArray = JsonValue[] | readonly JsonValue[];
type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
type FetcherSubmissionDataTypes = {
    formData: FormData;
    json: undefined;
    text: undefined;
} | {
    formData: undefined;
    json: JsonValue;
    text: undefined;
} | {
    formData: undefined;
    json: undefined;
    text: string;
};
export type FetcherSubmission = {
    action: string;
    method: string;
    encType: string;
    key: string;
} & FetcherSubmissionDataTypes;
export type FetcherActionSubmission = FetcherSubmission & {
    method: "POST" | "PUT" | "PATCH" | "DELETE";
};
export type FetcherLoaderSubmission = FetcherSubmission & {
    method: "GET";
};
export type FetcherStates<TData = any> = {
    Idle: {
        state: "idle";
        type: "init";
        formMethod: undefined;
        formAction: undefined;
        formEncType: undefined;
        formData: undefined;
        json: undefined;
        text: undefined;
        submission: undefined;
        data: undefined;
    };
    SubmittingAction: {
        state: "submitting";
        type: "actionSubmission";
        formMethod: FetcherActionSubmission["method"];
        formAction: string;
        formEncType: FormEncType;
        submission: FetcherActionSubmission;
        data: TData | undefined;
    } & FetcherSubmissionDataTypes;
    SubmittingLoader: {
        state: "submitting";
        type: "loaderSubmission";
        formMethod: FetcherLoaderSubmission["method"];
        formAction: string;
        formEncType: FormEncType;
        submission: FetcherLoaderSubmission;
        data: TData | undefined;
    } & FetcherSubmissionDataTypes;
    ReloadingAction: {
        state: "loading";
        type: "actionReload";
        formMethod: FetcherActionSubmission["method"];
        formAction: string;
        formEncType: FormEncType;
        submission: FetcherActionSubmission;
        data: TData;
    } & FetcherSubmissionDataTypes;
    LoadingActionRedirect: {
        state: "loading";
        type: "actionRedirect";
        formMethod: FetcherActionSubmission["method"];
        formAction: string;
        formEncType: FormEncType;
        submission: FetcherActionSubmission;
        data: undefined;
    } & FetcherSubmissionDataTypes;
    Loading: {
        state: "loading";
        type: "normalLoad";
        formMethod: undefined;
        formAction: undefined;
        formData: undefined;
        formEncType: undefined;
        json: undefined;
        text: undefined;
        submission: undefined;
        data: TData | undefined;
    };
    Done: {
        state: "idle";
        type: "done";
        formMethod: undefined;
        formAction: undefined;
        formEncType: undefined;
        formData: undefined;
        json: undefined;
        text: undefined;
        submission: undefined;
        data: TData;
    };
};
export type Fetcher<TData = any> = FetcherStates<TData>[keyof FetcherStates<TData>];
export declare const IDLE_TRANSITION: TransitionStates["Idle"];
export declare const IDLE_FETCHER: FetcherStates["Idle"];
export {};
