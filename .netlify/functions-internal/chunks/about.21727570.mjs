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

const html = "<p>I like to build cool stuff. I’m interested in web development and desktop applications.</p>\n<p>I’m almost graduated from the TAMK University of Applied Sciences in Tampere, Finland where I’m studying Software Engineering.</p>\n<p>In my free time I like to <a href=\"https://jemi.so/juhamikaelmusic\">produce music</a>, play video games, watch movies and series.</p>";

				const frontmatter = {"title":"About","description":"About me"};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/about/about.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI like to build cool stuff. I'm interested in web development and desktop applications.\r\n\r\nI'm almost graduated from the TAMK University of Applied Sciences in Tampere, Finland where I'm studying Software Engineering.\r\n\r\nIn my free time I like to [produce music](https://jemi.so/juhamikaelmusic), play video games, watch movies and series.\r\n";
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
