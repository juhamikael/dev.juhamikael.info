import "../../styles/SkillAnimations.css";

interface IAnimationProps {
  language: string;
  howMany: number;
  additionalText: string[];
}

export const ChangeChar = (string: string, from: string, to: string) => {
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

export const SkillsBar = (dataset: Object) => {
  const skillBars = [];
  const keys = Object.keys(dataset);
  const values = Object.values(dataset);
  for (let i = 0; i < keys.length; i++) {
    // @ts-ignore
    skillBars.push(
      <SkillsAnimations
        language={keys[i]}
        howMany={values[i].level}
        additionalText={values[i].additionalText.join(", ")}
      />
    );
  }
  return <div>{skillBars}</div>;
};

const splitByCommans = (string: string[]) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      newString += string[i];
    } else {
      newString += string[i] + ", ";
    }
  }
  return newString;
};

const SkillsAnimations: React.FC<IAnimationProps> = (props) => {
  const { howMany, language, additionalText } = props;
  const skillLevelArray = ["Basics", "Moderate", "Good", "Excellent"];
  const useColor = [
    "bg-yellow-500",
    "bg-yellow-500/25",
    "bg-yellow-500/10",
    "bg-yellow-500/5",
  ];

  let elements = [];
  for (let i = 0; i < 4; i++) {
    if (i < howMany) {
      elements.push(
        <div
          key={`${language}-${i}`}
          className={`w-1/4 animation-${i + 1} ${useColor[0]}`}
        ></div>
      );
    } else {
      elements.push(
        <div
          key={`${language}-${i}`}
          className={`w-1/4 animation-${i + 1} ${
            useColor[i % useColor.length]
          }`}
        ></div>
      );
    }
  }

  return (
    <div className="my-5 flex justify-center ">
      <div className="flex w-full flex-col justify-center text-white">
        <div>
          <div className="text-lg font-bold">{language}</div>
          <div className="mt-1 text-xs font-bold text-yellow-200">
            {splitByCommans(additionalText)}
          </div>
        </div>
        <div className="my-3 flex flex-row space-x-1 ">{elements}</div>
        <div className="text-xs">
          {howMany === 1 ? (
            <>{skillLevelArray[0]}</>
          ) : (
            <>{skillLevelArray[howMany - 1]} skills</>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsAnimations;
