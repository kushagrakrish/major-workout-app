import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const links = [
  {
    title: "Pages",
    links: [
      {
        name: "Home",
        path: "home",
      },
      {
        name: "Abs",
        path: "abs",
      },
      {
        name: "Biceps",
        path: "biceps",
      },
      {
        name: "Triceps",
        path: "triceps",
      },
      {
        name: "Chest",
        path: "chest",
      },
      {
        name: "Shoulder",
        path: "shoulder",
      },
      {
        name: "Leg",
        path: "leg",
      },
      {
        name: "Back",
        path: "back",
      },
      {
        name: "Kanban",
        path: "kanban",
      },
      {
        name: "Calendar",
        path: "calendar",
      },
    ],
  },
];
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen} className=''>
        <FaBars className='text-xl' />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <div className='flex justify-between items-center'>
              Fitcare Recommendation
              <AiFillCloseCircle
                onClick={onClose}
                className='text-[2.1rem] rounded-full bg-white text-[#3182ce] font-bold cursor-pointer hover:text-[#1c71c0]'
              />
              {/* </Button> */}
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div>
              {links.map((item) => (
                <div key={item.name}>
                  <p className='text-gray-400 text-xl mt-3 font-semibold uppercase '>
                    {item.title}
                  </p>
                  <div className=' h-screen flex flex-col items-start justify-around'>
                    {item.links.map((link) => (
                      <NavLink
                        className='block w-full hover:bg-slate-100 hover:opacity-100 text-xl hover:rounded-md '
                        to={`/${link.path}`}
                      >
                        <h2
                          className='text-gray-800 hover:text-gray-600 mt-4 mb-4'
                          onClick={onClose}
                        >
                          {link.name}
                        </h2>
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
