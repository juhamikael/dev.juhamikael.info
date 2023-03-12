import { useSanityClient, groq ,createImageBuilder} from "astro-sanity";
export const imageBuilder = createImageBuilder(useSanityClient());


export async function getAllProjects() {
  const query = groq`*[_type == "projects"]`;
  const image = groq`image.asset->url`;
  const allPosts = await useSanityClient().fetch(query, { image });
  return allPosts;
}
