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

const html = "<p>This project is a python script which unzips all .zip &#x26; .rar files in a user input folder.</p>";

				const frontmatter = {"title":"Unzipper","tags":["Python"],"liveDemo":"","date":"2021-11-01T00:00:00.000Z","blog":false,"github":"https://github.com/juhamikael/unzipper","id":"unzipper","download":"","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Unzipper.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis project is a python script which unzips all .zip & .rar files in a user input folder.\r\n";
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
