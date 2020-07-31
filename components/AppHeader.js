import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render(){
    return(
      <View style = {styles.textContainer}>      
        <Text style = {styles.text}> Quiz Buzzer App </Text>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },

    textContainer:{
      backgroundColor:'pink',
      height: 50,
      justifyContent:'center',
    }

  });

export default AppHeader;
