import React from "react";
import bgImg from "./Home-bg.jpg"
const Home = () => {
  return <div>
    {/*header*/}
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        {/*logo*/}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:cursor-pointer">FITTR</h1>
          <ul className="hidden md:flex p-4">
            <li className="p-4 hover:cursor-pointer">Our Process</li>
            <li className="p-4 hover:cursor-pointer">Workout Plans</li>
            <li className="p-4 hover:cursor-pointer">Track Yourself</li>
            <li className="p-4 hover:cursor-pointer">Testimonials</li>
            <li className="p-4 hover:cursor-pointer">Blogs</li>

          </ul>
        </div>
        <div className="hidden md:flex pr-4">
            <button className="px-8 py-3">LogIn</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
        </div>

      </div>

    </div>
    {/*Banner*/}
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 drop-shadow-lg">
          <h1 className="font-bold text-4xl">On a mission to make 50 million people fit</h1>
          <p className="py-5 text-2xl">Your goals. Your customised fitness program. Your habit tracker. Now all in one place. We understand that every person’s journey is different and each person wants to set their own pace for their fitness journey!</p>
          <p className="py-5 text-2xl">Take the first step to unlocking a new you!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Your Fitness Journey </button>
        </div>
        <div>
            <img src = {bgImg} alt="/" />
        </div>

      </div>

    </div>
  </div>;
    };


export default Home;
