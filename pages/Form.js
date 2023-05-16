import React, { useState } from "react";
import {
  HStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  FormErrorMessage,
  FormHelperText,
  InputRightElement,
  InputGroup,
  Input,
  VStack,
  Button,
  Select,
  Progress,
  Flex,
  scrollBehavior,
} from "@chakra-ui/react";
import PhoneCode from "../components/PhoneCode.json";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// main component function
function FormValid() {
  const [progValue, setProgValue] = useState(null);
  const [progColor, setProgColor] = useState(null);
  const [countryData, setCountryData] = useState(PhoneCode);
  const [show, setShow] = useState(false);
  const [optionSelect, setOptionSelect] = useState(null)
  const handleClick = () => setShow(!show);

  function validateDob(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (
      Math.floor((new Date() - new Date(value).getTime()) / 3.15576e10) < 18 &&
      Math.floor((new Date() - new Date(value).getTime()) / 3.15576e10) > 40
    ) {
      error = "Invalid age";
    }
    return error;
  }

  const Schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z\s]*$/, "Enter Valid Name")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z\s]*$/, "Enter Valid Name")
      .required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    number: Yup.string()
      .required("Required")
      .matches(/^[6-9]\d{9}$/i, "Invalid phone number"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Required";
      setProgValue(null);
      setProgColor(null);
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
        value
      )
    ) {
      setProgValue(100);
      setProgColor("green");
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i.test(
        value
      )
    ) {
      setProgValue(60);
      setProgColor("orange");
    } else {
      setProgValue(20);
      setProgColor("red");
      error = "Set Valid password";
    }
    return error;
  }

console.log(optionSelect);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={"max"}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm_password: "",
            number: "",
            dob: "",
          }}
          validationSchema={Schema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <VStack display="block" spacing={4}>
                <HStack>
                  <FormControl m={0} isRequired>
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      placeholder="Enter First Name..."
                      required={false}
                    />
                    {errors.firstName && touched.firstName ? (
                      <Box color="red">{errors.firstName}</Box>
                    ) : null}
                  </FormControl>
                  <FormControl m={0} isRequired>
                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      placeholder="Enter Last Name..."
                      required={false}
                    />

                    {errors.lastName && touched.lastName ? (
                      <Box color="red">{errors.lastName}</Box>
                    ) : null}
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl m={0} isRequired>
                    <FormLabel htmlFor="number">Phone Number</FormLabel>
                    <HStack>
                      <Select w="60%"  defaultValue="India"  onChange={(e) => setOptionSelect(e.target.value)} >
                        {countryData.map((item, id) => (
                          <option key={id} value={item.name}>
                        {item.name}    {item.international_code}
                          </option>
                        ))}
                      </Select>
                      <Field
                        as={Input}
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Enter Phone Number..."
                        required={false}
                      />
                    </HStack>
                    {errors.number && touched.number ? (
                      <Box color="red">{errors.number}</Box>
                    ) : null}
                  </FormControl>
                  <FormControl m={0} isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      placeholder="Enter Email..."
                      type="email"
                      required={false}
                    />
                    {errors.email && touched.email ? (
                      <Box color="red">{errors.email}</Box>
                    ) : null}
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl m={0} isRequired>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                      <Field
                        as={Input}
                        placeholder="Enter Password.."
                        type={show ? "text" : "password"}
                        name="password"
                        id="password"
                        validate={validatePassword}
                        required={false}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {progValue && (
                      <Progress
                        value={progValue}
                        size="xs"
                        colorScheme={progColor}
                        m={2}
                      />
                    )}
                    {errors.password && (
                      <Box color="red">{errors.password}</Box>
                    )}
                  </FormControl>
                  <FormControl m={0}>
                    <FormLabel htmlFor="confirm_password">Confirm</FormLabel>
                    <Field
                      as={Input}
                      placeholder="Confirm.."
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                    />
                    {progValue && (
                      <Progress
                        value={20}
                        size="xs"
                        colorScheme="red"
                        visibility="hidden"
                        m={2}
                      />
                    )}
                    {errors.confirm_password && (
                      <Box color="red">{errors.confirm_password}</Box>
                    )}
                  </FormControl>
                </HStack>
                <FormControl m={0} isRequired>
                  <FormLabel htmlFor="dob">DOB :</FormLabel>
                  <Field
                    as={Input}
                    type="date"
                    name="dob"
                    placeholder="dd-mm-yyyy"
                    min="1960-01-01"
                    max="2000-08-12"
                    id="dob"
                    validate={validateDob}
                    required={false}
                  />
                  {errors.dob && touched.dob ? (
                    <Box color="red">{errors.dob}</Box>
                  ) : null}
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Submit
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default FormValid;
