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

const html = "<p>This is a full-stack web application called ‘Macro Counter’. Users input basic information such as their weight, height, age, and gender, then calculate their daily calorie intake. Users can also add new foods to the database from the user interface and log their meals in a diary.</p>\n<p>The API / Backend then calculate the total calories, protein, carbs, and fat for each meal and substract it from daily intake.</p>\n<p>Additionally, the app calculates the user’s Basal Metabolic Rate (BMR), Body Mass Index (BMI), and macro nutrient split (Protein, Carbs, Fat).</p>\n<p>The app is currently in development and not yet available online. However, if you’re interested in using it, you can follow the installation guide on GitHub.</p>";

				const frontmatter = {"title":"Macro Counter","tags":["React.js","Python","FastAPI","PostgreSQL","TailwindCSS"],"liveDemo":"macro-counter-react-fastapi-postgre","id":"macro-counter-react-fastapi-postgre","blog":false,"date":"2022-04-01T00:00:00.000Z","github":"https://github.com/juhamikael/macro-counter-react-fastapi-postgre","download":"","image":""};
				const file = "C:/Users/Juha/Documents/GitHub/juhamikael-website-astro/src/content/projects/macrocounter.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is a full-stack web application called 'Macro Counter'. Users input basic information such as their weight, height, age, and gender, then calculate their daily calorie intake. Users can also add new foods to the database from the user interface and log their meals in a diary.\r\n\r\nThe API / Backend then calculate the total calories, protein, carbs, and fat for each meal and substract it from daily intake.\r\n\r\nAdditionally, the app calculates the user's Basal Metabolic Rate (BMR), Body Mass Index (BMI), and macro nutrient split (Protein, Carbs, Fat).\r\n\r\nThe app is currently in development and not yet available online. However, if you're interested in using it, you can follow the installation guide on GitHub.\r\n";
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
