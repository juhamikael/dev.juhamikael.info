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

const html = "<p>This is the pre-assignment for Solita Dev Academy Finland 2023. Backend was free of choice, so I picked T3 Stack which is a great Template/starting point for full stack application.</p>\n<p>The frontend part was free to choose. The important part was to give good instructions on how to build and run the project, which is done so. I validated data with Python and created a database with MySQL.</p>\n<p>In case the demo is bugged or anything else, you can follow the installation guide on GitHub to get it running locally. There is also a video of the application in action.</p>";

				const frontmatter = {"title":"Solita - Dev Academy 2023 Exercise","tags":["Python","MySQL","NextJS","Prisma","tRPC","TypeScript","TailwindCSS","Vercel"],"liveDemo":"","id":"dev-academy-2023-exercise","blog":true,"date":"2023-02-01T00:00:00.000Z","github":"https://github.com/juhamikael/dev-academy-2023-exercise","download":"","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/solita.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is the pre-assignment for Solita Dev Academy Finland 2023. Backend was free of choice, so I picked T3 Stack which is a great Template/starting point for full stack application.\r\n\r\nThe frontend part was free to choose. The important part was to give good instructions on how to build and run the project, which is done so. I validated data with Python and created a database with MySQL.\r\n\r\nIn case the demo is bugged or anything else, you can follow the installation guide on GitHub to get it running locally. There is also a video of the application in action.\r\n";
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
