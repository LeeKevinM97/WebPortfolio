import React from "react";
import Border from "../components/Border.jsx";

function Home() {
  return (
    <>
      <div className="bg-first w-full h-fit flex flex-col lg:flex-row justify-around">
        <div className="lg:w-1/2 lg:h-[48rem] flex-auto w-full flex items-center h-[12rem]">
          <div className="text-center w-full">
            <p className="text-fourth font-bold text-4xl my-10">
              Hello, my name is Kevin Maximiliano Lee.
            </p>
            <p className="text-fourth text-2xl">
              I am a Full-Stack Developer / Data Engineer!
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-[48rem] flex p-10 w-full h-auto">
          <img
            className="h-fill w-auto my-auto rounded-[128px]"
            src={require("../images/Picture.jpeg")}
            alt="Kevin's Image"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
