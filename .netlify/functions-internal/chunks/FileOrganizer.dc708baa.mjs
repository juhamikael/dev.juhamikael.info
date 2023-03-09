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

const html = "<p>When using a computer, we tend to download files to a single location, such as “./Downloads”. This folder quickly becomes cluttered and challenging to navigate, making it difficult to find the files we need. As the folder grows, it becomes increasingly time-consuming and tedious to organize the files manually.</p>\n<p>The solution for that is this File Organizer application helps organize files by moving them to folders based on their file extensions. To use the application, you need to have a configuration file named “file_map-config.json” that maps file extensions to folder names.</p>";

				const frontmatter = {"title":"File Organizer - Tauri.js","tags":["Rust","React","Typescript","TailwindCSS"],"id":"FileOrganizer","liveDemo":"","date":"2023-03-01T00:00:00.000Z","blog":false,"github":"https://github.com/juhamikael/FileOrganizer","download":"https://github.com/juhamikael/FileOrganizer/releases/tag/beta","image":"https://user-images.githubusercontent.com/83360104/223297027-76848ed3-4fa4-49ba-ab1d-8a9f5b866bc4.jpg"};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FileOrganizer.md";
				const url = undefined;
				function rawContent() {
					return "\r\nWhen using a computer, we tend to download files to a single location, such as \"./Downloads\". This folder quickly becomes cluttered and challenging to navigate, making it difficult to find the files we need. As the folder grows, it becomes increasingly time-consuming and tedious to organize the files manually.\r\n\r\nThe solution for that is this File Organizer application helps organize files by moving them to folders based on their file extensions. To use the application, you need to have a configuration file named \"file_map-config.json\" that maps file extensions to folder names.\r\n";
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
