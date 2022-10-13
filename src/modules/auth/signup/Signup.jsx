import React, { useState } from "react";
import {
  Select,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Radio,
  RadioGroup,
  Image,
  HStack,
  InputLeftAddon,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [value, setValue] = useState("1");
  const [errvalue, setErrvalue] = useState({
    name: false,
    gender: false,
    height: false,
    weight: false,
    mobile: false,
    email: false,
    meal: false,
    workout: false,
    password: false,
  });
  const [formValue, setFormValue] = useState({
    name: "",
    gender: "",
    height: "",
    weight: "",
    mobile: "",
    meal: "",
    workout: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.name === "") {
      setErrvalue({
        ...errvalue,
        name: true,
      });
    }
    if (formValue.gender === "") {
      setErrvalue({
        ...errvalue,
        gender: true,
      });
    }
    if (formValue.height === "") {
      setErrvalue({
        ...errvalue,
        height: true,
      });
    }
    if (formValue.weight === "") {
      setErrvalue({
        ...errvalue,
        weight: true,
      });
    }
    if (formValue.mobile === "") {
      setErrvalue({
        ...errvalue,
        mobile: true,
      });
    }
    if (formValue.meal === "") {
      setErrvalue({
        ...errvalue,
        meal: true,
      });
    }
    if (formValue.workout === "") {
      setErrvalue({
        ...errvalue,
        workout: true,
      });
    }
    if (formValue.email === "") {
      setErrvalue({
        ...errvalue,
        email: true,
      });
    }
    if (formValue.password === "") {
      setErrvalue({
        ...errvalue,
        password: true,
      });
    } else {
      console.log(formValue);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack
        className='bg-gray-100'
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"md"}>
            <Heading fontSize={"3xl"}>Welcome Abroad</Heading>
            <h2 className='text-gray-600 font-semibold text-lg'>
              Create a free account. Have an account{" "}
              <a
                href='#'
                className='text-blue-600 font-semibold'
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </h2>
            <FormControl id='name' isRequired={true}>
              <FormLabel>Name</FormLabel>
              <Input
                value={formValue.name}
                onChange={(e) =>
                  setFormValue({ ...formValue, name: e.target.value })
                }
                type='text'
                placeholder='Enter your Name'
              />
            </FormControl>
            <FormControl id='gender'>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                value={formValue.gender}
                onChange={(e) =>
                  setFormValue({ ...formValue, gender: e.target.value })
                }
              >
                <Stack direction='row' gap={"1.5rem"}>
                  <Radio value='1'>Male</Radio>
                  <Radio value='2'>Female</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <HStack spacing={"24"}>
              <FormControl id='height'>
                <FormLabel>Height (in cm)</FormLabel>
                <Input
                  value={formValue.height}
                  onChange={(e) => setFormValue(e.target.value)}
                  type='number'
                  placeholder='Enter your Height'
                />
              </FormControl>
              <FormControl id='weight'>
                <FormLabel>Weight (in kg)</FormLabel>
                <Input
                  value={formValue.weight}
                  onChange={(e) => setFormValue(e.target.value)}
                  type='number'
                  placeholder='Enter your Weight'
                />
              </FormControl>
            </HStack>
            <FormControl id='phone'>
              <FormLabel>Mobile No.</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+91' />
                <Input
                  value={formValue.mobile}
                  onChange={(e) => setFormValue(e.target.value)}
                  type='tel'
                  placeholder='Enter your Mobile No.'
                />
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              margin={"80"}
            >
              <FormLabel>Meal</FormLabel>
              <Select
                value={formValue.meal}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder='Select Meal'
              >
                <option value='option1'>Veg</option>
                <option value='option2'>Non-veg</option>
                <option value='option3'>Eggetarian</option>
              </Select>
              <FormLabel>Workout</FormLabel>
              <Select
                value={formValue.workout}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder='Select Workout'
              >
                <option value='option1'>Beginner</option>
                <option value='option2'>Intermediate</option>
                <option value='option3'>Advance</option>
              </Select>
            </Stack>{" "}
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                value={formValue.email}
                onChange={(e) => setFormValue(e.target.value)}
                type='email'
                placeholder='Enter your E-mail'
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={formValue.password}
                onChange={(e) => setFormValue(e.target.value)}
                type='password'
                placeholder='Enter your Password'
              />
            </FormControl>
            <Button type='submit' colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            className='h-screen right-0 opacity-80 bg-gray-800'
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://wallpaperaccess.com/full/1107999.jpg"}
          />
        </Flex>
      </Stack>
    </form>
  );
};

export default Signup;
