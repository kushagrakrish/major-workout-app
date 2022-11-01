import React from "react";
import bgImg from "./Home-bg.jpg"
import MacroCal from "./Macro-calculator.jpg"
import BMRCal from "./BMR.jpg"
import RepCal from "./Rep.png"
import FatCal from "./Fat.jpg"


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
    {/*Track Your Progress*/}
    <div className="px-20 w-full h-[900px] bg-zinc-200 justify-center">
      <h1 className="font-bold text-4xl px-7">Track Your Progress</h1>
      <p className="pt-5 text-2xl px-7">Use our free fitness tools & trackers to take your journey to the next level!</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-5 px-4 py-2 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8 pt-0">
          <div className="pb-2">
            <img class="h-60" src = {MacroCal} alt="/" />
          </div>
            <h3 className="font-bold text-xl my-6">Macro Calculator</h3>
            
            <p className="text-gray-600 text-l mb-8">Macronutrients are the nutrients that our body needs in large needs in large quantities including fats, protiens, carbs, water and fibre</p>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 text-center">
              <a href="https://www.calculator.net/macro-calculator.html">Calculate Now</a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8 pt-0">
          <div className="pb-2">
            <img class="h-25" src = {BMRCal} alt="/" />
            </div>
            <h3 className="font-bold text-xl my-6">BMR Calculator</h3>
            <p className="text-gray-600 text-l mb-12">Your basic metabolic rate(BMR) is the number of calories our body needs them to sustain itself if you do absolutely nothing all day.</p>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 text-center">
              <a href="https://www.calculator.net/bmr-calculator.html">Calculate Now</a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8 pt-0">
            <div className="pb-3">
            <img class="h-60" src = {RepCal} alt="/" />
            </div>
            <h3 className="font-bold text-xl my-6">1 Rep Max Calculator</h3>
            <p className="text-gray-600 text-l mb-6">1 Rep Max(1RM) is a maximum weight that can be lifted in a specific excercise in 1 repetition. This determines your strength level for that exercise.</p>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 text-center">
              <a href="https://www.bodybuilding.com/fun/other7.html">Calculate Now</a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8 pt-0">
          <div className="pb-4">
            <img class="h-60" src = {FatCal} alt="/" />
            </div>
            <h3 className="font-bold text-xl my-6">Body Fat % Calculator</h3>
            
            <p className="text-gray-600 text-l mb-12">Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.</p>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 text-center">
              <a href="https://www.calculator.net/body-fat-calculator.html">Calculate Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Footer*/}
    <div className="w-full bg-slate-900 text-gray-300 py-8 px-20">
      <div className="w-full max-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8 px-10">
        <div>
          <h6 className="font-bold uppercase pb-2">Conditions</h6>
          <ul>
            <li className="py-2">Our Terms</li>
            <li className="py-2">Privacy Policy</li>
            <li className="py-2">Cookie Policy</li>
            <li className="py-2">Our Vision</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-2">Company</h6>
          <ul>
            <li className="py-2">About Us</li>
            <li className="py-2">Carrers</li>
            <li className="py-2">Help & Support</li>
            <li className="py-2">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-2">Explore</h6>
          <ul>
            <li className="py-2">Articles</li>
            <li className="py-2">Videos</li>
            <li className="py-2">FAQs</li>
            <li className="py-2">Testimonials</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-2">Tools</h6>
          <ul>
            <li className="py-2">BMR Calculator</li>
            <li className="py-2">Macro Calculator</li>
            <li className="py-2">Rep Max Calculator</li>
            <li className="py-2">Fat % Calculator</li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>;
    };


export default Home;


