import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../shared/components/Layout";

const Shoulder = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchShoulder = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/exercise/shoulder"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShoulder();
  }, []);
  return (
    <>
      <Layout>
        <div className='bg-zinc-100'>
          <h1 className='text-[36px] font-bold text-blue-500 block text-center tracking-[5px]'>
            {data.categoryName}
          </h1>
          {/* Main div which will contain all exercises */}
          <div className='flex flex-col w-[80%] mx-auto my-0 gap-10'></div>
        </div>
      </Layout>
      `
    </>
  );
};

export default Shoulder;
