import * as adapter from '@astrojs/netlify/netlify-functions.js';
import _renderer3 from '@astrojs/lit/server.js';
import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { i as server_default$1, j as deserializeManifest } from './chunks/astro.4ec0baba.mjs';
import { _ as _page0, d as _page1, e as _page2, f as _page3, h as _page5, i as _page7 } from './chunks/pages/all.8d90efa3.mjs';
import { _ as _page4, a as _page6 } from './chunks/prerender.b991a417.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                                  */import 'preact/jsx-runtime';
import 'svgo';

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml$1 = ({ value, name }) => {
  if (!value)
    return null;
  return h("astro-slot", { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml$1.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml$1;

const slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
function check$1(Component$1, props, children) {
  if (typeof Component$1 !== "function")
    return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = renderToStaticMarkup$1.call(this, Component$1, props, children);
      if (typeof html !== "string") {
        return false;
      }
      return !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName$1(key);
    slots[name] = h(static_html_default, { value, name });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const html = render(
    h(Component, newProps, children != null ? h(static_html_default, { value: children }) : children)
  );
  return {
    attrs,
    html
  };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1
};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/portfolio.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/skills.astro", _page3],["src/pages/about.astro", _page4],["src/pages/music.astro", _page5],["src/pages/blog/[slug].astro", _page6],["src/pages/blog.astro", _page7],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default$1 }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js","jsxImportSource":"preact"}, { ssr: server_default }),Object.assign({"name":"@astrojs/lit","serverEntrypoint":"@astrojs/lit/server.js","clientEntrypoint":"@astrojs/lit/dist/client.js"}, { ssr: _renderer3 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"about/index.html","links":[],"scripts":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css","_astro/index.344303c1.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/portfolio","type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css","_astro/skills.8656b9c3.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/skills","type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/music","type":"page","pattern":"^\\/music\\/?$","segments":[[{"content":"music","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/music.astro","pathname":"/music","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.d197de86.css","_astro/index.3596878c.css","_astro/index.344303c1.css"],"scripts":[{"type":"external","value":"_astro/hoisted.17d4f5ea.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/components/astro/Welcome.astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/index.astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/about.astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/blog.astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/blog/[slug].astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/portfolio.astro","in-tree"],["C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/pages/projects.astro","in-tree"]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/about/about.md?astroContent=true":"chunks/about.3bdd3e0a.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/blog/public_application_2023.md?astroContent=true":"chunks/public_application_2023.467d79c6.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/FSD.md?astroContent=true":"chunks/FSD.6bf9e8fe.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/Internship Trainee.md?astroContent=true":"chunks/Internship Trainee.60a363fb.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FL_Studio-Stem_Renamer.md?astroContent=true":"chunks/FL_Studio-Stem_Renamer.a00162de.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FileOrganizer.md?astroContent=true":"chunks/FileOrganizer.1cfb6868.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Make_new_folder.md?astroContent=true":"chunks/Make_new_folder.9b474155.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Unzipper.md?astroContent=true":"chunks/Unzipper.6ddbdb2c.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/juhamikael-website.md?astroContent=true":"chunks/juhamikael-website.fab67186.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/macrocounter.md?astroContent=true":"chunks/macrocounter.441f3a4d.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/solita.md?astroContent=true":"chunks/solita.8716c2fb.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/spotify-recommends.md?astroContent=true":"chunks/spotify-recommends.d4102487.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/trainingAndQualifications/BachelorOfEngineering.md?astroContent=true":"chunks/BachelorOfEngineering.b7d2a57a.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/about/about.md?astroPropagatedAssets=true":"chunks/about.b95dbd27.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/blog/public_application_2023.md?astroPropagatedAssets=true":"chunks/public_application_2023.06de3ca1.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/FSD.md?astroPropagatedAssets=true":"chunks/FSD.0d274dfb.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/Internship Trainee.md?astroPropagatedAssets=true":"chunks/Internship Trainee.f4106b6c.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FL_Studio-Stem_Renamer.md?astroPropagatedAssets=true":"chunks/FL_Studio-Stem_Renamer.9fdfc3b1.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FileOrganizer.md?astroPropagatedAssets=true":"chunks/FileOrganizer.eea7cc7a.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Make_new_folder.md?astroPropagatedAssets=true":"chunks/Make_new_folder.05dee3d8.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Unzipper.md?astroPropagatedAssets=true":"chunks/Unzipper.687196de.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/juhamikael-website.md?astroPropagatedAssets=true":"chunks/juhamikael-website.0ef3eb41.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/macrocounter.md?astroPropagatedAssets=true":"chunks/macrocounter.cf2009ea.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/solita.md?astroPropagatedAssets=true":"chunks/solita.bdfb9bd7.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/spotify-recommends.md?astroPropagatedAssets=true":"chunks/spotify-recommends.fd83eaa7.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/trainingAndQualifications/BachelorOfEngineering.md?astroPropagatedAssets=true":"chunks/BachelorOfEngineering.0608e86d.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/about/about.md":"chunks/about.21727570.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/blog/public_application_2023.md":"chunks/public_application_2023.9fea1de6.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/FSD.md":"chunks/FSD.6bb70120.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/Internship Trainee.md":"chunks/Internship Trainee.2a0b4988.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FL_Studio-Stem_Renamer.md":"chunks/FL_Studio-Stem_Renamer.b2bacda9.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FileOrganizer.md":"chunks/FileOrganizer.dc708baa.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Make_new_folder.md":"chunks/Make_new_folder.17cfeca3.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Unzipper.md":"chunks/Unzipper.dc5eea44.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/juhamikael-website.md":"chunks/juhamikael-website.290fa8b8.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/macrocounter.md":"chunks/macrocounter.5f4f6d02.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/solita.md":"chunks/solita.46fb0299.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/spotify-recommends.md":"chunks/spotify-recommends.e729af0a.mjs","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/trainingAndQualifications/BachelorOfEngineering.md":"chunks/BachelorOfEngineering.03efea96.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.9825d330.js","@astrojs/lit/dist/client.js":"_astro/client.7b2c67e7.js","@astrojs/preact/client.js":"_astro/client.60350878.js","/astro/hoisted.js?q=0":"_astro/hoisted.17d4f5ea.js","C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.8cf4d2eb.js","@astrojs/react/client.js":"_astro/client.97e10384.js"},"assets":["/_astro/aIMG_4957.95f41ab4.png","/_astro/montserrat-cyrillic-400-normal.7849168d.woff2","/_astro/montserrat-latin-400-normal.ddc148b8.woff2","/_astro/montserrat-cyrillic-ext-400-normal.68ce5e02.woff2","/_astro/montserrat-latin-ext-400-normal.a663bd98.woff2","/_astro/montserrat-all-400-normal.805f620f.woff","/_astro/about.d197de86.css","/_astro/index.344303c1.css","/_astro/skills.8656b9c3.css","/favicon.svg","/_astro/client.60350878.js","/_astro/client.7b2c67e7.js","/_astro/client.97e10384.js","/_astro/client.99084832.js","/_astro/hoisted.17d4f5ea.js","/_astro/index.3596878c.css","/_astro/lit-html.25c79264.js","/_astro/signals.module.8cf4d2eb.js","/_astro/astro_scripts/before-hydration.js.9825d330.js","/about/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
