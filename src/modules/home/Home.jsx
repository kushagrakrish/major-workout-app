import React from "react";
import Navbar from "../../shared/components/Navbar";
import Sidebar from "../../shared/components/Sidebar";

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-between ml-11 mr-20 h-20 border-b'>
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
