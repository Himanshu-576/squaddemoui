import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HomeTab from '../HomeTab';
import SearchTab from '../SearchTab';
import AddTab from '../AddTab';
import ActivityTab from '../ActivityTab';
import ProfileScreen from '../ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (

        <Tab.Navigator
            initialRouteName='HomeTab'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    
                    let iconName;

                    if (route.name === 'Homes') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                        size = focused ? size + 6 : size + 3;
                    }
                    else if (route.name === 'Search') {
                        iconName = focused ? 'search-sharp' : 'search-outline';
                        size = focused ? size + 6 : size + 3;
                    }
                    else if (route.name === 'Add') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                        size = focused ? size + 6 : size + 3;
                    }
                    else if (route.name === 'Activity') {
                        iconName = focused ? 'heart' : 'heart-outline';
                        size = focused ? size + 6 : size + 3;
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    }
                    size = focused ? size + 6 : size + 3;


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#ffc125',
                    height: 60
                }
            })}
        >

            <Tab.Screen name='Homes' component={HomeTab} options={{ headerShown: false }} />
            <Tab.Screen name='Search' component={SearchTab} />
            <Tab.Screen name='Add' component={AddTab} />
            <Tab.Screen name='Activity' component={ActivityTab} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}