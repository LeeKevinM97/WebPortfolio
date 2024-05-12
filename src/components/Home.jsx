import React from "react";
import Border from "../components/Border.jsx";

function Home() {
  const skillsData = [
    { name: "Python", value: 95 },
    { name: "TypeScript", value: 85 },
    { name: "HTML", value: 60 },
    { name: "CSS", value: 60 },
    { name: "Tailwind", value: 65 },
    { name: "Unity", value: 50 },
    { name: "C#", value: 50 },
    { name: "AWS", value: 75 },
    { name: "MSSQL", value: 40 },
    { name: "Docker", value: 80 },
    { name: "GitHub", value: 100 },
    { name: "React JS", value: 65 },
    { name: "ChatGPT", value: 90 },
    { name: "SQL", value: 70 },
    { name: "Kubernetes", value: 60 },
    { name: "Azure", value: 85 },
    { name: "Terraform", value: 65 },
  ];

  const sortedSkills = [...skillsData].sort((a, b) => b.value - a.value);

  const computeRowLengths = (skillsCount) => {
    const half = Math.floor(skillsCount / 2);
    return skillsCount % 2 === 0 ? [half, half] : [half + 1, half];
  };

  const [firstRowLength, secondRowLength] = computeRowLengths(
    sortedSkills.length
  );
  const firstRowSkills = sortedSkills.slice(0, firstRowLength);
  const secondRowSkills = sortedSkills.slice(
    firstRowLength,
    firstRowLength + secondRowLength
  );

  return (
    <>
      <div className="bg-first w-full h-fit flex flex-col lg:flex-row justify-around">
        {/* Portion for Opener and Image */}
        <div className="lg:w-1/2 lg:h-[48rem] flex-auto w-full flex items-center h-[12rem]">
          <div className="text-center w-full">
            <p className="text-fourth font-bold text-4xl my-10 roboto px-10">
              Hello, my name is Kevin Maximiliano Lee.
            </p>
            <p className="text-fourth text-2xl scp px-10 md:my-auto mb-10">
              I am a Full-Stack Developer / Data Engineer!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-[48rem] flex lg:pr-24 p-8 w-full h-auto flex my-auto mx-auto justify-center align-center">
          <img
            className="w-auto md:my-auto rounded-[128px] h-auto my-10"
            src={require("../images/Picture.jpeg")}
            alt="Kevin's Image"
          ></img>
        </div>
      </div>

      <Border />

      {/* Skills Portion */}
      <div className="bg-first w-full p-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-10 text-center text-fourth scp">
          Skills
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-around gap-2 sm:gap-4">
            <div className="w-full flex justify-around">
              {firstRowSkills.map((skill) => (
                <div key={skill.name} className="text-center w-20 sm:w-24 md:w-28 mb-4">
                  <div className="h-[96px] w-8 sm:w-10 md:w-12 bg-third relative mx-auto rounded">
                    <div className="absolute bottom-0 bg-second transition-all duration-500 ease-in-out w-full rounded"
                      style={{ height: `${Math.min(skill.value, 100) * 0.96}px` }}></div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-center truncate text-fourth scp">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-around">
              {secondRowSkills.map((skill) => (
                <div key={skill.name} className="text-center w-20 sm:w-24 md:w-28 mb-4">
                  <div className="h-[96px] w-8 sm:w-10 md:w-12 bg-third relative mx-auto rounded">
                    <div className="absolute bottom-0 bg-second transition-all duration-500 ease-in-out w-full rounded"
                      style={{ height: `${Math.min(skill.value, 100) * 0.96}px` }}></div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-center truncate text-fourth scp">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
