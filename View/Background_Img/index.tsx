import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BackgroundImg = () => {
  

  return (
    <View>
      <ImageBackground source={require("../../Images/IX42Ma.jpg")}
      style={{height:'100%'}}  />
      <View style={{position:"absolute"}}>
        <Text  style={styles.text_style}>
          Let's Start
        </Text>

      </View>


      <TouchableOpacity>
    
       <Text></Text>
        
      </TouchableOpacity>
      
    </View>
  )
}




const styles = StyleSheet.create({
  text_style: {
    color:'white',fontSize:40,fontWeight:'800',
    padding:100
  }
})
export default BackgroundImg;




 //   style={{
        //    backgroundColor:'#136117',
        //    borderRadius:100,
        //    alignItems:'center',
        //    width:350,
        //    paddingVertical:5
        //   }}>
        // <Text style={{backgroundColor:'red',}}>Sine Up </Text>
        