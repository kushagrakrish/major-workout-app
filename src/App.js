import React from "react";
import Home from "./modules/home/Home";
import "./App.css";
import Signup from "./modules/auth/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./modules/auth/login/Login";
import Home from "./modules/home/Home";
import Abs from "./modules/abs/Abs";
import Arms from "./modules/arms/Arms";
import Back from "./modules/back/Back";
import Calendar from "./modules/calendar/Calendar";
import Chest from "./modules/chest/Chest";
import Kanban from "./modules/kanban/Kanban";
import Legs from "./modules/legs/Legs";
import Shoulder from "./modules/shoulder/Shoulder";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='abs' element={<Abs />} />
        <Route path='arms' element={<Arms />} />
        <Route path='back' element={<Back />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='chest' element={<Chest />} />
        <Route path='kanban' element={<Kanban />} />
        <Route path='legs' element={<Legs />} />
        <Route path='shoulder' element={<Shoulder />} />
      </Routes>
    </>
  );
};

export default App;
