import { View, StyleSheet, SafeAreaView, Share } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Ionicons } from '@expo/vector-icons'


export default function ProfileScreen({ navigation }) {

    const myCustomShare = async () => {
        const shareOptions = {
            message: 'Please check this out!',

        }
        try {
            const ShareResponse = await Share.share(shareOptions);
        } catch (error) {
            console.log('Error =>', error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://spng.pinpng.com/pngs/s/182-1823964_dicks-out-for-harambe-sample-image-avatar-png.png'
                        }}
                        size={90}
                    />
                    <View style={{ marginLeft: 20 }}>

                        <Title style={styles.title}>Himanshu rana</Title>
                        <Caption style={styles.caption}>@itz_himanshu</Caption>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>


                            <Icon name='account-edit-outline' color='#ff6347' size={25} label />
                            <Text style={styles.menuItemText}> Edit Profile </Text>


                        </View>

                    </View>




                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>Mohali, India</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='phone' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>+91-9805395353</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='email' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>himanshurana576@gmail.com</Text>
                </View>



            </View>
            {/* <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>$120</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>18</Title>
                    <Caption>Orders</Caption>
                </View>

            </View> */}
            <View style={styles.menuWrapper}>

                <TouchableRipple
                    onPress={() => navigation.navigate('EditProfile')}>



                    <View style={styles.menuItem}>
                        <Icon name='account-edit-outline' color='#ff6347' size={25} label />
                        <Text style={styles.menuItemText}>Edit Profile</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple onPress={() => { }}>

                    <View style={styles.menuItem}>
                        <Icon name='heart-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Your Favorites</Text>

                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='credit-card' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Payment</Text>

                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={myCustomShare}>
                    <View style={styles.menuItem}>
                        <Icon name='share-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Tell your Friends</Text>

                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='account-check-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Support</Text>

                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Ionicons name='settings-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>

                    </View>
                </TouchableRipple>



            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }
})