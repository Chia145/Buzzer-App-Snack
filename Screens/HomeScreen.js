import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{

  goToBuzzerScreen1 =()=>{
    this.props.navigation.navigate('BuzzerScreen',{color:'red'});
  }
   goToBuzzerScreen2 =()=>{
    this.props.navigation.navigate('BuzzerScreen',{color:'orange'});
  } 
   goToBuzzerScreen3 =()=>{
    this.props.navigation.navigate('BuzzerScreen',{color:'yellow'});
  }
   goToBuzzerScreen4 =()=>{ 
    this.props.navigation.navigate('BuzzerScreen',{color:'green'});
  }
 
  render(){
    return(
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button,{backgroundColor:'red'}]} onPress={this.goToBuzzerScreen1}>
          <Text
          style={styles.buttonText}> 
          Team Red
         </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:'blue'}]} onPress={this.goToBuzzerScreen2}>
          <Text
          style={styles.buttonText}> 
           Team Blue
         </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:'yellow'}]} onPress={this.goToBuzzerScreen3}>
          <Text
          style={styles.buttonText}> 
           Team Yellow
         </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:'lime'}]} onPress={this.goToBuzzerScreen4}>
          <Text
          style={styles.buttonText}> 
           Team Green
         </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 70,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    height: 70,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

