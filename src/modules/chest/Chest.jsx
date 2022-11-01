import React from "react";
import Layout from "../../shared/components/Layout";
import firstImg from "../../assests/1.png";
import secondImg from "../../assests/12.png";
import { Button } from "@chakra-ui/react";

const Chest = () => {
  return (
    <>
      <Layout>
        <h1 className='text-[36px] font-bold text-blue-500 block text-center tracking-[5px]'>
          Chest Exercises
        </h1>
        {/* Main div which will contain all exercises */}
        <div className='flex flex-col w-[80%] mx-auto my-0 gap-10'>
          <div>
            <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
              1. Barbell Bench Press
            </h1>
            <h3 className='text-[18px] font-medium ml-6'>
              Difficulty:
              <span className='font-normal text-gray-700 ml-1.5'>
                Intermediate
              </span>
            </h3>
            {/* Image Div with flex */}
            <div className='flex justify-between items-center my-4'>
              <img src={firstImg} alt='#' />
              <img src={secondImg} alt='#' />
            </div>
            <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
              How to Perform
            </h1>
            <div className='list-none flex flex-col gap-7'>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>1.</span> Lay flat on the bench with your
                feet on the ground. With straight arms unrack the bar.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>2.</span>Lower the bar to your mid chest
                .
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>3.</span> Raise the bar until you've
                locked your elbows.
              </li>

              <h1 className='text-[28px] font-semibold text-gray-700'>
                Video Tutorial
              </h1>
              <a
                className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                href='https://www.youtube.com/watch?v=gRVjAtPip0Y'
                target='_blank'
              >
                <span className='ml-5' />
                https://www.youtube.com/watch?v=gRVjAtPip0Y
              </a>
            </div>
          </div>

          {/* Exercise two */}
          <div>
            <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
              2. Incline Dumbbell Bench Press
            </h1>
            <h3 className='text-[18px] font-medium ml-6'>
              Difficulty:
              <span className='font-normal text-gray-700 ml-1.5'>Beginner</span>
            </h3>
            {/* Image Div with flex */}
            <div className='flex justify-between items-center my-4'>
              <img src={firstImg} alt='#' />
              <img src={secondImg} alt='#' />
            </div>
            <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
              How to Perform
            </h1>
            <div className='list-none flex flex-col gap-7'>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>1.</span> Raise the bench to a 30 degree
                angle.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>2.</span>Lay on the bench and set your
                feet on the ground. .
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>3.</span> Raise the dumbbells with
                straight arms then slowly lower them to about shoulder width.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>4.</span> Raise them again until your
                arms are locked and at the starting position again
              </li>

              <h1 className='text-[28px] font-semibold text-gray-700'>
                Video Tutorial
              </h1>
              <a
                className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                href='https://www.youtube.com/watch?v=8iPEnn-ltC8'
                target='_blank'
              >
                <span className='ml-5' />
                https://www.youtube.com/watch?v=8iPEnn-ltC8
              </a>
            </div>
          </div>
          {/* Third Exercise */}
          <div>
            <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
              3. Push-ups
            </h1>
            <h3 className='text-[18px] font-medium ml-6'>
              Difficulty:
              <span className='font-normal text-gray-700 ml-1.5'>Beginner</span>
            </h3>
            {/* Image Div with flex */}
            <div className='flex justify-between items-center my-4'>
              <img src={firstImg} alt='#' />
              <img src={secondImg} alt='#' />
            </div>
            <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
              How to Perform
            </h1>
            <div className='list-none flex flex-col gap-7'>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>1.</span> Place your hands firmly on the
                ground, directly under shoulders.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>2.</span>Flatten your back so your entire
                body is straight and slowly lower your body
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>3.</span> Draw shoulder blades back and
                down, keeping elbows tucked close to your body
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>4.</span> Exhale as you push back to the
                starting position.
              </li>

              <h1 className='text-[28px] font-semibold text-gray-700'>
                Video Tutorial
              </h1>
              <a
                className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                href='https://www.youtube.com/watch?v=MO10KOoQx5E'
                target='_blank'
              >
                <span className='ml-5' />
                https://www.youtube.com/watch?v=MO10KOoQx5E
              </a>
            </div>
          </div>
          {/* 4th Exercise */}
          <div>
            <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
              4. Cable Flys
            </h1>
            <h3 className='text-[18px] font-medium ml-6'>
              Difficulty:
              <span className='font-normal text-gray-700 ml-1.5'>Beginner</span>
            </h3>
            {/* Image Div with flex */}
            <div className='flex justify-between items-center my-4'>
              <img src={firstImg} alt='#' />
              <img src={secondImg} alt='#' />
            </div>
            <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
              How to Perform
            </h1>
            <div className='list-none flex flex-col gap-7'>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>1.</span> Use a handle attachment set all
                the way to the bottom of the machine.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>2.</span>Bring both of the handles to
                your chest and make sure you are in the center of the cable
                crossover.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>3.</span> Walk a few steps forward. Then
                press the weight forward. From there, your shoulders should
                horizontally abduct and adduct while your elbows stay in a fixed
                position.
              </li>
              <h1 className='text-[28px] font-semibold text-gray-700'>
                Video Tutorial
              </h1>
              <a
                className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                href='https://www.youtube.com/watch?v=Iwe6AmxVf7o'
                target='_blank'
              >
                <span className='ml-5' />
                https://www.youtube.com/watch?v=Iwe6AmxVf7o
              </a>
            </div>
          </div>
          {/* 5th Exercise */}
          <div>
            <h1 className='text-[30px] font-semibold text-blue-500 mt-2 mb-2 tracking-[2px]'>
              5.Incline Dumbell Flys
            </h1>
            <h3 className='text-[18px] font-medium ml-6'>
              Difficulty:
              <span className='font-normal text-gray-700 ml-1.5'>
                Intermediate
              </span>
            </h3>
            {/* Image Div with flex */}
            <div className='flex justify-between items-center my-4'>
              <img src={firstImg} alt='#' />
              <img src={secondImg} alt='#' />
            </div>
            <h1 className='text-[28px] font-semibold text-gray-700 mb-3'>
              How to Perform
            </h1>
            <div className='list-none flex flex-col gap-7'>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>1.</span> Lay flat on the bench and place
                your feet on the ground.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>2.</span>Begin the exercise with the
                dumbbells held together above your chest, elbows slightly bent.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>3.</span> Simultaneously lower the
                weights to either side.
              </li>
              <li className='bg-blue-100 text-[20px] text-gray-500 font-medium h-9 '>
                <span className='ml-5'>4.</span> Pause when the weights are
                parallel to the bench, then raise your arms to the starting
                position.
              </li>

              <h1 className='text-[28px] font-semibold text-gray-700'>
                Video Tutorial
              </h1>
              <a
                className='bg-blue-100 text-[20px] text-blue-500 font-medium h-9 hover:text-gray-600 hover:ease-out duration-500 hover:transition  '
                href='https://www.youtube.com/watch?v=bDaIL_zKbGs'
                target='_blank'
              >
                <span className='ml-5' />
                https://www.youtube.com/watch?v=bDaIL_zKbGs
              </a>
            </div>
          </div>
          <div>
            <hr />
            <h1 className='text-[26px] font-semibold text-blue-500 mt-2 mb-2'>
              Here is sample Chest workout!
            </h1>
            <h3 className='text-[18px] font-medium text-gray-700 mb-8'>
              Try this in your next workout session
            </h3>
            <Button colorScheme={"blue"} variant={"solid"}>
              Download here
            </Button>
          </div>
        </div>
      </Layout>
      `
    </>
  );
};

export default Chest;
