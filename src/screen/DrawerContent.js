import { View, StyleSheet, Alert , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Caption, Drawer, Paragraph, Title, TouchableRipple, Text, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons'



export default function DrawerContent(props) {


const [isDarkTheme, setIsDarkTheme] = useState(false);
const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
  }
       return (
        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                       
                            <TouchableOpacity onPress={() => {props.navigation.navigate('EditProfile')}}>
                            <View  style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{ uri: 'https://spng.pinpng.com/pngs/s/182-1823964_dicks-out-for-harambe-sample-image-avatar-png.png'
                                 }}
                                size={50} />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Himanshu Rana</Title>
                                <Caption style={styles.caption}>@itzhimanshu</Caption>
                            </View>
                            </View>
                            </TouchableOpacity>
                            
                       
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    180
                                </Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>

                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    100
                                </Paragraph>
                                <Caption style={styles.caption}> Follower </Caption>
                            </View>
                        </View>
                    </View>

                </View>
                <Drawer.Section style={styles.drawerSection}>

                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='home-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Home'
                        onPress = {() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='account-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Profile'
                        onPress={() => { props.navigation.navigate('Profile') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='email-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Inbox'
                        onPress={() => { props.navigation.navigate('InboxScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='send-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Outbox'
                        onPress={() => {props.navigation.navigate('OutboxScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='bookmark-outline'
                                color={color}
                                size={size}
                            />

                        )}
                        label='Bookmarks'
                        onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Ionicons
                                name='settings-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Settings'
                        onPress={() => { props.navigation.navigate('SettingScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name='account-check-outline'
                                color={color}
                                size={size}
                            />
                        )}
                        label='Support'
                        onPress={() => { props.navigation.navigate('SupportScreen') }}
                    />

                </Drawer.Section>
                <Drawer.Section title='Preferences'>
                    <TouchableRipple onPress={() => { toggleTheme() }}>
                        <View style={styles.preference}>
                            <Text> Dark Theme </Text>
                            <View pointerEvents='none'>
                                <Switch value={isDarkTheme} />
                            </View>

                        </View>
                    </TouchableRipple>
                </Drawer.Section>


            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign out'
                    onPress={()=>Alert.alert("Details","Are you sure you want to sign out ?",[
                        {text: "Yes", onPress: ()=>console.log("Yes is pressed")},
                        {text: "No", onPress: ()=>console.log("No is pressed")}
                    ])}
                />

            </Drawer.Section>

        </View >
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,

    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItem: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItem: 'center',
        marginRight: 15,

    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})