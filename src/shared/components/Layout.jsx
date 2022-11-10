import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import LargeWithAppLinksAndSocial from "./Footer";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between p-2 fixed bg-zinc-100 w-full'>
        {/* Hamburger Sidebar */}
        <Sidebar />

        {/* Right Avatar */}
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"md"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <br />
            <Center>
              <Avatar
                size={"xl"}
                src={"https://avatars.dicebear.com/api/male/username.svg"}
              />
            </Center>
            <br />
            <Center>
              <p>Hi,Kushagra</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Your Servers</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem onClick={() => navigate("/login")}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
      {/* Rendering Children */}
      <div className='py-[64px] bg-zinc-100'>{children}</div>
      {/* footer */}

      <LargeWithAppLinksAndSocial />
    </>
  );
};

export default Layout;
