/**
 * @remix-run/react v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
// Thanks https://github.com/sindresorhus/type-fest!

// Fetchers need a separate set of types to reflect the json/text submission
// support in react-router.  We do not carry that into useTransition since
// it's deprecated
// TODO: keep data around on resubmission?
const IDLE_TRANSITION = {
  state: "idle",
  submission: undefined,
  location: undefined,
  type: "idle"
};
const IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined,
  submission: undefined
};

export { IDLE_FETCHER, IDLE_TRANSITION };
