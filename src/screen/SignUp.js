import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading, VStack, FormControl, Input, Link, HStack, Button, Center, NativeBaseProvider, ScrollView } from "native-base";
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Please enter your username'),
  phoneNumber: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})


export default function SignUp() {
  return (

    <NativeBaseProvider>
      <ScrollView>
        <Center flex={1} px="3">

          <Center w="100%">


            <Box safeArea p="2" w="100%" maxW="350" py="8">
              <Heading size="xl" color="coolGray.800" _dark={{
                color: "warmGray.50"
              }} fontWeight="semibold" mt='8'>
                Welcome
              </Heading>
              <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="medium" size="lg">
                Sign up to continue!
              </Heading>

              <VStack space={3} mt="5">

                <Formik
                  validationSchema={validationSchema}
                  initialValues={{ email: '', password: '' }}
                  onSubmit={values => console.log(values)}>
                  {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                      <FormControl>
                        <FormControl.Label>Full Name</FormControl.Label>

                        <Input
                          onChangeText={handleChange('fullName')}
                          onBlur={handleBlur('fullName')}

                        />
                        {
                          errors.fullName &&
                          <Text style={{ fontSize: 14, color: 'red' }}>{errors.fullName}</Text>
                        }
                      </FormControl>
                      <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>

                        <Input
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                        />
                        {
                          errors.email &&
                          <Text style={{ fontSize: 14, color: 'red' }}>{errors.email}</Text>
                        }
                      </FormControl>
                      <FormControl>
                        <FormControl.Label>Phone Number</FormControl.Label>

                        <Input
                          onChangeText={handleChange('phoneNumber')}
                          onBlur={handleBlur('phoneNumber')}
                          keyboardType='numeric'

                        />
                        {
                          errors.phoneNumber &&
                          <Text style={{ fontSize: 14, color: 'red' }}>{errors.phoneNumber}</Text>
                        }
                      </FormControl>
                      <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password"
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                        />
                        {
                          errors.password &&
                          <Text style={{ fontSize: 14, color: 'red' }}>{errors.password}</Text>
                        }

                      </FormControl>
                      <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input type="password"
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                        />
                        {
                          errors.confirmPassword &&
                          <Text style={{ fontSize: 14, color: 'red' }}>{errors.confirmPassword}</Text>
                        }

                      </FormControl>

                      <Button
                        disabled={!isValid}
                        onPress={handleSubmit}
                        mt="5"
                        colorScheme="indigo" >
                        SignUp
                      </Button>


                    </>
                  )}


                </Formik>
              </VStack>
            </Box>

          </Center>

        </Center >
      </ScrollView>
    </NativeBaseProvider >
  )
}
