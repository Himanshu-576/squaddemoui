import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingScreen from './SettingScreen';
import DrawerContent from './DrawerContent';
import BookmarkScreen from './BookmarkScreen';
import InboxScreen from './InboxScreen';
import OutboxScreen from './OutboxScreen';
import ProfileScreen from './ProfileScreen';




const Drawer = createDrawerNavigator();

export default function HomeTab() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>

            <Drawer.Screen name='Home' component={MainTabScreen} />
            <Drawer.Screen name='Profiles' component={ProfileScreen} options={{headerShown: false}} />
            <Drawer.Screen name='SupportScreen' component={SupportScreen} />
            <Drawer.Screen name='SettingScreen' component={SettingScreen} />
            <Drawer.Screen name='BookmarkScreen' component={BookmarkScreen} />
            <Drawer.Screen name='InboxScreen' component={InboxScreen} />
            <Drawer.Screen name='OutboxScreen' component={OutboxScreen} />

        </Drawer.Navigator>
    )
}
