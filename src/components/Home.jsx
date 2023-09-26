import React from "react";
import Border from "../components/Border.jsx";

function Home() {
  return (
    <>
      <div className="bg-first w-full h-fit flex flex-col lg:flex-row justify-around">
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
        <div className="lg:w-1/2 lg:h-[48rem] flex p-10 w-full h-auto flex my-auto mx-auto justify-center align-center">
          <img
            className="md:h-[32rem] w-auto my-auto rounded-[128px] h-auto"
            src={require("../images/Picture.jpeg")}
            alt="Kevin's Image"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
