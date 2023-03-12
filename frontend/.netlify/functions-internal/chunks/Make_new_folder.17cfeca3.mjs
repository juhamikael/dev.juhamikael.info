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

const html = "<p>This python script helps organize files by moving them to folders based on their file extensions. To use the application, you need to edit “file_types” dict in main.py.</p>\n<p>Check out my File Organizer project for GUI version of this script.</p>\n<p>More info on GitHub.</p>";

				const frontmatter = {"title":"Make new folder","tags":["Python"],"liveDemo":"","id":"make_new_folder","date":"2021-11-01T00:00:00.000Z","blog":false,"github":"https://github.com/juhamikael/make_new_folder","download":"","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/Make_new_folder.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis python script helps organize files by moving them to folders based on their file extensions. To use the application, you need to edit \"file_types\" dict in main.py.\r\n\r\nCheck out my File Organizer project for GUI version of this script.\r\n\r\nMore info on GitHub.\r\n";
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
