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

const html = "<p>In this task, I had a teamwork project and a free form coding project.</p>\n<p>In the team project, our team designed and developed two different virtual simulated environments for the health personnel’s / students, where they can practice concentration and pressure tolerance in rescue situations.</p>\n<p>In the coding project, I implemented a web-based weather application. As for programming languages I used Javascript / HTML / CSS and the weather data for the application was fetched from the OpenWeatherMap API. The application runs on the Netlify server.</p>";

				const frontmatter = {"jobTitle":"Internship Trainee","company":"Tuni","codeStackTags":["Javascript","Python","Unity","Javascript"],"date":"May 2021 - June 2021","startDate":"2021-05-01","website":"https://www.tuni.fi/fi","projectDemo":"https://zealous-ritchie-88dfbd.netlify.app/"};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/Internship Trainee.md";
				const url = undefined;
				function rawContent() {
					return "\r\nIn this task, I had a teamwork project and a free form coding project.\r\n\r\nIn the team project, our team designed and developed two different virtual simulated environments for the health personnel's / students, where they can practice concentration and pressure tolerance in rescue situations.\r\n\r\nIn the coding project, I implemented a web-based weather application. As for programming languages I used Javascript / HTML / CSS and the weather data for the application was fetched from the OpenWeatherMap API. The application runs on the Netlify server.\r\n";
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
