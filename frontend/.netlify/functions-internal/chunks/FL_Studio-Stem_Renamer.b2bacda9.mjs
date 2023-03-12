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

const html = "<p>If you use FL Studio and you like to disk record your mixer tracks i.e. creating stem files in FL Studio, you most likely have spent some times moving the output files into some new directory and renaming the files by deleting from them: project name, date and time.</p>\n<p>With this application, you don’t have to do that manually anymore, because this “Stem Renamer” Desktop application is doing all that for you!</p>";

				const frontmatter = {"title":"FL Studio - Stem Renamer","tags":["C#"],"id":"fl_tudio-stem_renamer","date":"2022-09-01T00:00:00.000Z","liveDemo":"","blog":false,"github":"","download":"https://github.com/juhamikael/fl_tudio-stem_renamer/releases/tag/stem_renamer-v0.2_alpha","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/FL_Studio-Stem_Renamer.md";
				const url = undefined;
				function rawContent() {
					return "\r\nIf you use FL Studio and you like to disk record your mixer tracks i.e. creating stem files in FL Studio, you most likely have spent some times moving the output files into some new directory and renaming the files by deleting from them: project name, date and time.\r\n\r\nWith this application, you don’t have to do that manually anymore, because this “Stem Renamer” Desktop application is doing all that for you!\r\n";
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
