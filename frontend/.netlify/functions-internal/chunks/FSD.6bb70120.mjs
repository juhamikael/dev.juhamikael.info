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

const html = "<p>I was assigned to maintain Python application that was used to efficiently update the XML description files of FSD data in bulk.</p>\n<p>As part of my responsibilities, I also developed and implemented various utility software tools to troubleshoot and resolve any challenges that arose during the course of the project. The position entailed a high degree of accountability and attention to detail, as the integrity and accuracy of the data was of critical importance. The role required a steady and diligent approach to ensure all updates were executed correctly and thoroughly.</p>";

				const frontmatter = {"jobTitle":"Software Developer","codeStackTags":["Python","XML","Jenkins","Sonarqube","GIT"],"company":"Finnish Social Science Data Archive","date":"June 2022 - December 2022","startDate":"2022-06-01","website":"https://www.fsd.tuni.fi/en/","projectDemo":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/portfolio/FSD.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI was assigned to maintain Python application that was used to efficiently update the XML description files of FSD data in bulk.\r\n\r\nAs part of my responsibilities, I also developed and implemented various utility software tools to troubleshoot and resolve any challenges that arose during the course of the project. The position entailed a high degree of accountability and attention to detail, as the integrity and accuracy of the data was of critical importance. The role required a steady and diligent approach to ensure all updates were executed correctly and thoroughly.\r\n";
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
