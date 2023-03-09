import { k as createVNode, F as Fragment } from './astro.4ec0baba.mjs';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const html = "";

				const frontmatter = {"title":"Bachelor of Engineering - BE, Information Technology","startDate":"2020-08-17T00:00:00.000Z","endDate":"2024-05-31T00:00:00.000Z","institution":"TAMK","websiteLink":"https://opinto-opas-ops.tamk.fi/167/en/50/169887/2412","stillStudying":true};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/trainingAndQualifications/BachelorOfEngineering.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
