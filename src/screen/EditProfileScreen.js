import { View, Text, StyleSheet, Platform, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'react-native-paper'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import ImagePicker from 'react-native-image-crop-picker';



export default function EditProfileScreen() {

  const [image, setImage] = useState('https://spng.pinpng.com/pngs/s/182-1823964_dicks-out-for-harambe-sample-image-avatar-png.png');

  const { colors } = useTheme();
  const SheetRef = React.createRef();
  const fall = new Animated.Value(1);


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxHeight: 300,
      compressImageMaxWidth: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      

    });

  }

  const choosePhotoFromLiabrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);

    });
  }

  const renderInner = () => (
    <View style={styles.panel}>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}> Upload Photo</Text>
        <Text style={styles.panelSubTitle}>Choose your Profile Picture</Text>

      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLiabrary}>
        <Text style={styles.panelButtonTitle}>Choose from liabrary</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => SheetRef.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>

    </View>

  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}>

        </View>

      </View>

    </View>
  );


  return (
    <View style={styles.container}>
      <BottomSheet
        ref={SheetRef}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => SheetRef.current.snapTo(0)}>
            <View style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <ImageBackground source={{
                uri: image,
              }}
                style={{ height: 120, width: 120 }}
                imageStyle={{ borderRadius: 60 }}
              >
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Icon name='camera' size={35} color='#fff' style={{
                    opacity: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }} />

                </View>

              </ImageBackground>

            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 22, marginTop: 25, fontWeight: 'bold' }}>Himanshu rana</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder='First Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder='Last Name'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder='Phone'
            keyboardType='number-pad'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder='Country'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={20} />
          <TextInput
            placeholder='City'
            placeholderTextColor='#666666'
            autoCorrect={false}
            style={[styles.textInput, {
              color: colors.text
            }]}

          />

        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
          <Text style={styles.panelButtonTitle}>Update</Text>

        </TouchableOpacity>


      </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alighItem: 'center',
    marginTop: 10,

  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20
  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center'

  },
  panelHandle: {
    width: 40,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#00000080',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubTitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10

  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginVertical: 7
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,

  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    paddingLeft: 10,
    color: '#05375a'
  }




})