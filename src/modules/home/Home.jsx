import React from "react";
import bgImg from "./Home-bg.jpg";
import MacroCal from "./Macro-calculator.jpg";
import BMRCal from "./BMR.jpg";
import RepCal from "./Rep.png";
import FatCal from "./Fat.jpg";
import Layout from "../../shared/components/Layout";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Main Div */}
        <div className='bg-zinc-100'>
          <div className='w-[80%] m-auto py-12'>
            {/*Banner*/}
            <div className='flex items-start justify-between gap-8 md:flex-col-reverse md:items-center'>
              <div>
                <h1 className='font-bold text-3xl'>
                  On a mission to make 50 million people fit
                </h1>
                <p className='py-4 text-xl'>
                  Your goals. Your customised fitness program. Your habit
                  tracker. Now all in one place. We understand that every
                  person’s journey is different and each person wants to set
                  their own pace for their fitness journey!
                </p>
                <p className='py-2 text-xl font-semibold'>
                  Take the first step to unlocking a new you!
                </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6'>
                  Start Your Fitness Journey{" "}
                </button>
              </div>
              <img src={bgImg} className='rounded-sm' alt='/' />
            </div>
            {/*Track Your Progress*/}
            <hr />
            <div className='py-12'>
              <h1 className='font-bold text-3xl '>Track Your Progress</h1>
              <p className='pt-5 text-xl '>
                Use our free fitness tools & trackers to take your journey to
                the next level!
              </p>
              <div className='flex items-center justify-between gap-16 mt-12 md:flex-col xs:flex-col'>
                <div className='bg-white rounded-xl shadow-2xl '>
                  <div className='p-8 pt-0 flex flex-col justify-between items-center gap-8'>
                    <img src={MacroCal} alt='/' className='mt-2' />
                    <h3 className='font-bold text-xl'>Macro Calculator</h3>
                    <p className='text-gray-700 w-[300px] '>
                      Macronutrients are the nutrients that our body needs in
                      large needs in large quantities including fats, protiens,
                      carbs, water and fibre
                    </p>
                    <div className='text-center'>
                      <Button
                        colorScheme={"blue"}
                        variant={"solid"}
                        width='300px'
                      >
                        <a
                          target='_blank'
                          href='https://www.calculator.net/macro-calculator.html'
                        >
                          Calculate Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 pt-0 flex flex-col justify-between items-center gap-8'>
                    {/* <div className=' w-fit'> */}
                    <img src={BMRCal} alt='/' />
                    {/* </div> */}
                    <h3 className='font-bold text-xl'>BMR Calculator</h3>
                    <p className='text-gray-700 w-[300px] '>
                      Your basic metabolic rate(BMR) is the number of calories
                      our body needs them to sustain itself if you do absolutely
                      nothing all day.
                    </p>
                    <div className='text-center'>
                      <Button
                        colorScheme={"blue"}
                        variant={"solid"}
                        width='300px'
                      >
                        <a
                          target='_blank'
                          href='https://www.calculator.net/bmr-calculator.html'
                        >
                          Calculate Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 pt-0 flex flex-col justify-between items-center gap-8'>
                    {/* <div className=' w-[50%] w-fit'> */}
                    <img src={RepCal} alt='/' />
                    {/* </div> */}
                    <h3 className='font-bold text-xl'>1 Rep Max Calculator</h3>
                    <p className='text-gray-700 w-[300px] '>
                      1 Rep Max(1RM) is a maximum weight that can be lifted in a
                      specific excercise in 1 repetition. This determines your
                      strength level for that exercise.
                    </p>
                    <div className='text-center'>
                      <Button
                        colorScheme={"blue"}
                        variant={"solid"}
                        width='300px'
                      >
                        <a
                          target='_blank'
                          href='https://www.bodybuilding.com/fun/other7.html'
                        >
                          Calculate Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 pt-0 flex flex-col justify-between items-center gap-8'>
                    {/* <div className=' w-[50%] w-fit'> */}
                    <img src={FatCal} alt='/' className='mt-5' />
                    {/* </div> */}
                    <h3 className='font-bold text-xl'>Body Fat % Calculator</h3>
                    <p className='text-gray-700 w-[300px] '>
                      Body fat percentage is a key indicator of good health. A
                      high body fat % might put you at a greater risk of
                      lifestyle diseases.
                    </p>
                    <div className='text-center'>
                      <Button
                        colorScheme={"blue"}
                        variant={"solid"}
                        width='300px'
                      >
                        <a
                          target='_blank'
                          href='https://www.calculator.net/body-fat-calculator.html'
                        >
                          Calculate Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
