import React from "react";
import Layout from "../../shared/components/Layout";
import bgImg from "./Home-bg.jpg";
const Home = () => {
  return (
    <>
      <Layout>
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 drop-shadow-lg'>
              <h1 className='font-bold text-4xl'>
                On a mission to make 50 million people fit
              </h1>
              <p className='py-5 text-2xl'>
                Your goals. Your customised fitness program. Your habit tracker.
                Now all in one place. We understand that every persons journey
                is different and each person wants to set their own pace for
                their fitness journey!
              </p>
              <p className='py-5 text-2xl'>
                Take the first step to unlocking a new you!
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Start Your Fitness Journey{" "}
              </button>
            </div>
            <div>
              <img src={bgImg} alt='/' />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
