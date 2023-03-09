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

const html = "<p>Mainly developed with Astro, TypeScript and React, using Tailwind CSS for styling. The website is hosted on Vercel.</p>\n<p>UI was designed by me in Figma and then implemented in Tailwind CSS / Pure CSS.</p>";

				const frontmatter = {"title":"Juhamikael.info","tags":["Astro","TypeScript","React","TailwindCSS"],"liveDemo":"","id":"juhamikael-website","blog":false,"date":"2023-03-01T00:00:00.000Z","github":"https://www.juhamikael.info/","download":"","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/juhamikael-website.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMainly developed with Astro, TypeScript and React, using Tailwind CSS for styling. The website is hosted on Vercel.\r\n\r\nUI was designed by me in Figma and then implemented in Tailwind CSS / Pure CSS.\r\n";
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
