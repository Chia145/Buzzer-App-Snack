import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from '../Config';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  isButtonPressed(buttonColor){
    var time = new Date().getTime();
    var team = db.ref('teams/'+ buttonColor +'/');
    team.update({ 
      'isButtonPressed': true, 
      timestamp : time
    })
  }
 
  render() {
    return (
      <TouchableOpacity
        style={[styles.button,{backgroundColor:this.props.color}]}
        onPress={()=>{
          var buttonColor = this.props.color
          this.isButtonPressed(buttonColor)
          this.playSound
        }}>
        <Text
          style={styles.buttonText}>
          Press Me
        </Text>
      </TouchableOpacity>
      
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default SoundButton;

