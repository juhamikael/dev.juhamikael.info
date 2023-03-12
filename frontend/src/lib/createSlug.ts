export default function createSlug(title: string) {
  const charMap: { [key: string]: string } = {
    ä: "a",
    ö: "o",
    å: "o",
  };
  const stringToReturn = title
    .replace(/[äöå]/g, (match) => charMap[match])
    .replace(/[\s-]+/g, "_")
    .toLowerCase();

  return stringToReturn;
}
