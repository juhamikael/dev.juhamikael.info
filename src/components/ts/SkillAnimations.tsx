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
    <div className="flex justify-center my-5 ">
      <div className="flex flex-col justify-center w-full text-white">
        <div>
          <div className="font-bold text-xl">{language}</div>
          <div className="text-sm text-yellow-200 font-bold">{splitByCommans(additionalText)}</div>
        </div>
        <div className="flex flex-row space-x-1 my-4 ">{elements}</div>
        <div className="text-sm">
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
