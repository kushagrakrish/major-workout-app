import React from "react";
import Home from "./modules/home/Home";
import "./App.css";
import Signup from "./modules/auth/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./modules/auth/login/Login";
import Abs from "./modules/abs/Abs";
import Back from "./modules/back/Back";
import Calendar from "./modules/calendar/Calendar";
import Chest from "./modules/chest/Chest";
import Kanban from "./modules/kanban/Kanban";
import Legs from "./modules/legs/Legs";
import Shoulder from "./modules/shoulder/Shoulder";
import Biceps from "./modules/arms/Biceps";
import Triceps from "./modules/arms/Triceps";
import { AuthProvider } from "./context/auth";

const App = () => {
  // <<<<<<< HEAD
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='abs' element={<Abs />} />
          <Route path='biceps' element={<Biceps />} />
          <Route path='triceps' element={<Triceps />} />
          <Route path='back' element={<Back />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='chest' element={<Chest />} />
          <Route path='kanban' element={<Kanban />} />
          <Route path='leg' element={<Legs />} />
          <Route path='shoulder' element={<Shoulder />} />
        </Routes>
      </AuthProvider>
    </>
  );

  //  6a1ee18ce4547d2434f7757b8999815eea1e1208
};

export default App;
