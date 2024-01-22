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
const alreadyWarned = {};
function logDeprecationOnce(message, key = message) {
  if (process.env.NODE_ENV !== "production" && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    console.warn(message);
  }
}

export { logDeprecationOnce };
