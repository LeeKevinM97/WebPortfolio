import React from "react";
import Border from "../components/Border.jsx";

function Home() {
  const skillsData = [
    { name: "Python", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "HTML", value: 55 },
    { name: "CSS", value: 60 },
    { name: "Tailwind", value: 60 },
    { name: "Unity", value: 30 },
    { name: "C#", value: 30 },
    { name: "MSSQL", value: 40 },
    { name: "Docker", value: 80 },
    { name: "GitHub", value: 95 },
    { name: "React JS", value: 65 },
    { name: "React Vite", value: 25},
    { name: "ChatGPT", value: 90 },
    { name: "SQL", value: 70 },
    { name: "Kubernetes", value: 60 },
    { name: "Terraform", value: 65 },
    { name: "Ansible", value: 50},
    { name: "PHP", value: 70},
    { name: "Yii", value: 40},
    { name: "Laravel", value: 60},
    { name: "RabbitMQ", value: 45},
    { name: "Greylog", value: 65},
    { name: "Azure Container Apps", value: 80},
    { name: "Azure Cosmos DB", value: 70},
    { name: "AWS S3 Bucket", value: 75},
    { name: "AWS Lambda Functions", value: 70},
    { name: "Wazuh", value: 45},
    { name: "Azure Cognitive Search", value: 65}

  ];

  // Sort by highest skill first
  const sortedSkills = [...skillsData].sort((a, b) => b.value - a.value);

  return (
    <>
      {/* Hero / Opener Section */}
      <div className="bg-first w-full h-fit flex flex-col lg:flex-row justify-around">
        {/* Intro text */}
        <div className="lg:w-1/2 lg:h-[48rem] flex-auto w-full flex items-center h-[12rem]">
          <div className="text-center w-full">
            <p className="text-fourth font-bold text-4xl my-10 roboto px-10">
              Hello, my name is Kevin Maximiliano Lee.
            </p>
            <p className="text-fourth text-2xl scp px-10 md:my-auto mb-10">
              I am a Software Developer / Data Engineer!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 lg:h-[48rem] flex lg:pr-24 p-8 w-full h-auto my-auto mx-auto justify-center align-center">
          <img
            className="w-auto md:my-auto rounded-[128px] h-auto my-10"
            src={require("../images/Picture.jpeg")}
            alt="Kevin's Image"
          />
        </div>
      </div>

      <Border />

      {/* Redesigned Skills Section */}
      <div className="bg-first w-full p-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-center text-fourth scp">
          Skills
        </h2>

        {/* 6 columns at md screen and above */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {sortedSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-3 bg-third rounded shadow-sm"
            >
              {/* Skill name */}
              <h3 className="text-fourth text-sm font-semibold mb-2 truncate">
                {skill.name}
              </h3>

              {/* Progress bar wrapper */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-second rounded-full transition-all duration-300"
                  style={{ width: `${skill.value}%` }}
                />
              </div>

              {/* Percentage */}
              <p className="text-fourth text-xs mt-1">{skill.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
