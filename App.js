import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './src/screen/WelcomeScreen';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
// import HomeScreen from './src/screen/HomeScreen';
import TabNav from './src/screen/Navigator/TabNav';
import EditProfileScreen from './src/screen/EditProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen
        style={styles.container}
        name='login'
        component={Login}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name='Register'
        component={SignUp}
        options={{ headerShown: true }}
      />

    </Stack.Navigator>
  )
}

export default function App() {
  return (
 
<NavigationContainer>
<Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Auth"
          component={Authentication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='TabNav'
          component={TabNav}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='EditProfile'
          component={EditProfileScreen}
          options={{ headerShown: false }}
        /> */}

      </Stack.Navigator>
</NavigationContainer>
  );
}
