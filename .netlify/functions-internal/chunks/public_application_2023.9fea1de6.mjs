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

const html = "<h2 id=\"about-me\">About Me</h2>\n<p>As a driven third-year ICT Engineering student at TAMK, I have honed my specialization in software development with a passion for web development. My expertise encompasses full stack web development, agile methodology, testing, designing, and bringing new concepts to life.</p>\n<p>Balancing my passion for technology with a focus on personal well-being, I allocate my free time to both physical fitness and staying current with the latest in ICT + entertainment <em>(Games / Music / TV-Shows)</em>.</p>\n<p>I embrace challenges as opportunities to further my skills as a web developer and approach each new task with motivation and a willingness to learn.</p>\n<h2 id=\"music-production\">Music Production</h2>\n<p>In addition to my technology pursuits, I am also a seasoned music producer with over a decade of experience.</p>\n<p>Quality is paramount in my work as a producer, and I take care to double-check every project before release. Through my years in the industry, I have refined my project management skills, honed my creativity, and developed a tenacity for perseverance and commitment. My marketing skills are also well-honed, having taken on most marketing responsibilities myself, as well as collaborating with artists on an international level.</p>\n<p>With a flexible schedule for the upcoming spring semester, I am eager to get to work and demonstrate my capabilities.</p>\n<h3 id=\"contact\">Contact</h3>\n<p>If you are interested in my work, please contact me by joining my <a href=\"https://discord.gg/cxp7EKw53w\">Discord</a> server, use the contact form below, link to my <a href=\"https://www.linkedin.com/in/juha-savikko/\">LinkedIn</a> profile, or send me DM on <a href=\"https://instagram.com/juhamikaell\">Instagram</a>.</p>";

				const frontmatter = {"title":"Public application 2023","createdAt":"2023-03-08T00:00:00.000Z","updatedAt":"2023-03-09T00:00:00.000Z","tags":["resume","application","public"],"preview":"Open job application for 2023","subject":"Web Development"};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/blog/public_application_2023.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## About Me\r\n\r\nAs a driven third-year ICT Engineering student at TAMK, I have honed my specialization in software development with a passion for web development. My expertise encompasses full stack web development, agile methodology, testing, designing, and bringing new concepts to life.\r\n\r\nBalancing my passion for technology with a focus on personal well-being, I allocate my free time to both physical fitness and staying current with the latest in ICT + entertainment _(Games / Music / TV-Shows)_.\r\n\r\nI embrace challenges as opportunities to further my skills as a web developer and approach each new task with motivation and a willingness to learn.\r\n\r\n## Music Production\r\n\r\nIn addition to my technology pursuits, I am also a seasoned music producer with over a decade of experience.\r\n\r\nQuality is paramount in my work as a producer, and I take care to double-check every project before release. Through my years in the industry, I have refined my project management skills, honed my creativity, and developed a tenacity for perseverance and commitment. My marketing skills are also well-honed, having taken on most marketing responsibilities myself, as well as collaborating with artists on an international level.\r\n\r\nWith a flexible schedule for the upcoming spring semester, I am eager to get to work and demonstrate my capabilities.\r\n\r\n### Contact\r\n\r\nIf you are interested in my work, please contact me by joining my [Discord](https://discord.gg/cxp7EKw53w) server, use the contact form below, link to my [LinkedIn](https://www.linkedin.com/in/juha-savikko/) profile, or send me DM on [Instagram](https://instagram.com/juhamikaell).\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"about-me","text":"About Me"},{"depth":2,"slug":"music-production","text":"Music Production"},{"depth":3,"slug":"contact","text":"Contact"}];
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
