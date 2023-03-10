import SkillsAnimations from "./SkillAnimations";
// Import json
import SkillsData from "../../lib/data/skillsData.json";

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
    <div className="flex justify-center space-y-2 text-white">
      <div className="mx-4 w-full lg:w-1/2">
        <div className="w-full">
          {skillKeys.map((key) => {
            return (
              <div className="ml-5 mr-5 flex flex-col">
                <div className="flex flex-col">
                  <p className="mt-4 text-3xl font-bold tracking-wider">
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
