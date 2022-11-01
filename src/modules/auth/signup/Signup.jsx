import React, { useState } from "react";
import {
  Select,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Image,
  HStack,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const Signup = () => {
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
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formValue
      );
      toast({
        title: "Login Successfull",
        duration: 3000,
        position: "top-left",
        status: "success",
        isClosable: true,
      });
      navigate("/login");
      console.log(response);
    } catch (error) {
      toast({
        title: error.response.data || "Something went Wrong",
        duration: 3000,
        position: "top-left",
        status: "error",
        isClosable: true,
      });
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const propertiesForSale = async () => {
  //     try {
  //       const response = await fetchApi(
  //         `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  //       );
  //       const data = await response;
  //       // console.log(data.hits);
  //       setSales(data.hits);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   propertiesForSale();
  // }, []);

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

            <FormControl id='gender' isRequired={true}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                value={formValue.gender}
                onChange={(e) => setFormValue({ ...formValue, gender: e })}
              >
                <Stack direction='row' gap={"1.5rem"}>
                  <Radio value='male'>Male</Radio>
                  <Radio value='female'>Female</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <HStack spacing={"24"}>
              <FormControl id='height' isRequired={true}>
                <FormLabel>Height (in cm)</FormLabel>
                <Input
                  value={formValue.height}
                  onChange={(e) =>
                    setFormValue({ ...formValue, height: e.target.value })
                  }
                  type='number'
                  placeholder='Enter your Height'
                />
              </FormControl>
              <FormControl id='weight' isRequired={true}>
                <FormLabel>Weight (in kg)</FormLabel>
                <Input
                  value={formValue.weight}
                  onChange={(e) =>
                    setFormValue({ ...formValue, weight: e.target.value })
                  }
                  type='number'
                  placeholder='Enter your Weight'
                />
              </FormControl>
            </HStack>

            <FormControl id='phone' isRequired={true}>
              <FormLabel>Mobile No.</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+91' />
                <Input
                  value={formValue.mobile}
                  onChange={(e) =>
                    setFormValue({ ...formValue, mobile: e.target.value })
                  }
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
              <FormControl isRequired={true}>
                <FormLabel>Meal</FormLabel>
                <Select
                  value={formValue.meal}
                  onChange={(e) =>
                    setFormValue({ ...formValue, meal: e.target.value })
                  }
                  placeholder='Select Meal'
                >
                  <option value='Veg'>Veg</option>
                  <option value='Non-veg2'>Non-veg</option>
                  <option value='Eggetarian'>Eggetarian</option>
                </Select>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Workout</FormLabel>
                <Select
                  value={formValue.workout}
                  onChange={(e) =>
                    setFormValue({ ...formValue, workout: e.target.value })
                  }
                  placeholder='Select Workout'
                >
                  <option value='Beginner'>Beginner</option>
                  <option value='Intermediate'>Intermediate</option>
                  <option value='Advance'>Advance</option>
                </Select>
              </FormControl>
            </Stack>

            <FormControl id='email' isRequired={true}>
              <FormLabel>Email address</FormLabel>
              <Input
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
                type='email'
                placeholder='Enter your E-mail'
              />
            </FormControl>

            <FormControl id='password' isRequired={true}>
              <FormLabel>Password</FormLabel>
              <Input
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
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
