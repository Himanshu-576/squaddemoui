import { View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, StatusBar, IconButton, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUp from './SignUp';



const validationSchema = yup.object().shape({
    email: yup
        .string('Enter you email')
        .email('Invalid Email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'password is too short')
        .required('password is required')
})

export default function Login({ navigation }) {
    return (

       <NativeBaseProvider>

         <Center flex={1} px="3">

                <Center w="100%"  >
 <Box safeArea p="2" py="8" w="100%" maxW="350">
                        <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"}}>
                            Welcome
                        </Heading>
                        <Heading mt="2" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="lg">
                            Sign in to continue!
                        </Heading>



                        <VStack space={3} mt="5">

                    

                            <Formik
                                validationSchema={validationSchema}
                                initialValues={{ email: '', password: '' }}
                                onSubmit={values => console.log(values)}>
                                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                                    <>
                                        <FormControl>
                                            <FormControl.Label>Email ID</FormControl.Label>
                                        </FormControl>
                                        <Input
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                        {
                                            errors.email &&
                                            <Text style={{ fontSize: 12, color: 'red' }}>{errors.email}</Text>
                                        }

                                        <FormControl>
                                            <FormControl.Label>Password</FormControl.Label>
                                            <Input type="password"
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                            />
                                            {
                                                errors.password &&
                                                <Text style={{ fontSize: 12, color: 'red' }}>{errors.password}</Text>
                                            }

                                            <TouchableOpacity>
                                                <Text style={{ color: 'blue', textDecorationLine: 'underline', alignSelf: 'flex-end', marginTop: 2, }}>Forget Password?</Text>
                                            </TouchableOpacity>


                                        </FormControl>

                                        <Button
                                            onPress={() => navigation.navigate('TabNav')}
                                            disabled={!isValid}
                                            mt="5"
                                            colorScheme="indigo" >
                                            Sign in
                                        </Button>

                                        <HStack mt="6" justifyContent="center">
                                            <Text fontSize="lg" color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }}>
                                                I'm a new user.{" "}
                                            </Text>


                                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Sign Up</Text>
                                            </TouchableOpacity>
                                        </HStack>

                                    </>
                                )}


                            </Formik>


                        </VStack>
                    </Box>
                </Center>

            </Center>
        </NativeBaseProvider>
    )
}