import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../shared/components/Layout";
import { Button } from "@chakra-ui/react";
import sampleLeg from "../../assests/sampleLeg.pdf";
const Legs = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchLegs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/exercise/leg"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLegs();
  }, []);
  return (
    <>
      <Layout>
        <div className='bg-zinc-100'>
          <h1 className='text-[36px] font-bold text-blue-500 block text-center tracking-[5px]'>
            {data.categoryName}
          </h1>
          {/* Main div which will contain all exercises */}
          <div className='flex flex-col w-[80%] mx-auto my-0 gap-10'>
            {data.exercises?.map((item, i) => {
              return (
                <div>
                  <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
                    {i + 1}. {item.name}
                  </h1>
                  <h3 className='text-[18px] font-medium ml-6'>
                    Difficulty:
                    <span className='font-normal text-gray-700 ml-1.5'>
                      {item.difficultyLevel}
                    </span>
                  </h3>
                  {/* Image Div with flex */}
                  <div className='flex justify-center gap-[15rem] items-center my-4'>
                    <img
                      src={item.previewImages[0]}
                      alt='#'
                      className='h-[30%] w-[30%]'
                    />
                    <img
                      src={item.previewImages[1]}
                      alt='#'
                      className='h-[30%] w-[30%]'
                    />
                  </div>
                  <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
                    How to Perform
                  </h1>
                  <div className='list-none flex flex-col gap-7'>
                    {item?.tips?.map((tip, i) => (
                      <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                        <span className='ml-5'>
                          {i + 1}. {tip}
                        </span>
                      </li>
                    ))}

                    <h1 className='text-[28px] font-semibold text-gray-700'>
                      Video Tutorial
                    </h1>
                    <a
                      className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                      href={item.tutorialLink}
                      target='_blank'
                    >
                      <span className='ml-5' />
                      {item.tutorialLink}
                    </a>
                  </div>
                </div>
              );
            })}{" "}
            <hr />
            <div>
              <h1 className='text-[26px] font-semibold text-blue-500 mt-2 mb-2'>
                Here is sample Leg workout!
              </h1>
              <h3 className='text-[18px] font-medium text-gray-700 mb-8'>
                Try this in your next workout session
              </h3>
              <Button colorScheme={"blue"} variant={"solid"} href={sampleLeg}>
                <a href={sampleLeg} download={sampleLeg}>
                  Download here
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Legs;
