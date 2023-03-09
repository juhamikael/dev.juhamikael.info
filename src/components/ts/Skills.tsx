import SkillsAnimations from "./SkillAnimations";

const SkillsData = {
  Technical: {
    TypeScript: { level: 3, additionalText: "" },
    JavaScript: {
      level: 3,
      additionalText: ["Node.js", "React", "Next.js"],
    },
    "Web Developement": {
      level: 3,
      additionalText: ["React", "Astro", "Strapi"],
    },
    Python: {
      level: 3,
      additionalText: ["Pandas", "FastAPI", "Data Analysis", "Scripting"],
    },
    "CSS Frameworks": { level: 3, additionalText: ["Tailwind"] },
    "General DEV skills": {
      level: 2,
      additionalText: ["Git", "Docker", "Vercel", "PlanetScale"],
    },
    "SQL Databases": { level: 2, additionalText: ["MySQL", "PostgreSQL"] },
    Java: { level: 1, additionalText: "" },
    "C++": { level: 1, additionalText: "" },
    "C#": { level: 1, additionalText: ["Made one simple desktop app"] },
  },
  "UI / UX": {
    Figma: {
      level: 2,
      additionalText: ["Web Design", "Wireframing", "Prototyping"],
    },
    "Adobe Photoshop": { level: 2, additionalText: ["Photo Editing"] },
  },
  "Audio & Video": {
    Audio: {
      level: 4,
      additionalText: ["FL Studio", "Ableton", "Audio Compose", "Audio Mixing"],
    },
    "Video editing": {
      level: 2,
      additionalText: [
        "Basic usage of Adobe Premiere",
        "Adobe After Effects",
        "Nothing fancy",
      ],
    },
  },
};

const ChangeChar = (string: string, from: string, to: string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === from) {
      newString += to;
    } else {
      newString += string[i];
    }
  }
  return newString;
};

const SkillsBar = (dataset: Object) => {
  const skillBars = [];
  const keys = Object.keys(dataset);
  const values = Object.values(dataset);
  for (let i = 0; i < keys.length; i++) {
    // @ts-ignore
    skillBars.push(
      <SkillsAnimations
        language={keys[i]}
        howMany={values[i].level}
        additionalText={values[i].additionalText}
      />
    );
  }
  return <div>{skillBars}</div>;
};

const Skills = () => {
  const skillKeys = ["Technical", "UI / UX", "Audio & Video"];
  return (
    <div className="flex space-y-2 justify-center text-white font-kumbh">
      <div className="w-full mx-4 lg:w-1/2">
        <div className="w-full">
          {skillKeys.map((key) => {
            return (
              <div className="flex flex-col ml-5 mr-5">
                <div className="flex flex-col">
                  <p className="mt-4 text-3xl font-bold font-harabara tracking-wider">
                    {ChangeChar(key, "_", " & ")}
                  </p>
                  <div className="flex justify-start bg-transparent">
                    <div className="h-px w-full border-0 bg-gray-500" />
                  </div>
                  <div className="flex flex-col">
                    {/* @ts-ignore */}
                    {SkillsBar(SkillsData[key])}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
