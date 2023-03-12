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

const html = "<p>The application searches for songs of the same style based on the song entered by the user.</p>\n<p>Recommended songs are displayed in the user interface, from which the user can build a new playlist directly into Spotify.</p>\n<p>The app was final assignment project for Full Stack course and therefore is still in development. I will continue that one when I get more skills, so in case you want to use the page, you will need to ask me to add your spotify email to the Spotify API.</p>\n<p>The app security needs to be improved, so it is advisable to create a new Spotify user to test this website.</p>";

				const frontmatter = {"title":"Spotify Recommendations","tags":["React","TypeScript","Spotify API","Firebase","TailwindCSS"],"liveDemo":"https://tamkfullstack2022-spotify.web.app/","date":"2022-12-01T00:00:00.000Z","blog":false,"github":"https://github.com/juhamikael/School-fullstackproject-spotify","download":"","id":"School-fullstackproject-spotify","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/spotify-recommends.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe application searches for songs of the same style based on the song entered by the user.\r\n\r\nRecommended songs are displayed in the user interface, from which the user can build a new playlist directly into Spotify.\r\n\r\nThe app was final assignment project for Full Stack course and therefore is still in development. I will continue that one when I get more skills, so in case you want to use the page, you will need to ask me to add your spotify email to the Spotify API.\r\n\r\nThe app security needs to be improved, so it is advisable to create a new Spotify user to test this website.\r\n";
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
