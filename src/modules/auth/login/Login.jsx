import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Abs = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log(formValue);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formValue
      );
      toast({
        title: "Login Successfull",
        duration: 3000,
        position: "top-left",
        status: "success",
        isClosable: true,
      });
      navigate("/home");
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        title: error.response.data || "Something went Wrong",
        duration: 3000,
        position: "top-left",
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              placeholder='Enter your Email'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={formValue.password}
              onChange={(e) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
              placeholder='Enter your Password'
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={() => handleSubmit()}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export default Abs;
