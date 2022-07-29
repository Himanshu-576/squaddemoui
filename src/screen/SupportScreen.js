import { View, Text , StyleSheet, Button} from 'react-native'
import React from 'react'


export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text>SupportScreen</Text>
      <Button
      title="Click here"
      onPress={()=>alert('Button Clicked !')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
})