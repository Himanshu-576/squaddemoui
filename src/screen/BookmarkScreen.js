import { View, Text , Button} from 'react-native'
import React from 'react'

export default function BookmarkScreen() {
  return (
    <View 
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Bookmark Screen!</Text>
    <Button
      title="Click here"
      onPress={()=>alert('Button Clicked !')}
      />
  </View>
  )
}