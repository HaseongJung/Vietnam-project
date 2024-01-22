<div align="center">

# esbuild-plugins-node-modules-polyfill

**Polyfills nodejs builtin modules for the browser.**

[![GitHub](https://img.shields.io/github/license/imranbarbhuiya/esbuild-plugins-node-modules-polyfill)](https://github.com/imranbarbhuiya/esbuild-plugins-node-modules-polyfill/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/esbuild-plugins-node-modules-polyfill?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/esbuild-plugins-node-modules-polyfill)

</div>

## Description

Polyfills nodejs builtin modules and globals for the browser.

## Features

-   Written In Typescript
-   Offers CJS and ESM builds
-   Full TypeScript & JavaScript support
-   Supports `node:` protocol
-   Optionally injects globals

## Install

```bash
npm install --save-dev esbuild-plugins-node-modules-polyfill

```

## Usage

```ts
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { build } from 'esbuild';
build({
	plugins: [nodeModulesPolyfillPlugin()],
});
```

Optionally configure which modules to polyfill:

```ts
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { build } from 'esbuild';
build({
	plugins: [nodeModulesPolyfillPlugin({
		modules: ['crypto'],
	})],
});
```

Optionally provide empty polyfills:

```ts
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { build } from 'esbuild';
build({
	plugins: [nodeModulesPolyfillPlugin({
		modules: {
			fs: 'empty',
			crypto: true,
		}
	})],
});
```

Optionally inject globals when detected:

```ts
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import { build } from 'esbuild';
build({
	plugins: [nodeModulesPolyfillPlugin({
		globals: {
			process: true,
			Buffer: true,
		}
	})],
});
```

## Buy me some doughnuts

If you want to support me by donating, you can do so by using any of the following methods. Thank you very much in advance!

<a href="https://www.buymeacoffee.com/parbez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<a href='https://ko-fi.com/Y8Y1CBIJH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Contributors ✨

Thanks goes to these wonderful people:

<a href="https://github.com/imranbarbhuiya/esbuild-plugins-node-modules-polyfill/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=imranbarbhuiya/esbuild-plugins-node-modules-polyfill" />
</a>
