import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10 text-center gap-5 ">
      <div className=" text-2xl font-extrabold md:text-4xl">
        <h1 className="mt-10">Master Full-Stack Web Development</h1>
      </div>
      <div className="text-gray-500 p-6 text-xl font-semibold md:text-2xl md:m">
        Your all in one platform for learning frontend, backend, algorithms,
        system design, and technical interviews with interactive roadmaps and
        challenges.
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
